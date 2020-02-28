export function log(message: string, ...args: any[]): void {
  const time = new Date().toLocaleTimeString()
  console.log(`${time} - ${message}`, ...args)
}
