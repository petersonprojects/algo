

// Given two strings, A and B, of length M and N, check if they are anagrams of each other.
// If they are not, return the minimum number of changes needed to make them anagrams.
// For example, 'lemon' and 'melon' would return 0 because they are anagrams. 
// The only thing you cannot do is remove characters, you may only add them.

const haveSameData = function (obj1, obj2) { 
    const obj1Length = Object.keys(obj1).length; 
    const obj2Length = Object.keys(obj2).length; 

    // if they're not of equal length, we can immediate return false
    if (obj1Length === obj2Length) { 
        return Object.keys(obj1).every( 
            key => obj2.hasOwnProperty(key) 
                && obj2[key] === obj1[key]); 
    } 
    
    return false; 
} 

const isAnagram = (stringA, stringB) => {

    // we can make two caches... if they are exactly equal, return 0, if they aren't..
    // find all the keys not in both and add the corresponding numbers

    let stringA_cache = { };
    let stringB_cache = { };

    // loop through both strings and create a cache
    // stringA & stringB can be diff lengths so we need 2 for loops
    for(let i = 0; i < stringA.length; i++)
    {
        !stringA_cache[stringA[i]] ? stringA_cache[stringA[i]] = 1 : stringA_cache[stringA[i]]+= 1;
    }

    for(let i = 0; i < stringB.length; i++)
    {
        !stringB_cache[stringB[i]] ? stringB_cache[stringB[i]] = 1 : stringB_cache[stringB[i]]+= 1;
    }

    console.log(stringA_cache, stringB_cache);

    if(haveSameData(stringA_cache, stringB_cache))
    {
        return 0;
    }

    else
    {

    }

}

isAnagram("dog", "god");