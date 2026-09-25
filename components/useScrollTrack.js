"use client";
import { useCallback, useEffect, useRef, useState } from "react";

// Horizontal scroll-snap track: tracks the active card and scrolls to one on demand
export default function useScrollTrack(count) {
  const ref = useRef(null);
  const requested = useRef(null); // last card picked via dot/arrow
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.children[0];
      if (!card) return;
      const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || 0);
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
      // Near the end the last cards can't reach the left edge, so trust the dot that was clicked
      const idx = atEnd ? requested.current ?? count - 1 : Math.round(el.scrollLeft / step);
      setActive(Math.min(count - 1, Math.max(0, idx)));
    };
    const manual = () => { requested.current = null; };
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("pointerdown", manual);
    el.addEventListener("wheel", manual, { passive: true });
    el.addEventListener("touchstart", manual, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerdown", manual);
      el.removeEventListener("wheel", manual);
      el.removeEventListener("touchstart", manual);
    };
  }, [count]);

  const go = useCallback((idx) => {
    const el = ref.current;
    const card = el?.children[idx];
    if (!card) return;
    requested.current = idx;
    setActive(idx);
    el.scrollTo({ left: card.offsetLeft - el.children[0].offsetLeft, behavior: "smooth" });
  }, []);

  return { ref, active, go };
}
