import Component from  './component.js';

export default class Turn extends Component{
  static getRootClass(){
      return '.turn';
  }

  constructor(root){
    super(root);
  }
  showturn(turn){
    if(turn){
      this.root.textContent='Now it\'s O turn';
    }
    else{
      this.root.textContent='Now it\'s X turn';
    }
  }
  showwin(who){
    if(who)
      this.root.textContent=' O win';
    else
      this.root.textContent=' X win';
  }
}
