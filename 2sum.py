'''
Description

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
'''

class Solution:
    def twoSum(self, list_of_ints, target_int):

        """
            Take a target and list of integers and search 
            for any two who sum to the target. 
            
            Usable on large lists as computes in 
            near O(n) time and not O(n2) time.            
      
            Return the indices of the two integers in
            a list of length 2"
            
            Types 
                nums: List[int]
                target: int
                return: List[int, int]
        """

        already_seen = dict()

        for idx, nbr in enumerate(list_of_ints):
            
            #This is the number we are looking for
            other_nbr = target_int - nbr
            
            #Have we seen it already?
            if other_nbr in already_seen:
                
                #If so, great - return its 
                #index and current index
                return [already_seen[other_nbr], idx]
            else:
                #Else, add the current number and
                #index to the hash table.
                already_seen[nbr] = idx
            
           #Final return - trigger error
        return "Error: no match found"
    
'''
Leetcode result:

Success

Details 
Runtime: 48 ms, faster than 87.10% of Python3 online submissions for Two Sum.
Memory Usage: 15.3 MB, less than 26.67% of Python3 online submissions for Two Sum.
'''

#test git
