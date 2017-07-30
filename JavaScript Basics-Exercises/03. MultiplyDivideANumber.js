function solve (args){
    let num1 = Number(args[0]);
    let num2 = Number(args[1]);

    let result = multiplyDivideNums(num1, num2);
    console.log(result);

    function multiplyDivideNums(num1, num2){
        let result = '';
        if(num1 <= num2){
             result = num1 * num2;
        }
        else if(num2 != 0){
            result = num1 / num2;
        }
        else{
            result = "Input error!Can not multiplay or divide by zero."
        }
        return result;
    }
}
solve(['13', '13']);
