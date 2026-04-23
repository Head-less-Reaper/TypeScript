//union

let subs: number | string ="1M";

let apiRequestStatus: "pending"|"Success"|"error"="pending";


//any:It defines the variable can be of any dataTypes
//avoid any use unknown

const orders = ["12","20","28","30"]

let currentOrder:string|undefined;

for(let order of orders){
    if(order === "28"){
        currentOrder = order;
        break;
    }
    currentOrder = "11";
}

console.log(currentOrder);
