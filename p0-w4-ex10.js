function changeMe(arr) {
    var ngobyek={}
    
    if (arr.length==0) {
        return '""'
    }
    for(var i=0; i<arr.length; i++) {
        ngobyek.firstName=arr[i][0]
        ngobyek.lastName=arr[i][1]
        ngobyek.gender=arr[i][2]
        if(arr.length==4) {
            ngobyek.age=2019-arr[i][3]
        } else {
            ngobyek.age='Invalid Birth Year'
        }
        console.log(i+1+'.',arr[i][0],arr[i][1]+':')
        console.log(ngobyek)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""