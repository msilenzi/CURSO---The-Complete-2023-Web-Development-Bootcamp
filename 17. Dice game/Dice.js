export default class Dice {
  #element;
  #value;

  constructor(element) {
    this.#element = element;
    this.throw();
  }

  throw() {
    this.setValue(Math.floor(Math.random() * 6) + 1);
  }

  getValue() {
    return this.#value;
  }

  setValue(value) {
    this.#value = value;
    this.#element.src = `images/dice${this.#value}.png`;
  }
}
