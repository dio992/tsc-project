"use strict";
class ClassName {
    constructor() {
    }
    static getInstance() {
        //classname 으로부터 만든 object 가 있으면 그걸 리턴
        // 없으면, 만들어서 리턴 
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
}
ClassName.instance = null;
const a = ClassName.getInstance();
const b = ClassName.getInstance();
console.log(a === b);
