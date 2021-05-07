import Snake from "./Snake";
import Food from "./Food";
import Actor from "./Actor";
import SnakeFoodCollisionHandler from "./SnakeFoodCollisionHandler";
import SnakeSnakeCollisionHandler from "./SnakeSnakeCollisonHandler";
class ActorCollisionHandlers{
snake: Snake;
food: Food;
pairs: any;
constructor(){
  this.pairs = newMap();
}
toKey(colliderType: Actor, collidedType){
return colliderType + "," + collidedType;
}
addCollisionAction(colliderType, collidedType, actionApplicator){
  Map.set(collidedType,actionApplicator);
}
hasCollisionAction(colliderType, collidedType){
  Map.has(colliderType, colliderType);
}
applyCollisionAction(collider, collided){
  Map.get(collider, collided);
}
newActorCollisionHandlers(colliderType:SnakeFoodCollisionHandler, collidedType:SnakeSnakeCollisionHandler){

}
}
export default ActorCollisionHandlers;