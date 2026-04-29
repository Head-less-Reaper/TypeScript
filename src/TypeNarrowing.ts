function getChai(kind: string|number){
    if(typeof kind === "string"){
        return `Making ${kind} chai..`
    }
    return `Chai order: ${kind}`
}


type chaiOrder = {
    type:String,
    sugar:number
}

function isChaiOrder(obj:any):obj is chaiOrder{
    return(
        typeof obj === "object"&&
        obj !== null &&
        typeof obj.type === "string"&&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:chaiOrder|string){
    if(isChaiOrder(item)){
        return `Serving chai`
    }
    return `not serving chai`
}