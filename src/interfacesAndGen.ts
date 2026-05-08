//interfaces : defines the structure of an object.

interface shop{
    item: string;
    readonly qty : number;
}

const chaiShop:shop={
    item:"ginger chai",
    qty:4
}


//if u dont want to define name 

interface coffeeMaker{
    (price:number):number
}

const coffee: coffeeMaker = (p)=>p*50;

//we can define methods inside interface

interface vendingMachine{
    start():void;
    end():void
}

const machine:vendingMachine={
    start(){
        console.log("start");
        
    },
    end(){
        console.log("stop");
        
    }
}

//index signature

interface ChaiRating {
    [flavour:string]: number
}

const ratings :ChaiRating={
    "ginger":4.5,
    "masala":5
}

// interface with same name declared at two spots then at time of intialization it should include both properties 

interface A{a:string}
interface B{b:string}


interface C extends A,B {}
