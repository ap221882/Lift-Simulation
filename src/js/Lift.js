class Lift {
  #level;
  constructor(level) {
    this.#level = level;
  }

  get level() {
    return this.#level;
  }

  increaseLevel(value) {
    this.#level += value;
  }

  decreaseLevel(value) {
    this.#level -= value;
  }
}

export default Lift;
