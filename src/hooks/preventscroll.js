import { useMounted } from "vue-hooks";

export function preventscroll() {
  useMounted(() => {
    const preventDefault = (e) => {
      e.returnValue = false;
    }

    // Prevent scrolling on mount
    if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', preventDefault, false);
    }
    window.onmousewheel = document.onmousewheel = preventDefault;
    //disable scroll on mobile
    document.addEventListener('touchmove', preventDefault, false);
  });
}