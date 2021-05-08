declare module 'qiankunApp' {
  interface App {
    name: string
    entry: string
    container: string
    url: string
  }
  const qiankunApp: Array<App>
  export default qiankunApp
}