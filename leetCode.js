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


