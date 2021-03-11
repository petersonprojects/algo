/*
 *  You have a line of quarters. 
 *  Write a function that returns the minimum number of changes necessary
 *  to make each quarter in the line of quarters alternate between heads and tails.
 *  For instance if the line of quarters were represented by the array [1,1,0,1,1], 
 *  your function should return 2 because you need only 2 changes: 
 *  changing the first 1 and the last 1 to zero.
 */

// given any length array, there are only two outputs

// [1, 0, 1, 0, 1] [0, 1, 0, 1, 0]

const flip = (coinFace) => {

    return coinFace === 0 ? 1 : 0;
}

const generateSolutions = (array) => {

    let solutions = {
        1: [],
        2: []
    }

    let length = array.length;

    let init = 0;

    for(let i = 0; i < length; i++)
    {
        solutions[1].push(init) //[0, 1]

        // logic here to flip our coin to either 0 or 1
        init = flip(init)

        solutions[2].push(init) // [1, 0]
    }

    return solutions;

}

const getMinCount = (inputArray) => {

    const solutions = generateSolutions(inputArray);

    let count1 = 0;
    let count2 = 0;

    for(let i = 0; i < inputArray.length; i++){

        if(inputArray[i] !== solutions[1][i]) { count1++ }
        if(inputArray[i] !== solutions[2][i]) { count2++ }
    }


    return Math.min(count1, count2);
}


console.log(getMinCount([0, 1, 0, 1, 0, 1])); //expected 0
console.log(getMinCount([1, 1, 0, 1, 1])); //expected 2
console.log(getMinCount([0, 0, 0, 1, 0, 1, 0, 1, 1, 1])); //expected 2
