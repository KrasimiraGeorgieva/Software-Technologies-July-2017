function solve(args) {
    let array = [];

    for (let i=0; i < args.length; i++){
        let currentArr = args[i].split(' ');
        let command = currentArr[0];
        let value = currentArr[1];

        if(command === "add"){
            array.push(value);
        }
        if(command === "remove"){
            array.splice(value, 1);
        }
    }

    for(let j = 0; j < array.length; j++){
        console.log(array[j]);
    }
}

solve(['add 3', 'add 5', 'remove 1', 'add 2' ]);