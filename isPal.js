function isAnagram(str1, str2){
	var arr1 = str1.split('').sort();
    var arr2 = str2.split('').sort();
    if (arr1.length !== arr2.length){
        return false
    }
	for (var i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]){
            return false;
        } 
    }    
    return true
}


   if (isAnagram("mara", "aram")) {
       console.log("Anagram is found!")
   } else {
       console.log("Not an Anagram!")
   }


   function isPal (str){
    var arr = str.split('')
    //var counter = 0;
    for (var i = 0; i < arr.length/2; i++){
        if(arr[i] !== arr[arr.length-1-i]){
            return false;
        } 
    }
    return true
}

if (isPal("faraddaraf")) {
    console.log("Palindrom is found!")
} else {
    console.log("Not a Palindrom!")
}
