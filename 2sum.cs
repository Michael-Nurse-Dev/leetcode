// Description

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Note: Must work at roughly O(n) speed - so brute force approach will not work.

public class Solution 
{
    public int[] TwoSum(int[] nbrs, int target) 
    {

        int[] Answer = {0,0};

        Hashtable alreadySeen = new Hashtable();
        alreadySeen.Clear();

        for (int i=0; i<nbrs.Length; i++) 
        {
          //This is the number we are looking for
          int otherNum = target - nbrs[i];

          //Check if the number we are looking for
          //is already in the hashtable. If so, we
          // have found the answer.
          if (alreadySeen.ContainsKey(otherNum))
          {
            Answer[0] = (int)alreadySeen[otherNum];
            Answer[1] = i;
            return Answer;
          }

          //Else add the number to the hashtable 
          //There can be duplicate numbers so check first. 
          if (!alreadySeen.ContainsKey(nbrs[i]))
          {
          alreadySeen.Add(nbrs[i], i);
          }
        }
        
    return Answer;            

    }      
}


/*
Leetcode result

Success

Runtime: 232 ms, faster than 99.24% of C# online submissions for Two Sum.
*/
