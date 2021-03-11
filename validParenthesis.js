
class Stack {

    constructor() {
        this.data = [];
    }

    pop(){

        return this.data.pop();
    }

    push(el){
        return this.data.push(el);
    }

    length(){

        return this.data.length;
    }

    // look at the last item on the array
    peek(){
        return this.data[this.data.length - 1];
    }

}

const isValid = (string) => {

    let opening = {
        "(": true,
        "[": true,
        "{": true
    };

    let closing = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    const stack = new Stack();

    for(let i = 0; i < string.length; i++)
    {

        let char = string[i]; // string[0] ==>  '('  string[1] ==>    ')'

        // if its an opening character
        if(opening[char])
        {
            stack.push(char);
        }

                    //stack ["("]

        if(char in closing)
        {
            let result = stack.pop();

            // check to see if the value of closing character 
            if(result !== closing[char]) //closing[')']
            {
                return false;
            }

        }
        
    }

    return stack.length() === 0 ? true : false;

}


console.log(isValid("{((){}[]{}())}"));
