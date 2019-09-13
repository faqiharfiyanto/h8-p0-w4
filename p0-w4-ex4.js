function cariModus(arr) {
  var modus=0
  var result=0
  for(var i=0; i<arr.length; i++) {
      var muncul=1
      for(var j=0; j<arr.length; j++) {
          if(j!=i && arr[i]==arr[j]) {
              muncul++
            }
        }
      if(muncul>modus) {
          modus=muncul
          result=arr[i]
        } else if(muncul==arr.length) {
          result=-1
        } else if(modus==1) {
          result=-1
        }
    }
    return result
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1