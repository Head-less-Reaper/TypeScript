//structural typing and duck typing

type Tea ={
    name:String;
    price:number;
    isHot:boolean
}

const chai:Tea={
    name : "adrak chai",
    price : 20 ,
    isHot : true
}


type Cup = {size: String}
let smallCup:Cup ={size :"200ml"}
let largeCup = {size:"500ml", price : "50"}

smallCup =largeCup; //it will not throw error as required field for a cup is getting filled in the small cup


//duck typing

type Item = {name:string,qty:number}
type address = {street:string,pin:number}

type Order ={
    id :string;
    items:Item[];
    addresses:address
}

//partial , required , pick , omit

type coffee ={
    type?:string,
    price:number,
    isHot:boolean,
    ingridents:String[]
}

//partial allows the user to pass partial data
const updateCoffee1 =(updates:Partial<coffee>)=>{
    console.log("updating chai with ",updates);
    
}
updateCoffee1({price:20})

//required makes the user to pass all data even if the fields are optional like type
const updateCoffee2 =(updates:Required<coffee>)=>{
    console.log("updating chai with ",updates);
    
}
updateCoffee2({
    type:"milk coffee",
    price:50,
    isHot:true,
    ingridents:["coffee beans","milk","sugar"]
})

//pick only allows the specific fields to be filled by user

type coldCoffee = Pick<coffee,"type"|"price">;

const coffeeInfo:coldCoffee={
    type:"coldCoffee",
    price:50
}


//omit forbids a field to be enetered

type blackCoffee = Omit<coffee,"type"|"ingridents"|"isHot">;

const typeCoffee:blackCoffee={
    price:50
}