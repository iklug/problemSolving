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
