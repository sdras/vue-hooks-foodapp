import { useMounted } from "vue-hooks";

export function testing(el) {
  useMounted(() => {
    console.log(el)
  });
}