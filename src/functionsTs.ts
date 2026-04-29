function makechai(type:string ,price:number){
    console.log(`making ${type} each of inr ${price}`);
    
}

function makeCoffee():string{
    return "5 coffees plz"
}

//best practice if ur not returning any thing just declare it void

function adrakChai(type:String):void{
    console.log(type);
    
}

//optional parameter

function lemonChai(type?:string):string{
    return ` ${type}`
}

//default parameter

function masalaChai(type:string="masala"):void {
    console.log(type);
    
}