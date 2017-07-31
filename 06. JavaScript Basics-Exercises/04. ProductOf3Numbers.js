function solve (args){
    let num1 = Number(args[0]);
    let num2 = Number(args[1]);
    let num3 = Number(args[2]);

    if (num1>0 && num2>0 && num3>0){
        console.log("Positive");
    }
    else if(
        (num1<0 && num2<0 && num3<0)||
        (num1>0 && num2<0 && num3<0)||
        (num1<0 && num2>0 && num3<0)||
        (num1<0 && num2<0 && num3>0)
    )
        {
            console.log("Positive");}
            else{
            console.log("Negative");
        }
}
solve(['-3', '-4', '5']);
