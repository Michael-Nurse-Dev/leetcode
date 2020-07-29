/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single
digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.

My note: the lists can be any length - and the class cannot be iterated through, 
so you will have to use functional programming to re-call the method or use a
while loop.

  Definition for singly-linked list.
  public class ListNode {
      public int val;
      public ListNode next;
      public ListNode(int val=0, ListNode next=null) {
          this.val = val;
          this.next = next;
      }
  }
 */

public class Solution
{
    public ListNode AddTwoNumbers(ListNode linkedList1, ListNode linkedList2) 
    {

      //We will store the final answer here - in a linked list.
      ListNode answer = new ListNode();

      //We will use this for tracking the carry
      ListNode carryTracker = answer;

      //We will need an empty linked list later on
      ListNode empty = new ListNode();

      //Initialise carry to zero.
      int carry = 0;

        while (true)
        {
          int summation = linkedList1.val + linkedList2.val + carry;

          //determine the answer digit if there is a carry
          if (summation >= 10) 
          {
            //Seperate answer and carry
            //Example - 9 + 9 is 18 - record 8 and carry 1.
            summation = summation - 10;
            carryTracker.val = summation;
            carry = 1;            
          }  
          //where there is no carry
          else
          {
              carryTracker.val = summation;
              carry = 0;
          }

          //check if next given linked lists are nulls - if it is and 
          //there is no carry we are done - break out of the while loop.
          if (linkedList1.next == null && linkedList2.next == null)
          {
            if (carry !=0)
            {
              carryTracker.next = new ListNode();
              carryTracker.next.val = carry;
            }
            break;
          }

          //if there is a remaining carry. If so,
          if (carryTracker.next == null)
          {
            carryTracker.next = new ListNode();
            carryTracker = carryTracker.next;
          }

          linkedList1 = linkedList1.next == null ? empty : linkedList1.next;
          linkedList2 = linkedList2.next == null ? empty : linkedList2.next;
        }

        return answer;       
    }
}

/*
Leetcode result

Success

Runtime: 112 ms, faster than 68.30% of C# online submissions for Add Two Numbers.
*/