"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CPerson {
    constructor(age) {
        this.name = 'aaa';
        if (age === undefined) {
            this.age = 30;
        }
        else {
            this.age = age;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
const cp1 = new CPerson(39);
const cp2 = new CPerson();
console.log(cp1);
