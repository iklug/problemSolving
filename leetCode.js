let myFeelings = 'hurt';

//1. TWO SUM > easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function(numbers, target) {
    for(let first=0; first <= numbers.length; first++){
        for(let last=numbers.length-1; last > 0; last--){
            if( first!= last && numbers[first] + numbers[last] == target){
                return [first,last];
            }
        }
    }
};

//my first solution -- no idea what I'm doing there really

const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++){
        for (let j = numbers.length-1; j > i; j--){
            if (target === numbers[i] + numbers[j]){
                return [i,j];
            }
        }
    }    
}

// this is a version I would do now, which looks a little better

// ----------------------------------------------------

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. 
//In how many distinct ways can you climb to the top?
//You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?

const climbStairs = n => {
    if (n === 1){
        return 1;
    }
    if (n === 2){
        return 2;
    }
   
    let step1 = 1;
    let step2 = 2;
  
    
    for (let i=2;i<n;i++){
      let step3 = step1;
        step1 = step2;
        step2+=step3;
       
    }
  return step2;
}

//as it turns out, because there's only one 2 ways to get to any given step
// 1 step from one down, or 2 step hop from two down
//the amount of possibilities are the amount of possibilities for the 2 previous steps
//added together

// -------------------------------------------------------------------

//14. LONGEST COMMON PREFIX

//Write a function to find the longest common prefix string
//amongst an array of strings.
//if there is no common prefix, return empty string.

//1st attempt

const sameLetter = string => {
    let test = '';
   for (let i=0; i<string.length; i++){
    if (test.length === 0){
      test+= string[i];
    } 
     else if (test[i-1] !== string[i]){
       return false;
     }
      else {
       test+= string[i];
      }
     
     }
    return true;
   }

  var longestCommonPrefix = function(array) {
    let testArray = [];
  let string = '';
    for (let j = 0; j<array[0].length; j++){
      for (let y = 0; y<array.length; y++){
        if (!testArray[j]){
        
          testArray.push(array[y][j]);
        } else {
        testArray[j]+=array[y][j]
        }
      
      }
     
        if (sameLetter(testArray[j])){
         string+= testArray[j][0];
        } else {
            break;
        }
       
      }
    return string;
  };

  // +++++++++++++++++

//lets see if i can solve it in a different way.
//let's say i took the first word and split it.
// flower flow
// if string[i] === otherString [i]

const longestCommonPrefix = arr => {
    
    for (let i = 1; i<arr.length; i++){
     for (let j = 0; j < arr[0].length; j++){
        if (arr[0][j] === arr[i][j]){
            continue;
        } else {
            arr[0] = arr[0].slice(0,j);
            break;
        }
    }
   
    }
   return arr[0];
}

// a slightly better version, though i'll have to see what the actual smart people do.