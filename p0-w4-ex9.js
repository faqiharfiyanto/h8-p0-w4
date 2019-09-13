function checkAB(num) {
    var temp=false
    for(var i=0; i<num.length; i++) {
        if(num[i]=='a' && num[i+4]=='b') {
            temp=true
        } else if(num[i]=='a' && num[i-4]=='b') {
            temp=true
        }
    }
    return temp
}
  
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false