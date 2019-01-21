import { useMounted } from "vue-hooks";

export function preventscroll() {
  useMounted(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';

    const preventDefault = e => {
      e = e || window.event;
      if (e.preventDefault)
        e.preventDefault();
      e.returnValue = false;
    }
    const wheel = e => preventDefault(e)

    window.addEventListener("keydown", e => {
      // space, page up, page down and arrow keys:
      if ([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
    }, false);

    // Prevent scrolling on mount
    if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    // Disable scroll on mobile
    document.addEventListener('touchmove', preventDefault, false);
  });
} 