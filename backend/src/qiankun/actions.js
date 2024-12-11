class Actions {
  action = {
    setGlobalState: this.emptyAction,
    onGlobalStateChange: this.emptyAction,
  }
  emptyAction() {
    console.log('using a empty action')
  }
  setAction(action) {
    this.action = action
  }
  setGlobalState() {
    return this.action.setGlobalState(...arguments)
  }
  onGlobalStateChange() {
    return this.action.onGlobalStateChange(...arguments)
  }
}
const actions = new Actions()
export default actions
