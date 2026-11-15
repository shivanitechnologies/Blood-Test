(() => {
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const scrollers = new WeakMap();
  let revealObserver;
  let countObserver;

  const bindAutoScroller = ({ track, viewport, speed = 48, hoverTarget }) => {
    if (!track || !viewport || scrollers.has(track)) return;
    viewport.dir = "ltr";

    const controlsRoot = track.closest(".home-category-strip, .nova-gallery-section") || track.parentElement;
    if (!controlsRoot) return;
    const pauseTarget = hoverTarget || controlsRoot;
    const state = {
      hovered: false,
      focused: false,
      visible: false,
      frame: 0,
      lastFrameTime: 0
    };

    const canRun = () => !motionPreference.matches
      && state.visible
      && !state.hovered
      && !state.focused
      && document.visibilityState === "visible";

    const stop = () => {
      if (state.frame) cancelAnimationFrame(state.frame);
      state.frame = 0;
      state.lastFrameTime = 0;
    };

    const tick = now => {
      state.frame = 0;
      if (!canRun()) {
        state.lastFrameTime = 0;
        return;
      }

      const loopAt = track.firstElementChild?.getBoundingClientRect().width || 0;
      if (loopAt > 0) {
        const elapsed = state.lastFrameTime ? Math.min(now - state.lastFrameTime, 50) : 16;
        const nextPosition = viewport.scrollLeft + speed * elapsed / 1000;
        viewport.scrollLeft = nextPosition >= loopAt ? nextPosition % loopAt : nextPosition;
      }
      state.lastFrameTime = now;
      state.frame = requestAnimationFrame(tick);
    };

    const update = () => {
      if (canRun()) {
        if (!state.frame) state.frame = requestAnimationFrame(tick);
      } else {
        stop();
      }
    };

    pauseTarget.addEventListener("pointerenter", () => { state.hovered = true; update(); });
    pauseTarget.addEventListener("pointerleave", () => { state.hovered = false; update(); });
    controlsRoot.addEventListener("focusin", () => { state.focused = true; update(); });
    controlsRoot.addEventListener("focusout", event => {
      if (!controlsRoot.contains(event.relatedTarget)) {
        state.focused = false;
        update();
      }
    });
    document.addEventListener("visibilitychange", update);
    motionPreference.addEventListener("change", update);

    if ("IntersectionObserver" in window) {
      const visibility = new IntersectionObserver(entries => {
        state.visible = entries[0].isIntersecting;
        update();
      }, { threshold: 0 });
      visibility.observe(viewport);
    } else {
      state.visible = true;
    }

    scrollers.set(track, state);
    update();
  };

  const start = () => {
    if ("IntersectionObserver" in window) {
      if (!revealObserver) {
        revealObserver = new IntersectionObserver(items => items.forEach(item => {
          if (!item.isIntersecting) return;
          item.target.classList.add("visible");
          revealObserver.unobserve(item.target);
        }), { threshold: .12 });
      }
      document.querySelectorAll(".reveal:not([data-reveal-observed])").forEach(element => {
        element.dataset.revealObserved = "true";
        revealObserver.observe(element);
      });

      if (!countObserver) {
        countObserver = new IntersectionObserver(items => items.forEach(item => {
          if (!item.isIntersecting) return;
          const node = item.target;
          const target = Number(node.dataset.count);
          const suffix = node.dataset.suffix || "";
          countObserver.unobserve(node);
          if (motionPreference.matches) {
            node.textContent = target.toLocaleString() + suffix;
            return;
          }
          const startTime = performance.now();
          const duration = 1100;
          const tick = now => {
            const progress = Math.min(1, (now - startTime) / duration);
            node.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3))).toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }), { threshold: .5 });
      }
      document.querySelectorAll("[data-count]:not([data-count-observed])").forEach(element => {
        element.dataset.countObserved = "true";
        countObserver.observe(element);
      });
    } else {
      document.querySelectorAll(".reveal").forEach(element => element.classList.add("visible"));
      document.querySelectorAll("[data-count]").forEach(element => {
        element.textContent = Number(element.dataset.count).toLocaleString() + (element.dataset.suffix || "");
      });
    }

    document.querySelectorAll("[data-auto-track]").forEach(track => {
      track.dir = "ltr";
      bindAutoScroller({ track, viewport: track, speed: 50 });
    });
  };

  window.NovaAnimations = { start, bindAutoScroller };
})();
