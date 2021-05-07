import Actor from "./Actor";
import Snake from "./Snake";
interface Collidable {
  display(a: Actor): void;
  public didCollide() {
    if this.type == false return true;
  }
}
export default Collidable;