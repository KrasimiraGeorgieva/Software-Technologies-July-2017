function solve(args) {

    let output = [];

    for (let i = 0; i < args.length; i++) {
        let input = args[i].split(' ->');

        let studentObj = {
            name: input[0],
            age: Number(input[1]),
            grade: Number(input[2]).toFixed(2)
        };

        output.push(studentObj);
    }

    for (let obj of output) {
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Grade: ${obj.grade}`);
    }

}

solve([ 'Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57', 'Toni -> 13 -> 4.96' ]);
