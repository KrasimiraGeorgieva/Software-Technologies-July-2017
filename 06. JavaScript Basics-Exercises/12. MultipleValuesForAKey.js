function solve(arr){
    let numbers = [];
    let duplicateEntry = arr[arr.length-1];

    for(let i = 0 ;i < arr.length - 1; i++){
        let pair = arr[i].split(' ');
        let command = pair[0];
        numbers[command] = pair[1];
        if(duplicateEntry === command){
            console.log(numbers[command]);
        }
    }
    if(duplicateEntry in numbers){

    }
    else{
        console.log("None")
    }
}
solve(['3 test', '3 test1', '4 test2','4 test3', '4 test5', '4']);