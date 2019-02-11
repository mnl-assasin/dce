import Emitter from 'es6-event-emitter';

class SidemenuEvent extends Emitter {
  toggle(){
    this.trigger('sidemenu:toggle');
  }
}

export default new SidemenuEvent()