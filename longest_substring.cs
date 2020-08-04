/*Given a string, find the length of the longest substring without repeating characters

My note: A brute force approach will fail leetcode's unit tests with a time out. A sliding
window / double pointer approach must be used.*/

public class Solution {
    public int LengthOfLongestSubstring(string s) {
        
      Dictionary<char, int> dict = new Dictionary<char, int>();
      dict.Clear();

      int swStart = 0; //Sliding window start position.
      int start = 0;
      int longest = 0;
      int loopResult = 0;
      char c;      

      for (int i = 0; i < s.Length; i++) 
      {
          c = s[i];

          if (dict.ContainsKey(c))        
            {
              
              swStart = dict[c] + 1;                   

              if (swStart > start) {
                start = swStart;
              }
            }

          loopResult = i - start + 1;

          if (loopResult > longest)
            {              
            longest = loopResult;
            }
     
          dict[c] = i;
      }

      return longest;
    }
}

/*
Leetcode result

Success

Runtime: 80 ms, faster than 93.54% of C# online submissions for 
Longest Substring Without Repeating Characters.
*/