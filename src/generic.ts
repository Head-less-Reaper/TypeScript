// generics :let u write code that works with multiple datatypes while maintaining type safety

function echo<T>(value:T):T[]{
    return [value]
}

echo("hello");
echo(43)
echo({sound:"echos"})

//interface using generics

interface Box<T>{
    content:T
}


const numberBox :Box<number>={content:10}

const numberBoxCup :Box<string>={content:"jfa"};