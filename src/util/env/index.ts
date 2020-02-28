export function loadEnvironmentVariables<T>(): Promise<T> {
  return new Promise(async (resolve) => {
    const dotenv = await import('dotenv')
    dotenv.config()
    resolve((process.env as unknown) as T)
  })
}
