import Actor from "./Actor";
import Snake from "./Snake";
interface Collidable {
  display(a: Actor): void;
   didCollide(a : Actor) : void;
  }
}
export default Collidable;