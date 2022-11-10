abstract class AbstrarctPerson {
  protected _name: string = 'mark';

  abstract setName(name:string): void;
}

class APerson extends AbstrarctPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new APerson();
p.setName('any');