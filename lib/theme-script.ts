// Executado inline no <head>, antes da hidratação do React,
// para aplicar o tema correto sem "flash" de tela clara/escura.
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('vs-pinturas-theme');
    var theme = stored
      ? stored
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;
