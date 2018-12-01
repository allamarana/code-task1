function correct (str){
    var temp;
    var stack = [];
    for (var i = 0; i < str.length; i++){
        if (str[i] === '[' ||str[i] === '('|| str[i] === '{'){
            stack.push(str[i])
            console.log (stack)
        }
        if (str[i] === ']' ||str[i] === ')'|| str[i] === '}'){
            temp = stack.pop();
            console.log(temp)
            if(temp !== '[' && str[i] === ']'||temp !== '(' && str[i] === ')'||temp !== '{' && str[i] === '}' ){
                return false
            }
        }
    }

    return stack.length === 0;
}


if (correct('{{{}')){
    console.log ("All is correct!")
} else{
    console.log(`You missed symbol`)
}
