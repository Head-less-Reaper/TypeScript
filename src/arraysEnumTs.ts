const chaiFlavours:string[]=["Masala chai","lemon chai"];
const chaiPrice:number[]=[34,45,67];
const rating : Array<number>=[4.5,6.9];

//array of objects
type chai = {
    type:String;
    price:number
}

const menu :chai[]=[
    {type:"masala",price:45},
    {type:"lemon",price:60},
]

//readonly doesn't allow arrays to be modified after declaration

const cities:readonly String[]=["banglore","ranchi"];

//2d arrays

const table: number[][]=[
    [12,34,56],
    [45,67,89]
]

//tuples

const user : [string , number , boolean?] = ["ak",100]; //boolean optional

//named tuples

const t : [name:string ,price:number]=["rohan", 50];
t.push("ramesh") //it will led to  unexpected results in tuple thus avoided


//enums : set of named constants

enum Cup {
    SMALL,
    MEDIUM,
    LARGE
}

const c= Cup.LARGE;

enum count{
    ONE=1,
    TWO,    //2
    THREE    //3
}

//automatically increments


