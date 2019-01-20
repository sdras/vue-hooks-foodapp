import { useDestroyed } from "vue-hooks";

export function enablescroll() {
  useDestroyed(() => {
    console.log("destroyed!");

    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault)
        e.preventDefault();
      e.returnValue = false;
    }

    function enable_scroll_mobile() {
      document.removeEventListener('touchmove', preventDefault, false);
    }

    function wheel(e) {
      preventDefault(e);
    }

    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
    enable_scroll_mobile();

  });
}