function ubahHuruf(kata) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var temp = ''
    for(var i = 0; i < kata.length; i++) {
      for(var j = 0; j < abjad.length; j++) {
        if(kata[i] === abjad[j] && abjad[j] !== 'z') {
          temp += abjad[j+1]
        }
        else if(kata[i] === abjad[j] && abjad[j] === 'z') {
          temp += abjad[0]
        }
      }
    }
    return temp
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  console.log(ubahHuruf('woz')); // woa