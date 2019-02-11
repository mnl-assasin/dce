import Emitter from 'es6-event-emitter';

class FullScreenLoadingEvent extends Emitter {
  constructor(){
    super();

    this.TYPES = {
      SHOW:'fs:loading:show',
      HIDE:'fs:loading:hide',
    }
  }

  show(ms = 0){
    return new Promise( (resolve) => {
      this.trigger(this.TYPES.SHOW);
      
      if(ms > 0) {
        setTimeout( () => {
          this.hide()
        }, ms)
      }
    })
  }

  hide(){
    return new Promise( (resolve) => {
      this.trigger(this.TYPES.HIDE);
    })
  }
}

export default new FullScreenLoadingEvent()