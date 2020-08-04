/*Given a string, find the length of the longest substring without repeating characters

My note: A brute force approach will fail leetcode's unit tests with a time out. A sliding
window / double pointer approach must be used.*/

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function(s) {

  ol = {};

  maxLengthFound = subStart = loopResult = winStart = 0;

  for (let index = 0; index < s.length; index++) {
    const character = s[index];
    
    if (character in ol) {
      winStart = ol[character] + 1;

      if (winStart > subStart) {
        subStart = winStart;
      }
    }

    loopResult = (index - subStart + 1);

    if (loopResult > maxLengthFound) {
      maxLengthFound = loopResult;
    }

    ol[character] = index;
  }

  return maxLengthFound;
};


/*
Leetcode result

Success

Runtime: 108 ms, faster than 74.39% of JavaScript online submissions for Longest 
Substring Without Repeating Characters.
*/