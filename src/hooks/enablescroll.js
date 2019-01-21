import { useDestroyed } from "vue-hooks";

export function enablescroll() {
  useDestroyed(() => {
    const preventDefault = (e) => {
      e.returnValue = false;
    }

    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
    //enable scroll on mobile
    document.removeEventListener('touchmove', preventDefault, false);
  });
}