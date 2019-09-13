function digitPerkalianMinimum(angka) {
    var pasanganFaktor = []
    for (var i=1; i<=angka; i++) {
        var faktorKali = ''
        for (var j=0; j<=angka; j++) {
            if (angka/(i*j)==1) {
                faktorKali += i
                faktorKali += j
            }
        }
        if (faktorKali.length>0) {
            pasanganFaktor.push(faktorKali)
        }
    }
    var angkaString = angka.toString()
    var panjangTerpendek = angkaString.length+1
    for (var i=0; i<pasanganFaktor.length; i++) {
        if (panjangTerpendek>pasanganFaktor[i].length) {
            panjangTerpendek = pasanganFaktor[i].length
        }
    }
    // console.log(pasanganFaktor)
    return panjangTerpendek
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2