export default class Stack {
  constructor() {
    this.top = 0;

    /**
     * @type {[{{color: string, lineOpacity: number, lineWidth: number, path: [{x: number, y: number}]}]}
     */
    this.list = [];
  }

  /**
   * @param {{color: string, lineOpacity: number, lineWidth: number, path: {x: number, y: number}}} value
   */
  push(value) {
    this.list.push({
      ...value,
      path: Array.isArray(value.path) ? value.path : [value.path],
    });
    this.top++;
  }

  pop() {
    if (this.top === 0) return;

    this.top--;
    return this.list.pop();
  }

  at(index) {
    return this.list[index];
  }

  /**
   * @param {{x: number, y: number}} value
   */
  changePathValue(value) {
    this.list[this.top - 1].path.push(value);
  }
}
