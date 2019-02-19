function fpb(angka1, angka2) {
    var faktorSatu = []
    var faktorDua = []
    var faktorSama = []

    for(var i = 1; i <= angka1; i ++) {
        if(angka1 % i === 0) {
            faktorSatu.push(i)
        }
    }
    // console.log(faktorSatu)
    for(i = 1; i <= angka2; i++) {
        if(angka2 % i === 0) {
        faktorDua.push(i)
        }
    }
    // console.log(faktorDua)
    for(i = 0; i < faktorSatu.length; i++) {
        for(j = 0; j < faktorDua.length; j++) {
            if(faktorSatu[i] === faktorDua[j]) {
                faktorSama.push(faktorSatu[i])
            }
        }
    }
    // console.log(faktorSama)
    var efpebe = faktorSama[0]
    if(faktorSama.length > 1) {
        for(i = 1; i < faktorSama.length; i++) {
            if(faktorSama[i] > efpebe) {
                efpebe = faktorSama[i]
            }
    }
    return efpebe
    }
    else {
        return efpebe
    }
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1