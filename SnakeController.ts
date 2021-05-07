import WorldModel from "./WorldModel";
import Snake from "./Snake";

class SnakeController {
  snakeWorld: WorldModel;
  slitherer: Snake;
isCurrentlyActive: boolean;

  public constructor(world: WorldModel, snake: Snake) {
    this.snakeWorld = world;
    this.slitherer = snake;
  }

get isSnakeActive() {
  return this.isCurrentlyActive == true;
}

  public turnSnakeLeft() {
    this.slitherer.turnLeft();
  }
  public turnSnakeRight() {
    this.slitherer.turnRight();
  }

  get snakePosition() {
    return this.slitherer.currentPosition;
  }
  get snakeDirection() {
    return this.slitherer.currentDirection;
  }
}
export default SnakeController;