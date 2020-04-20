

const makeRunOn= function(str){
  return str.split('.').join(',')} // help me with this. I cant figure out how to not remove the last period if the string.
// maybe an if


const stringOut = function(str){
  return str.split(' ').join('').split('').join(' ')
  
}

const nightOwls = function(arr){
  const notAwake = []
    for (const person of arr){
      if (person.localTime>=100 && person.localTime<=400 && !person.asleep){
      notAwake.push(person)
    }
  }
  return notAwake
}

const totalScore = function(addUp){
  let total = 0
  for (const num of addUp){
    if (num.multiplier === 1){
      total += num.score
    }
    else if (num.multiplier === undefined){
      return total *= num.totalScore
    }
  }
  return total
}


const getToBed = function(arr){
  
  const everyoneWakeUp = [...arr]
    for (const person of arr){
      if (person.localTime>=100 && person.localTime<=400 && !person.asleep){
      everyoneWakeUp.asleep = true
    }
  }
  return everyoneWakeUp
}

const Faqtory = function(){
return obj= {}
}


if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof stringOut === 'undefined') {
  stringOut = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  stringOut,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
