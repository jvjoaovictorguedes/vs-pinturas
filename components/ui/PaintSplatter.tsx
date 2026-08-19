"use client";

import { useCallback, useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

type PaintStroke = {
  points: Point[];
};

type PaintRevealProps = {
  className?: string;
  color?: string;
};

const BRUSH_WIDTH = 150;
const MAX_STROKES = 1200;

export default function PaintReveal({
  className = "",
  color = "#dd1f1f",
}: PaintRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<number | null>(null);
  const strokesRef = useRef<PaintStroke[]>([]);

  const mouseRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    active: false,
  });

  const mobileRef = useRef(false);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    mouseRef.current.x = rect.width * 0.72;
    mouseRef.current.y = rect.height * 0.5;
    mouseRef.current.targetX = rect.width * 0.72;
    mouseRef.current.targetY = rect.height * 0.5;
  }, []);

  const createWallTexture = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    /*
     * Textura base da parede.
     * Não usamos uma imagem externa:
     * o ruído é criado proceduralmente.
     */

    ctx.save();

    ctx.globalCompositeOperation = "source-over";

    /*
     * Fundo quase preto.
     */
    ctx.fillStyle = "#171716";
    ctx.fillRect(0, 0, rect.width, rect.height);

    /*
     * Textura fina.
     */
    const amount = Math.min(
      Math.floor((rect.width * rect.height) / 140),
      18000,
    );

    for (let i = 0; i < amount; i++) {
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;

      const size = Math.random() * 1.8 + 0.3;

      const brightness =
        Math.random() > 0.5
          ? Math.floor(Math.random() * 25)
          : Math.floor(Math.random() * 12);

      ctx.fillStyle = `rgba(255,255,255,${brightness / 1000})`;

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    /*
     * Algumas pequenas irregularidades,
     * simulando uma parede texturizada.
     */
    ctx.globalAlpha = 0.16;

    for (let i = 0; i < 350; i++) {
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;

      const length = Math.random() * 10 + 2;

      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = Math.random() * 0.7 + 0.2;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + length, y + (Math.random() - 0.5) * 4);
      ctx.stroke();
    }

    ctx.restore();
  }, []);

  const paintAt = useCallback(
    (ctx: CanvasRenderingContext2D, x: number, y: number) => {
      /*
       * Área principal da tinta.
       */
      const gradient = ctx.createRadialGradient(
        x - BRUSH_WIDTH * 0.15,
        y - BRUSH_WIDTH * 0.15,
        5,
        x,
        y,
        BRUSH_WIDTH,
      );

      gradient.addColorStop(0, color);
      gradient.addColorStop(0.65, color);
      gradient.addColorStop(1, `${color}cc`);

      ctx.save();

      ctx.globalCompositeOperation = "source-over";

      ctx.fillStyle = gradient;

      /*
       * Forma irregular do rolo.
       */
      ctx.beginPath();

      const points = 36;

      for (let i = 0; i <= points; i++) {
        const angle = (Math.PI * 2 * i) / points;

        const variation =
          BRUSH_WIDTH * 0.55 +
          Math.sin(angle * 4 + x * 0.01) * 10 +
          Math.random() * 7;

        const px = x + Math.cos(angle) * variation;

        const py = y + Math.sin(angle) * variation * 0.42;

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.closePath();
      ctx.fill();

      /*
       * Pequenas marcas da textura da pintura.
       */
      ctx.globalAlpha = 0.12;

      for (let i = 0; i < 20; i++) {
        const offsetX = (Math.random() - 0.5) * BRUSH_WIDTH;

        const offsetY = (Math.random() - 0.5) * BRUSH_WIDTH * 0.35;

        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = Math.random() * 2 + 0.5;

        ctx.beginPath();

        ctx.moveTo(x + offsetX, y + offsetY);

        ctx.lineTo(
          x + offsetX + Math.random() * 30 - 15,
          y + offsetY + Math.random() * 8 - 4,
        );

        ctx.stroke();
      }

      ctx.restore();
    },
    [color],
  );

  const drawRoller = useCallback(
    (ctx: CanvasRenderingContext2D, x: number, y: number) => {
      /*
       * Rolo minimalista.
       * Ele fica discreto para não virar
       * uma ilustração infantil.
       */

      const width = 92;
      const height = 28;

      ctx.save();

      ctx.translate(x, y);
      ctx.rotate(-0.18);

      /*
       * sombra
       */
      ctx.shadowColor = "rgba(0,0,0,0.45)";
      ctx.shadowBlur = 18;
      ctx.shadowOffsetY = 8;

      /*
       * espuma/rolo
       */
      const rollerGradient = ctx.createLinearGradient(
        -width / 2,
        0,
        width / 2,
        0,
      );

      rollerGradient.addColorStop(0, "#8f1718");
      rollerGradient.addColorStop(0.5, color);
      rollerGradient.addColorStop(1, "#8f1718");

      ctx.fillStyle = rollerGradient;

      ctx.beginPath();

      ctx.roundRect(-width / 2, -height / 2, width, height, 14);

      ctx.fill();

      /*
       * brilho
       */
      ctx.shadowColor = "transparent";
      ctx.globalAlpha = 0.18;
      ctx.fillStyle = "#ffffff";

      ctx.beginPath();

      ctx.roundRect(-width / 2 + 8, -height / 2 + 5, width - 16, 5, 4);

      ctx.fill();

      /*
       * haste
       */
      ctx.globalAlpha = 1;

      ctx.strokeStyle = "#b7b7b3";
      ctx.lineWidth = 5;
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.moveTo(width / 2 - 2, 0);
      ctx.lineTo(width / 2 + 30, 20);
      ctx.stroke();

      /*
       * cabo
       */
      ctx.strokeStyle = "#73736f";
      ctx.lineWidth = 8;

      ctx.beginPath();
      ctx.moveTo(width / 2 + 30, 20);
      ctx.lineTo(width / 2 + 46, 40);
      ctx.stroke();

      ctx.restore();
    },
    [color],
  );

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const rect = container.getBoundingClientRect();

    /*
     * Movimento suave do cursor.
     */
    const mouse = mouseRef.current;

    mouse.x += (mouse.targetX - mouse.x) * 0.12;

    mouse.y += (mouse.targetY - mouse.y) * 0.12;

    /*
     * A tinta só aparece quando o mouse
     * está interagindo.
     */
    if (mouse.active || mobileRef.current) {
      paintAt(ctx, mouse.x, mouse.y);

      /*
       * Pequena trilha de tinta.
       */
      strokesRef.current.push({
        points: [
          {
            x: mouse.x,
            y: mouse.y,
          },
        ],
      });

      if (strokesRef.current.length > MAX_STROKES) {
        strokesRef.current.shift();
      }
    }

    /*
     * Rolo acompanha o cursor.
     */
    if (mouse.active || mobileRef.current) {
      drawRoller(ctx, mouse.x, mouse.y);
    }

    /*
     * Mobile:
     * percorre lentamente a superfície.
     */
    if (mobileRef.current) {
      const time = performance.now() * 0.00025;

      mouse.targetX = rect.width * (0.5 + Math.sin(time) * 0.35);

      mouse.targetY = rect.height * (0.48 + Math.sin(time * 0.7) * 0.18);
    }

    animationRef.current = requestAnimationFrame(render);
  }, [drawRoller, paintAt]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    resizeCanvas();

    createWallTexture();

    mobileRef.current = window.matchMedia("(pointer: coarse)").matches;

    const handleMouseMove = (event: MouseEvent) => {
      if (mobileRef.current) return;

      const rect = container.getBoundingClientRect();

      mouseRef.current.targetX = event.clientX - rect.left;

      mouseRef.current.targetY = event.clientY - rect.top;

      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    container.addEventListener("mousemove", handleMouseMove);

    container.addEventListener("mouseleave", handleMouseLeave);

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      createWallTexture();
    });

    resizeObserver.observe(container);

    animationRef.current = requestAnimationFrame(render);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);

      container.removeEventListener("mouseleave", handleMouseLeave);

      resizeObserver.disconnect();

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createWallTexture, render, resizeCanvas]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
    </div>
  );
}
