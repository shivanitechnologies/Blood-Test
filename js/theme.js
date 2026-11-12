(() => {
  const saved = localStorage.getItem("nova-theme");
  if (saved === "dark") document.documentElement.classList.add("is-dark");
  const dir = localStorage.getItem("nova-dir");
  if (dir === "rtl") document.documentElement.dir = "rtl";
  const syncDirectionControls = () => {
    const current = document.documentElement.dir === "rtl" ? "rtl" : "ltr";
    document.querySelectorAll(".direction-btn").forEach(button => {
      button.textContent = current === "rtl" ? "LTR" : "RTL";
      button.setAttribute("aria-label", `Switch to ${current === "rtl" ? "left-to-right" : "right-to-left"} layout`);
      button.setAttribute("aria-pressed", String(current === "rtl"));
    });
  };
  window.NovaTheme = {
    toggle() {
      document.documentElement.classList.toggle("is-dark");
      localStorage.setItem("nova-theme", document.documentElement.classList.contains("is-dark") ? "dark" : "light");
    },
    setDirection(next) {
      document.documentElement.dir = next;
      localStorage.setItem("nova-dir", next);
      syncDirectionControls();
    },
    direction() { this.setDirection(document.documentElement.dir === "rtl" ? "ltr" : "rtl"); }
  };
  document.addEventListener("DOMContentLoaded", syncDirectionControls);
})();
