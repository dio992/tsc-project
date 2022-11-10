"use strict";
function hello1(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
function hello2(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
function hello3(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p1 = {
    name: "person1",
    age: 42
};
const p2 = {
    name: "person2"
};
const p31 = {
    name: "aaa",
    age: 42
};
const p32 = {
    name: "bbb",
    syster: ['a', 'b']
};
const p33 = {
    name: "root",
    father: p31,
    mother: p32,
};
hello1(p1);
hello2(p2);
hello3(p33);
