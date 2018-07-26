function order(words){
  var word = words
  var arr = words.split(" ");
  var result = [];
  if (word == ""){
  return "";
  } else {
    for (var i = 0; i < arr.length; i++){
    var numb = arr[i].match(/\d/);
    result[Number(numb[0])-1] = arr[i];
  }
  return result.join(' ');
  }

}

console.log(order ("4of Fo1r pe6ople g3ood th5e the2"));


// hailstone sequence

function sequence (num){
  
}