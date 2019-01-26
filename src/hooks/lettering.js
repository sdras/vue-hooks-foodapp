import { Elastic, Sine, TimelineMax } from "gsap";
import Splitting from "splitting";
import "splitting/dist/splitting-cells.css";
import "splitting/dist/splitting.css";
import { useMounted } from "vue-hooks";

export function lettering() {
  useMounted(function () {
    const title = this.$refs.title;
    const desc = this.$refs.desc;

    Splitting({ target: title, by: "chars" });
    Splitting({ target: desc, by: "lines" });
    const tl = new TimelineMax();

    tl.add("start");
    tl.staggerFromTo(
      ".scene .char, .mobiledetails .char",
      3.5,
      {
        opacity: 0,
        transformOrigin: "50% 50% -30px",
        rotationY: 100
      },
      {
        opacity: 1,
        transformOrigin: "50% 50% 0",
        rotationY: 0,
        ease: Elastic.easeOut.config(1, 0.4)
      },
      0.02,
      "start+=0.3"
    );
    tl.staggerFromTo(
      desc.childNodes,
      1.5,
      {
        opacity: 0
      },
      {
        opacity: 1,
        ease: Sine.easeOut
      },
      0.008,
      "start+=0.6"
    );
  })
}