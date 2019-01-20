import { useMounted } from "vue-hooks";

export function preventscroll() {
  useMounted(() => {
    console.log("mounted!");

    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault)
        e.preventDefault();
      e.returnValue = false;
    }

    function disable_scroll_mobile() {
      document.addEventListener('touchmove', preventDefault, false);
    }

    function wheel(e) {
      preventDefault(e);
    }

    // Prevent scrolling on mount
    if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    disable_scroll_mobile()
  });
}