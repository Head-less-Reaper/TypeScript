// it is preffered to use declared interfaces in classes as in most of the cases declared types* produce errrors

type chai ={
    size:"medium"|"large",
    qty:44
}

class serve implements chai{
    size: "medium" | "large"="medium";
    qty:44=44;
}


interface chaiOrder{
    sugar:number,

}


class serveChai implements chaiOrder{
    sugar: number=45;
}


// | : union and & : intersection

type baseChai = {tealeaves:number};
type extra = {masala : number};

type masalaChai = baseChai & extra;

const cup : masalaChai={
    tealeaves:4,
    masala:4
}

//optional values

type user ={
    name:string,
    bio?:string
}

const u1:user= {name:"ak"};
const u2:user={name:"akp" ,bio:"asjfdk"};


//readonly values : it is once intialized and cant be declared again

type profile={
    readonly comp:string,
    name:string
}

//readonly value intialised once
const prf1:profile={
    comp:"microsoft",
    name:"ayush kumar ds"
}

// prf1.comp ="apple"


