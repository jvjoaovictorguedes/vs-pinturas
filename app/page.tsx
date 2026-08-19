import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import ServicosPreview from "@/components/sections/ServicosPreview";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Diferenciais from "@/components/sections/Diferenciais";
import Depoimentos from "@/components/sections/Depoimentos";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ServicosPreview />
      <ComoFunciona />
      <Diferenciais />
      <Depoimentos />
      <CtaBand />
    </>
  );
}
