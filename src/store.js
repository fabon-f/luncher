const EventEmitter = require("events");

export default class Store extends EventEmitter {
  constructor(initialState) {
    super();
    this.state = initialState;
  }
  getState() {
    return this.state;
  }
  update(updateFunction) {
    this.state = updateFunction(this.state);
    this.emit("update");
  }
}
