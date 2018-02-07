import Component from  './component.js';
import Cell from './cell.js';

import'./grid.css';

/*
x = false = 0
o = true = 1
1 2 3
4 5 6
7 8 9
*/
export default class Grid extends Component{
  static getRootClass(){
      return '.grid';
  }

  constructor(root){
    super(root);

    this.gameover = false;
    this.cells = [];
    this.state = [];
    this.state[0]=-1;
    const els = root.querySelectorAll(Cell.getRootClass());
    let number=0;
    while(number<els.length){
      const cell = new Cell(els[number],number+1);
      cell.on('cclick',this.handleCellClick.bind(this));
      this.cells.push(cell);
      number++;
      this.state[number]=-1;
    }
    this.reset(false);
  }
  reset(turn){
    this.turn=turn;
    let number = 0;
    for(let el of this.cells){
      el.reset();
      number++;
      this.state[number]=-1;
    }
  }
  handleCellClick(firer,number){
    if(this.gameover)
      return
    else{
      if(this.turn){
        firer.writeCircle();
        this.state[number]=1;
      }
      else{
        firer.writeX();
        this.state[number]=0;
      }
      this.turn=!this.turn;
      this.fire('changeTurn',this.turn);
      this.checkwin();
    }
  }
  testequal(a,b,c){
    if(a<0||b<0||c<0)
      return false;
    else if(a===b&&a===c&&b===c)
      return true;
    else
      return false;
  }
  checkwin(){
    if(this.testequal(this.state[1],this.state[2],this.state[3])
    ||this.testequal(this.state[4],this.state[5],this.state[6])
    ||this.testequal(this.state[7],this.state[8],this.state[9])
    ||this.testequal(this.state[1],this.state[4],this.state[7])
    ||this.testequal(this.state[2],this.state[5],this.state[8])
    ||this.testequal(this.state[3],this.state[6],this.state[9])
    ||this.testequal(this.state[1],this.state[5],this.state[9])
    ||this.testequal(this.state[3],this.state[5],this.state[7]))
      this.fire('someoneWin',!this.turn);
  }
}
