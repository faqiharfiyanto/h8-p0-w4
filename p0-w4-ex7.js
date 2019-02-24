function urutkanAbjad(str) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var temp = ''
    for(var i = 0; i < abjad.length; i++) {
        for(var j = 0; j < str.length; j++) {
            if(abjad[i] === str[j]) {
                temp += abjad[i]
            }
        }   
    }
    return temp
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'