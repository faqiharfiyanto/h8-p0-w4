function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var temp = []
    for(var i = 0; i < arrPenumpang.length; i++) {
        var angkotObj = {}
        angkotObj.penumpang = arrPenumpang[i][0]
        angkotObj.naikDari = arrPenumpang[i][1]
        angkotObj.tujuan = arrPenumpang[i][2]
        angkotObj.harga = (rute.indexOf(angkotObj.tujuan) - rute.indexOf(angkotObj.naikDari)) * 2000
        temp.push(angkotObj)
        // console.log(temp)
    }
    return temp
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]