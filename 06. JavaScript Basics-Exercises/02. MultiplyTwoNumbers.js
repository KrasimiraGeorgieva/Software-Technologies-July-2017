function solve (args){
    let num1 = Number(args[0]);
    let num2 = Number(args[1]);

   let result = multiplyNums(num1, num2);
    console.log(result);

    function multiplyNums(num1, num2){
        let multiply = num1 * num2;
        return multiply;
    }
}
solve(['0', '50']);
