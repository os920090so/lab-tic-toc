import Component from  './component.js';

import './cell.css';

/*
 * [Event name: params]
 * click: this, color
 */
export default class Cell extends Component {
    static getRootClass() {
        return '.cell';
    }
    constructor(root,num) {
        super(root);

        root.addEventListener("click", this.handleDomClick.bind(this));
        this.num=num;
    }

    reset(){
      this.beclicked=false;
      this.root.textContent='?';
    }

    handleDomClick(){
      if(this.beclicked)
        return;
      this.fire('cclick',this.num);
      this.beclicked=true;
    }

    writeCircle(){
      this.root.textContent='O';
    }
    writeX(){
      this.root.textContent='X';
    }
}
