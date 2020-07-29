// Description

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Note: Must work at roughly O(n) speed so brute force approach will not work.

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (arrayIntegers, target) => {
    
  const alreadySeen = {};

  for (let i = 0; i <= arrayIntegers.length; i++) {
    //This is the number we are looking for
    const otherNum = target - arrayIntegers[i];    

    //Check if the number we are looking for
    //is already in the object literal
    if (otherNum in alreadySeen) {
      return [alreadySeen[otherNum], i];
    }
    
    //If not, add the number as key and its 
    //index as a value
    alreadySeen[arrayIntegers[i]] = i;
  }

  return "No solution found";
  
};

/**
Leetcode result

Success
 
Runtime: 68 ms, faster than 91.09% of JavaScript online submissions for Two Sum.
 */