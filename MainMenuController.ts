
class MainMenuController {
  playGameButton: any;
  HumanPlayersInput: any;
  aiPlayersInput: any;
constructor(g: game) {
this.playGameButton = document.createElement("button");
this.HumanPlayersInput = document.createElement("input");
this.aiPlayersInput = document.createElement("input");
}
placeholder(){
  document.body.appendChild(this.playGameButton);
  document.body.appendChild(this.HumanPlayersInput);
  document.body.appendChild(this.aiPlayersInput);
  document.createTextNode("Start Game");
}
init(data) {
document.appendChild(this.playGameButton);
document.appendChild(this.HumanPlayersInput);
document.appendChild(this.aiPlayersInput);
}
switchContext() {
  document.body.removeChild(this.playGameButton);
document.body.removeChild(HumanPlayersInput);
document.body.removeChild(this.aiPlayersInput);
}
}
export default MainMenuController;