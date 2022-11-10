"use strict";
class AbstrarctPerson {
    constructor() {
        this._name = 'mark';
    }
}
class APerson extends AbstrarctPerson {
    setName(name) {
        this._name = name;
    }
}
const p = new APerson();
p.setName('any');
