function highestScore (students) {
    var temp = {}
    for(var i = 0; i < students.length; i++) {
      var keyObj = students[i].class
      temp[keyObj] = {}
      temp[keyObj].name = students[i].name
      temp[keyObj].score = students[i].score
        for(var j = 0; j < students.length; j++) {
          if(i !== j) {
            if(students[i].class === students[j].class && students[i].score < students[j].score) {
              var keyObj = students[j].class
              temp[keyObj] = {}
              temp[keyObj].name = students[j].name
              temp[keyObj].score = students[j].score
            }
          }
        }
    }
    return temp
  }
  
  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
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
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}