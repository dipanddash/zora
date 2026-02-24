import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollAllToTop() {
  // window/body
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  document.scrollingElement && (document.scrollingElement.scrollTop = 0);

  // scroll any scrollable containers (common in layouts)
  const nodes = Array.from(document.querySelectorAll<HTMLElement>("*"));
  for (const el of nodes) {
    const style = window.getComputedStyle(el);
    const canScroll =
      (style.overflowY === "auto" || style.overflowY === "scroll") &&
      el.scrollHeight > el.clientHeight;

    if (canScroll) el.scrollTop = 0;
  }
}

const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    // run immediately
    scrollAllToTop();

    // run again after next paint (fixes “starts from middle” due to re-render)
    requestAnimationFrame(() => {
      scrollAllToTop();
    });

    // one more safety after route content mounts
    setTimeout(() => {
      scrollAllToTop();
    }, 0);
  }, [location.pathname, location.search, location.hash, location.key]);

  return null;
};

export default ScrollToTop;