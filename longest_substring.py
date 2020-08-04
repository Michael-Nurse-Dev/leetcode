#Given a string, find the length of the longest substring without repeating characters

#My note: A brute force approach will fail leetcode's unit tests with a time out. A sliding
#window / double pointer approach must be used.

class Solution:
    def lengthOfLongestSubstring(self, string: str) -> int:

      d = {}

      max_length_so_far = start = 0

      for i, char in enumerate(string):
        
        print(char)
            
        #The sliding window looks at each character and then sees 
        #how far it can go back without a repetition.
        if char in d:                     
            
            #We only to start from the previous occurance
            #of the character in question (speed enhancement).
            print(start, d[char], sliding_window_start_position)                            
            sliding_window_start_position = d[char] + 1
            print(start, d[char], sliding_window_start_position)                            

            #Move the 2nd pointer along.

            if sliding_window_start_position > start:
              start = sliding_window_start_position
        
        #This is how far we went before repetition.
        #print("Loop result i", i, "-start", start, " +1")
        loop_result = (i - start + 1)
        
        #Highest result so far.
        if  loop_result > max_length_so_far:
            max_length_so_far = loop_result
        
        #Finally, add the char to the dictionary
        #so so we know it last occurance for the next loop.
        d[char] = i
            
      return max_length_so_far

      '''
      Leetcode result

      Success

      Runtime: 44 ms, faster than 98.92% of Python3 online submissions for Longest Substring Without Repeating Characters.
      '''