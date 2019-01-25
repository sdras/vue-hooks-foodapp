import { Elastic, TweenMax } from "gsap";
import Splitting from "splitting";
import "splitting/dist/splitting-cells.css";
import "splitting/dist/splitting.css";
import { useMounted } from 'vue-hooks';

//the data comes from the other hook
export function logolettering(data) {
  useMounted(function () {
    if (data.data.width > 1200) {
      const logoname = this.$refs.logoname;
      Splitting({ target: logoname, by: "chars" });

      TweenMax.staggerFromTo(
        ".char",
        5,
        {
          opacity: 0,
          transformOrigin: "50% 50% -30px",
          cycle: {
            color: ["red", "purple", "teal"],
            rotationY(i) {
              return i * 50
            }
          }
        },
        {
          opacity: 1,
          transformOrigin: "50% 50% 0",
          rotationY: 0,
          color: 'white',
          ease: Elastic.easeOut.config(1, 0.4)
        },
        -0.02,
      );
    }
  })
}
