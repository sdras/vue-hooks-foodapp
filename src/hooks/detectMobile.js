import { useComputed, useData } from "vue-hooks";

export function detectMobile() {
  const data = useData({
    isMobile: false
  })

  const double = useComputed(() => data.count * 2)

  return {
    data,
    double
  }
} 
