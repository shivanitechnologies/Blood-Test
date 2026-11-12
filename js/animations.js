(() => {
  const start = () => {
    const reveal = new IntersectionObserver(items => items.forEach(item => {
      if (item.isIntersecting) { item.target.classList.add("visible"); reveal.unobserve(item.target); }
    }), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));
    const counts = new IntersectionObserver(items => items.forEach(item => {
      if (!item.isIntersecting) return;
      const node = item.target, target = Number(node.dataset.count), startTime = performance.now(), duration = 1100;
      const tick = now => {
        const progress = Math.min(1, (now - startTime) / duration);
        node.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3))).toLocaleString() + (node.dataset.suffix || "");
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick); counts.unobserve(node);
    }), { threshold: .5 });
    document.querySelectorAll("[data-count]").forEach(el => counts.observe(el));
    const track = document.querySelector("[data-test-track]");
    if (track && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.dir = "ltr";
      let paused = false;
      const move = () => {
        const loopAt = track.scrollWidth / 2;
        if (!paused && loopAt > 0) {
          track.scrollLeft += 1;
          if (track.scrollLeft >= loopAt) track.scrollLeft -= loopAt;
        }
        requestAnimationFrame(move);
      };
      track.addEventListener("mouseenter", () => { paused = true; });
      track.addEventListener("mouseleave", () => { paused = false; });
      track.addEventListener("focusin", () => { paused = true; });
      track.addEventListener("focusout", event => { if (!track.contains(event.relatedTarget)) paused = false; });
      track.addEventListener("touchstart", () => { paused = true; }, { passive: true });
      track.addEventListener("touchend", () => { setTimeout(() => { paused = false; }, 1200); }, { passive: true });
      requestAnimationFrame(move);
    }
  };
  window.NovaAnimations = { start };
})();
