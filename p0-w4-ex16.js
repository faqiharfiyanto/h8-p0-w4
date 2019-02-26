function graduates (students) {
  var result = {}
  for(var i = 0; i < students.length; i++) {
    if(students[i].score > 75) {
      var keyObj = students[i].class
      result[keyObj] = []
      var objLulusan = {}
      objLulusan.name = students[i].name
      objLulusan.score = students[i].score
      result[keyObj].push(objLulusan)
      for(var j = 0; j < students.length; j++) {
        if(i !== j && students[i].class === students[j].class) {
          if(students[j].score > 75) {
            var objLulusan = {}
            objLulusan.name = students[j].name
            objLulusan.score = students[j].score
            result[keyObj].push(objLulusan)
          }

        }
      }
    }
    // console.log(result)
  }
  return result
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}