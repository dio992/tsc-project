interface Person1 {
  name: string;
  age: number;
}

interface Person2 {
  name: string;
  age?: number;
}

interface Person3 {
  name: string;
  age? : number;
  [index: string]: any;
}



function hello1(person:Person1): void
{
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

function hello2(person:Person2): void
{
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

function hello3(person:Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
  name:"person1",
  age:42
}

const p2: Person2 = {
  name:"person2"  
}

const p31: Person3 = {
  name:"aaa",  
  age:42
}
const p32: Person3 = {
  name:"bbb" , 
  syster:['a','b']
}
const p33: Person3 = {
  name:"root" , 
  father:p31,
  mother:p32,
}

hello1(p1);
hello2(p2);
hello3(p33);
