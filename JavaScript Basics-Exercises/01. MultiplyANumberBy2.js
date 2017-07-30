function solve (args){
let num = Number(args[0]);
    multiplyNums(num);
    console.log(multiplyNums(num));

    function multiplyNums(num){
        return 2 * num;
    }
}
solve(['13']);