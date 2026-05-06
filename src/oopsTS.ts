class chai{
    public flavour:string;
    public price:number;

    constructor(flavour:string,price:number){
        this.flavour=flavour;
        this.price=price
    }

}

const masalaChai = new chai("masala chai",40);
masalaChai.flavour="Ginger";


class shop{
    protected shopName:string= "chai corner"

}

class Branch extends shop{
    getName(){
        return this.shopName;
    }
}

new Branch().getName();

class coffeeShop{
    //private can be also used using #
    #balance =100
    getBalance(){
        return this.#balance; 
    }
}

//getters and setters

class ModerChai{
    private _sugar:number=2;
    get sugar(){
        return this._sugar
    }
    set sugar(value:number){
        this._sugar=value
    }
}

const c= new ModerChai();
c.sugar=2;

//static : u can access it without creating a object

class EkChai{
    static chaiCount:number=1;
    constructor(public flavour:string){}
}
//directly access
console.log(EkChai.chaiCount);


//abstract you must extendx and implement it
abstract class DoChai{
    abstract value():void;
}

class ExpChai extends DoChai{
    value(): void {
        console.log("brewing chai");
        
    }
}

const n = new ExpChai();
n.value();


//composition

class Heater{
    heat():void{}
}

class coffee{
    constructor(private heater:Heater){}
    make(){
        this.heater.heat;
    }
}