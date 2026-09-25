"use client";
import { useEffect, useState } from "react";

// Brand loading screen: glimmer pattern + logo. Shows once per session.
// Closes on window load, or after 4s max. CSS also fades it out by itself
// (see .preloader animation) so it can never stay stuck even if JS fails.
export default function Preloader() {
  const [state, setState] = useState("show"); // show | hide | gone

  useEffect(() => {
    if (sessionStorage.getItem("3b-loaded")) { setState("gone"); return; }

    const start = Date.now();
    const timers = [];
    let finished = false;

    const done = () => {
      if (finished) return;
      finished = true;
      const wait = Math.max(0, 1000 - (Date.now() - start));
      timers.push(setTimeout(() => {
        setState("hide");
        sessionStorage.setItem("3b-loaded", "1");
        timers.push(setTimeout(() => setState("gone"), 600));
      }, wait));
    };

    if (document.readyState === "complete") done();
    else window.addEventListener("load", done, { once: true });
    timers.push(setTimeout(done, 4000)); // slow images/fonts shouldn't block the site

    return () => {
      window.removeEventListener("load", done);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (state === "gone") return null;
  return (
    <div className={`preloader ${state === "hide" ? "is-hiding" : ""}`} aria-hidden="true">
      <div className="preloader-glimmer" />
      <img src="/brand/logo-color.svg" alt="" className="preloader-logo" />
    </div>
  );
}
