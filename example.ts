class CPerson { 
  private name: string = 'aaa';
  private age!:number;

  public constructor(age?:number){
    if(age === undefined){
      this.age = 30;
    }
    else{
      this.age = age;
    }    
  }
  public async init() {

  }
}

const cp1:CPerson = new CPerson(39);
const cp2:CPerson = new CPerson();

console.log(cp1);
