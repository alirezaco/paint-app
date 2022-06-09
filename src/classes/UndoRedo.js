import Stack from "./Stack";

export default class UndoRedo {
  constructor(ctx) {
    this.ctx = ctx;
  }

  /**
   * @param {{color: string, lineOpacity: number, lineWidth: number, path: [{x: number, y: number}]}} line
   */
  draw(line) {
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
    this.ctx.globalAlpha = line.lineOpacity;
    this.ctx.strokeStyle = line.color;
    this.ctx.lineWidth = line.lineWidth;

    //draw
    this.ctx.beginPath();
    const firstPoint = line.path[0];
    this.ctx.moveTo(firstPoint.x, firstPoint.y);
    for (let index = 1; index < line.path.length; index++) {
      const item = line.path[index];
      this.ctx.lineTo(item.x, item.y);
      this.ctx.stroke();
    }
    this.ctx.closePath();
  }

  /**
   * @param {Stack} stack
   */
  undo(stack) {
    this.ctx.clearRect(0, 0, 1280, 720);
    for (let index = 0; index < stack.top; index++) {
      const line = stack.at(index);
      this.draw(line);
    }
  }

  /**
   * @param {{color: string, lineOpacity: number, lineWidth: number, path: [{x: number, y: number}]}} line
   */
  redo(line) {
    if (!line) return;

    this.draw(line);
  }
}
