class MyLocal {
  set: (name: string, value: any) => void
  get: (name: string) => any
  remove: (name: string) => any
  clear: () => any
  constructor() {
    this.set = (name, value) =>
      localStorage.setItem(name, JSON.stringify(value))
    this.get = (name) => JSON.parse(localStorage.getItem(name) as string)
    this.remove = (name) => localStorage.removeItem(name)
    this.clear = () => localStorage.clear()
  }
}

export default new MyLocal()
