function solve(args){

    let index = 0;
    let result = args[index];

    while(index < args.length){
        result = args[index];
        if(result !== "Stop")
            console.log(result);
        else break;
        index += 1;
        result += args[index];
    }
}
solve(['3', '6', '5', '4', 'Stop', '10', '12']);
