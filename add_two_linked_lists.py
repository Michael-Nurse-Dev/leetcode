'''
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single
digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.

Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
'''

class Solution:
    def addTwoNumbers(self, linked_list1: ListNode, linked_list2: ListNode, carry=0) -> 'ListNode':

        """   
        Take two linked lists (node lists) and
        using functional programming add the
        elements together to return the sum.

        :rtype: ListNode
        """
        
        #bring any previous carries forward from the 
        #previous node and add it to the current number
        current_node_value = linked_list1.val + linked_list2.val + carry 
        
        #update the carry for the current node
        #use double slash to drop any remainder
        carry = current_node_value // 10
        
        #Build up the first answer digit in a linked list.
        answer = ListNode(current_node_value % 10)
        
        #Use logic to see if the method must call itself.
        #Use logic to populate null fields in the original
        #linked lists with zeros. e.g. for adding 1000 and 3.
        
        if (linked_list1.next != None or linked_list2.next != None or carry != 0):
           
          if linked_list1.next == None:
              linked_list1.next = ListNode(0)
          if linked_list2.next == None:
              linked_list2.next = ListNode(0)
          
          answer.next = self.addTwoNumbers(linked_list1.next, linked_list2.next, carry)
        
        return answer   

'''
Leetcode result

Success

Runtime: 76 ms, faster than 66.98% of Python3 online submissions for Add Two Numbers.
'''
        