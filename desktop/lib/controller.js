'use strict'


class Controller {
  
  constructor(lapel) {
    this.lapel = lapel

  }

  start() {
    document.onkeydown = (e) => {

      if (e.keyCode === 9) {
        e.preventDefault();
      }
      switch (e.keyCode) {
        case 9: // TAB
          e.preventDefault
          break
        case 27: // ESCAPE
          this.lapel.run()
          break
      }
    }
  }

}