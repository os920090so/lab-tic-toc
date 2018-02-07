import Component from  './component.js';
import Banner from  './banner.js';
import Grid from  './grid.js';
import Reset from  './reset.js';

import './main.css';

export default class Main extends Component{
  static getRootClass(){
      return '.main';
  }

  constructor(root){
    super(root);

    this.banner = new Banner(root.querySelector(Banner.getRootClass()));
    this.banner.on('rolechange',this.handleroleclick.bind(this));

    this.grid = new Grid(root.querySelector('.grid'));
    this.grid.on('changeTurn',this.handleGridClick.bind(this));
    this.grid.on('someoneWin',this.handleSomeoneWin.bind(this));

    this.reset = new Reset(root.querySelector('.reset'));
    this.reset.on('resetclick',this.handleResetClick.bind(this));

  }

  handleGridClick(firer , turn){
    this.banner.changeTurn(turn);
  }
  handleSomeoneWin(firer , turn){
    console.log(turn);
    this.banner.someoneWin(turn);
  }
  handleroleclick(firer , turn){
    this.grid.reset(turn);
  }
  handleResetClick(){
    this.banner.changeTurn(false);
    this.grid.reset(false);
  }
}
window.onload = function(){
  const body = document.querySelector('body');
  new Main(body);
}
