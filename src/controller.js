class Controller {
  constructor(player) {
    this.player = player;
  }

  initEventListeners() {
    document.addEventListener('keyup', (e) => {
      if(e.keyCode == 32) this.player.shoot();
      if(e.keyCode == 37) this.player.x--;
      if(e.keyCode == 39) this.player.x++;
    })
  }
}

export default Controller;
