import { useDestroyed, useMounted } from "vue-hooks";

export function preventscroll() {
  const preventDefault = (e) => {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  }

  useMounted(() => {
    // keycodes for left, up, right, down
    const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    const preventDefaultForScrollKeys = (e) => {
      if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
      }
    }

    (() => {
      if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
      window.onwheel = preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
      window.ontouchmove = preventDefault; // mobile
      document.onkeydown = preventDefaultForScrollKeys;
    })()
  });

  useDestroyed(() => {
    (() => {
      if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);

      //firefox
      window.addEventListener('DOMMouseScroll', (e) => {
        e.stopPropagation();
      }, true);

      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
    })()
  });
} 