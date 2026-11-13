(() => {
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const scrollers = new WeakMap();
  let revealObserver;
  let countObserver;

  const bindAutoScroller = ({ track, viewport, speed = 48, hoverTarget = viewport }) => {
    if (!track || !viewport || scrollers.has(track)) return;

    const controlsRoot = track.closest(".home-category-strip, .nova-gallery-section") || track.parentElement;
    const toggleButton = controlsRoot.querySelector("[data-slider-toggle]");
    const previousButton = controlsRoot.querySelector("[data-slider-prev]");
    const nextButton = controlsRoot.querySelector("[data-slider-next]");
    const state = {
      manuallyPaused: false,
      hovered: false,
      focused: false,
      interacting: false,
      visible: false,
      frame: 0,
      lastFrameTime: 0,
      resumeTimer: 0
    };

    const canRun = () => !motionPreference.matches
      && state.visible
      && !state.manuallyPaused
      && !state.hovered
      && !state.focused
      && !state.interacting
      && document.visibilityState === "visible";

    const stop = () => {
      if (state.frame) cancelAnimationFrame(state.frame);
      state.frame = 0;
      state.lastFrameTime = 0;
    };

    const updateButton = () => {
      if (!toggleButton) return;
      toggleButton.disabled = motionPreference.matches;
      toggleButton.textContent = motionPreference.matches
        ? "Motion off"
        : state.manuallyPaused ? "Resume" : "Pause";
      toggleButton.setAttribute("aria-pressed", String(state.manuallyPaused));
      toggleButton.setAttribute("aria-label", motionPreference.matches
        ? "Automatic movement disabled by reduced motion preference"
        : `${state.manuallyPaused ? "Resume" : "Pause"} automatic ${toggleButton.dataset.sliderName || "image"} movement`);
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
      updateButton();
      if (canRun()) {
        if (!state.frame) state.frame = requestAnimationFrame(tick);
      } else {
        stop();
      }
    };

    const resumeAfterInteraction = () => {
      state.interacting = true;
      clearTimeout(state.resumeTimer);
      state.resumeTimer = window.setTimeout(() => {
        state.interacting = false;
        state.resumeTimer = 0;
        update();
      }, 1800);
      update();
    };

    const moveByCard = direction => {
      const card = track.querySelector(".nova-gallery-card, .test-chip");
      const step = Math.max(card?.getBoundingClientRect().width || 0, viewport.clientWidth * .8);
      viewport.scrollBy({ left: direction * step, behavior: motionPreference.matches ? "auto" : "smooth" });
      resumeAfterInteraction();
    };

    toggleButton?.addEventListener("click", () => {
      state.manuallyPaused = !state.manuallyPaused;
      update();
    });
    previousButton?.addEventListener("click", () => moveByCard(-1));
    nextButton?.addEventListener("click", () => moveByCard(1));
    hoverTarget.addEventListener("pointerenter", () => { state.hovered = true; update(); });
    hoverTarget.addEventListener("pointerleave", () => { state.hovered = false; update(); });
    viewport.addEventListener("focusin", () => { state.focused = true; update(); });
    viewport.addEventListener("focusout", event => {
      if (!viewport.contains(event.relatedTarget)) {
        state.focused = false;
        update();
      }
    });
    viewport.addEventListener("wheel", resumeAfterInteraction, { passive: true });
    viewport.addEventListener("pointerdown", () => {
      state.interacting = true;
      update();
      window.addEventListener("pointerup", resumeAfterInteraction, { once: true });
      window.addEventListener("pointercancel", resumeAfterInteraction, { once: true });
    });
    viewport.addEventListener("keydown", event => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      moveByCard(event.key === "ArrowRight" ? 1 : -1);
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
