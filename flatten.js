
// Without using .flat(), create a function to flatten an array.
// The array given can be infinitely deep, [1, 2, [3, 4]]--> 3 and 4 are two dimensions deep.
// [1, 2,[3, 4, [5, 6, 7], 8], 9, 10] --> 5, 6, and 7 are three dimensions deep.

// Given an infinitely deep array, flatten it down to one dimension.

// example const exampleArray = [1, 2,[3, 4, [5, 6, 7], 8], 9, 10]

// After flattening your array it should look like this ---> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// there's so many ways you can do this... this is just one... find one that makes sense, but all use recursion

// here: a represents the accumulator (the piece of memory in our reduce function that holds our compounding values)
// b acts as our iterative (current) value. it represents the current value being checked at any given run-time

function reducer(a, b){
    
    // the first thing we must do when calling the reducer is check if the current item is an array
    // remember that this function is called inside of the .reduce() which iterates through an array or obj
    // if the item we're on IS an array, lets try to reduce it even further, by again recursively calling
    // the reducer function.
    // as long as there are arrays nested inside, its going to keep calling itself until the if statement
    // lets us know there's not an array and we can just concat b
    if(Array.isArray(b)) // yes, b is an array [3, 4, [5, 6, 7], 8] .. second time inside our if b is [5, 6, 7]
    {
        return a.concat(b.reduce(reducer, []));
    }

    return a.concat(b);

    // for those curious to see it in one line:
    // Array.isArray(b) ? return a.concat(b.reduce(reducer, [])) : return a.concat(b)
}

function flatten(array){

    // return a value (it will be a flattened array), 
    // first param is a function of a and b, second parameter is the initial value
    // all reduce means is: i'm gonna accumulate and iterate. 
    return array.reduce(reducer, []);
}


const exampleArray = [1, 2,[3,4,[5,6,7], 8], 9, 10];

let result = flatten(exampleArray);

console.log(result);