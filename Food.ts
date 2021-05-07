import Actor from "./Actor";
class Food {
point: x, y;
isCurrentlyActive: any;
currentPosition: any;
constructor(x,y) {
  this.currentPosition = Point(x, y);
  this.isCurrentlyActive == ;
}
eat() {
  this.isCurrentlyActive !=;
}
get position() {
  return this.currentPosition;
}
get isActive() {
  return this.isCurrentlyActive;
}
get type() {
  return "Food";
}
public update() {

}
}
export default Food;