import Component from  './component.js';
import Role from './role.js';
import Turn from './turn.js';

import'./banner.css';

export default class Banner extends Component{
  static getRootClass(){
      return '.banner';
  }

  constructor(root){
    super(root);

    this.roles= [];
    this.first=false;
    this.turn = new Turn(root.querySelector(Turn.getRootClass()));
    const els = root.querySelectorAll(Role.getRootClass());
    for(let el of els){
      const role = new Role(el);
      role.on('roleclick',this.handleroleclick.bind(this));
      if(el.textContent==='X')
          role.choosethis();
      this.roles.push(role);
    }
    this.turn.showturn(this.first);
  }
  handleroleclick(firer,turn){
    if(turn===this.first)
      return;
    this.changeTurn(turn);
    this.fire('rolechange',this.turn);
  }
  changeTurn(turn){
    this.first=turn;
    for(let el of this.roles ){
      el.removethis();
    }
    if(!this.first)
      this.roles[0].choosethis();
    else
      this.roles[1].choosethis();
    this.turn.showturn(this.first);
  }
  someoneWin(turn){
    this.turn.showwin(turn);
  }
}
