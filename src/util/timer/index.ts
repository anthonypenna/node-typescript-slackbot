export function seconds(amount: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, amount * 1000)
  })
}
