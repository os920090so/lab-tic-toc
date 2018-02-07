import Component from  './component.js';

import'./role.css';

export default class Role extends Component{
  static getRootClass(){
      return '.role';
  }

  constructor(root){
    super(root);

    root.addEventListener("click", this.handleDomClick.bind(this));
  }

  choosethis(){
    this.root.classList.add('rolechoose');
  }

  removethis(){
    this.root.classList.remove('rolechoose');
  }

  handleDomClick(){
    if(this.root.textContent==='X')
      this.fire('roleclick',false);
    else
      this.fire('roleclick',true);
  }
}
