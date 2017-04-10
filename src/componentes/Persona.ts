class Persona {
    private _name:string;
    private _age:number;
    
    constructor(name?:string, age?:number){
        this._name = name;
        this._age = age;
    }

    toString(){
        return `${this._name} ${this._age}`;
    }

    get name():string{
        return this._name;
    }
    get age():number{
        return this._age;
    }
}

export default Persona