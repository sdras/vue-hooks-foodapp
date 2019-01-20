import { useMounted } from "vue-hooks";

export function preventscroll() {
  useMounted(() => {
    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault)
        e.preventDefault();
      e.returnValue = false;
    }

    function wheel(e) {
      preventDefault(e);
    }

    // Prevent scrolling on mount
    if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    //disable scroll on mobile
    document.addEventListener('touchmove', preventDefault, false);
  });
}