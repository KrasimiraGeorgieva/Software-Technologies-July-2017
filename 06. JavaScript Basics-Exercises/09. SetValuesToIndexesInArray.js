function solve(arr) {
    let lengthArr = Number(arr[0]);
    let outputArr = new Array(lengthArr).fill(0);

    for (let i = 1; i < arr.length; i++) {
        let currentInput = arr[i].split(' ');

        let index = Number(currentInput[0]);
        let value = Number(currentInput[2]);

        outputArr[index] = value;
    }
    for (let number of outputArr) {
        console.log(number);
    }
}

solve(['2', '0 - 5', '0 - 6', '0 - 7' ]);
