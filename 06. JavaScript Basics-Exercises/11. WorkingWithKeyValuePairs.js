function solve(arr) {
    let numbers = [];
    let command;
    let number;

    for (let i = 0; i < arr.length - 1; i++) {
        let pair = arr[i].split(' ');
        command = pair[0];
        number = pair[1];
        numbers[command] = number
    }

    let key = arr[arr.length - 1];
    if (numbers[key] === undefined) {
        console.log("None")
    }
    else(
        console.log(numbers[key]))
}
solve(['3 test', '3 test1', '4 test2','4 test3', '4 test5', '4']);
