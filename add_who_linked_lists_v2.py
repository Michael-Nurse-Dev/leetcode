
'''
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single
digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.

Note: The below class was provided by leetcode.com

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
'''

# Utility function to convert lists to singly linked list. 
def l2ll(lst):
    if len(lst) == 1:
        return ListNode(lst[0])
    return ListNode(lst[0], l2ll(lst[1:])) 

# My solution
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    
        #We will use a list for tracking the results
        answer_list = []
        
        #Make sure the current nodes are not None.
        if l1.val == None: l1.val = 0
        if l2.val == None: l2.val = 0

        #calculate the value of the first node.
        summation = l1.val + l2.val
        
        #The answer must be supplied as a node list.
        #This creates the first answer in the node.
        #E.g. 7 + 5 = 12 mod 10 drops the one leaving 2.
        answer_list.append(summation % 10)

        #The initial carry - using double slash drops the decimal
        #E.g. 7 + 5 = 12 / 10 = 1.2 drop everything after the decimal = 1
        carry = summation // 10
        print("Before while", summation, carry)

        #While loop to effect recursion.        
        while True:
            
            #Check if we should break
            if l1.next == None and l2.next == None and carry == 0:
                print("Before break", l1.next, l2.next, carry)
                break
            
            #Advance l1 and l2 to the next element
            #unless there is no next element. If there
            #is no next element to advance to - set
            #the current value to zero.                    
            if l1.next != None: l1 = l1.next
            else: l1.val = 0 

            if l2.next != None: l2 = l2.next
            else: l2.val = 0          

            #Now we can sum
            print("Summation", l1, l2, carry)
            summation = l1.val + l2.val + carry
            
            #Logic for a carry
            if summation >= 10:
                summation -= 10
                carry = 1     
            else:
                carry=0

            #Record the result        
            answer_list.append(summation)

        #Convert list to node list.
        answer = l2ll(answer_list)
        print("Ok. Breathe.")

        #Return
        print("Final return", answer)
        return answer

'''
Leetcode result

Success

Runtime: 276 ms, faster than 5.94% of Python3 online submissions for Add Two Numbers.
Note: this uses a while loop. The self-invoking version1 is much faster.
'''

