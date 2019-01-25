import { useData, useMounted } from 'vue-hooks';

//this is a contrived example for the purpose of demonstration
export function windowwidth() {
  const data = useData({
    width: 0
  })

  useMounted(() => {
    data.width = window.innerWidth
  })

  // this is something we can consume with the other hook
  return {
    data
  }
}