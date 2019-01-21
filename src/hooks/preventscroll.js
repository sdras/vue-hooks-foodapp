import { useMounted } from "vue-hooks";

export function preventscroll() {
  useMounted(() => {
    const preventDefault = (e) => {
      e = e || window.event;
      if (e.preventDefault)
        e.preventDefault();
      e.returnValue = false;
    }

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
} 