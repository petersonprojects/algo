
// Write a function findLongestSubString that accepts a string and returns
// the length of longest sub string with unique characters

// findLongestSubString('thisishowwedoit')); //6 (wedoit)
// findLongestSubString('supercalifragilisticexpialidocious')); //10 (supercalif)
// loop

// given a number find the number of time 7 occurs in the nubmer : 778482234 // 2
// ok do the same thing wihtout converting it to string
const findLongestSubString = (s) => {

    // can i use a set?
    let set = new Set();

    let left = 0;
    let right = 0;
    let maxLength = 0;

    while(right < s.length){

        if(!set.has(s[right]))
        {
            set.add(s[right]);
            maxLength = Math.max(maxLength, set.size);
            right++;
        }
        else
        {
            set.delete(s[left]);
            left++;
        }
    }

    return maxLength;
}

console.log(findLongestSubString('supercalifragilisticexpialidocious'));