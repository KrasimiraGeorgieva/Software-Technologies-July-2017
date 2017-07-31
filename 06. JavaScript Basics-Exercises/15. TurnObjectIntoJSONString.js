function solve(arr) {
    let obj = {};
    arr.map(a => a.split(' -> ')).forEach(studentTokens => {
        let property = studentTokens[0];
        let value = isNaN(studentTokens[1]) ? studentTokens[1] : Number(studentTokens[1]);
        obj[property] = value;
    });

    console.log(JSON.stringify(obj));
}

solve([
    'name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia'
]);

