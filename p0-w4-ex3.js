function cariMedian(arr) {
    var len=arr.length
    var lenGanjil=arr[(len-1)/2]
    var lenGenap=(arr[len/2]+arr[(len/2)-1])/2
    if(len%2!=0) {
        return lenGanjil
    } else {
        return lenGenap
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5