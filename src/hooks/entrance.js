import { Sine, TweenMax } from "gsap";
import { useComputed, useData, useMounted, useUpdated, useWatch } from "vue-hooks";

export function foo() {
  const data = useData([
    {
      name: "Panda Express",
      url: "potstickers.jpg",
      desc:
        "Bacon ipsum dolor amet ball tip pancetta andouille pork loin chuck ham swine tongue pastrami cow ham hock drumstick bacon. Short ribs fatback tenderloin, andouille pastrami ball tip buffalo bresaola jerky t-bone spare ribs cupim.",
      tags: ["chinese", "dumplings", "meat"]
    },
    {
      name: "Blithe Cafe",
      url: "eggs.jpg",
      desc:
        "Kielbasa strip steak buffalo kevin drumstick bacon. Shank spare ribs venison cupim. Beef ground round t-bone flank cow porchetta, ball tip filet mignon meatball drumstick sirloin pancetta fatback. Tenderloin drumstick pork chop picanha ball tip.",
      tags: ["eggs", "cafes", "takeout", "brunch"]
    }
  ]);

  const double = useComputed(() => data.count * 2);

  useWatch(
    () => data.count,
    (val, prevVal) => {
      console.log(`new count is: ${val}, old count is ${prevVal}`);
    }
  );

  useUpdated(() => {
    console.log('updated!')

    TweenMax.to('.contain', 1, {
      opacity: 0,
      ease: Sine.easeOut
    })
  })

  useMounted(() => {
    console.log("mounted!");

    TweenMax.to('.contain', 1, {
      opacity: 0,
      ease: Sine.easeOut
    })
  });

  return {
    data,
    double
  }
}