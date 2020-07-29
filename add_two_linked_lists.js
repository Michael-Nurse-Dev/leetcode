/*

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single
digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.  
  
Definition for singly-linked list.
function ListNode(val, next) {
this.val = (val===undefined ? 0 : val)
this.next = (next===undefined ? null : next)
}

@param {ListNode} l1
@param {ListNode} l2
@return {ListNode}

*/

const addTwoNumbers = function(linkedList1, linkedList2, carry=0) 
{  
  // console.log("Debug - Incoming", linkedList1, linkedList2, carry)
  
  //bring any previous carries forward from the 
  //previous node and add it to the current number
  currentNodeValue = linkedList1.val + linkedList2.val + carry;
  // console.log("Debug - Addition", currentNodeValue)
  

  //update the carry for the current node
  //use double slash to drop any remainder
  carry = Math.floor(currentNodeValue / 10);
  // console.log("Debug - Carry", carry)
  
  
  //Build up the first answer digit in a linked list.
  _ = currentNodeValue % 10;
  answer = new ListNode(_);
  console.log("Debug - answer", answer)
  
  //Use logic to see if the method must call itself.
  //Use logic to populate null fields in the original
  //linked lists with zeros. e.g. for adding 1000 and 3.
  
  if (linkedList1.next != null || linkedList2.next != null || carry != 0) 
    {      
      
      if (linkedList1.next == null){
        // console.log("ll1 - null check before", linkedList1.next)
        linkedList1.next = 0
        // console.log("ll1 - null check after", linkedList1.next)
      };
      if (linkedList2.next == null){
        // console.log("ll2 - null check before", linkedList1.next)
        linkedList2.next = 0
        // console.log("ll2 - null check after", linkedList1.next)
      };
      
      //Recursion
      // console.log("Debug - Recursion current", linkedList1, linkedList2, carry)
      // console.log("Debug - Recursion next", linkedList1.next, linkedList2.next, carry)
      
      console.log("BF", answer);
      
      //a bug here - overwriting the first node repeadedly - maybe fix with while loop checking to see if
      //answer.next is null
      this.answer.next = new ListNode(addTwoNumbers(linkedList1.next, linkedList2.next, carry));      
      
      console.log("AF", answer);    }

  return answer;

};


/*
for exploring the object
var addTwoNumbers = function(l1, l2) {
    
    
    linkedList = l1
    
    let testMe = new ListNode(77) 
    linkedList.next.next.next = testMe    
    
    console.log(linkedList)
    console.log(linkedList.next)
    console.log(linkedList.next.next)
    console.log(linkedList.next.next.next)
    
    }

*/


// var addTwoNumbers = function(l1, l2) {
  
//   let node = null 
  
//   const carry = arguments[2]
  
//   if (l1 || l2) {
//       const val1 = l1 ? l1.val : 0
//       const val2 = l2 ? l2.val : 0
//       const next1 = l1 ? l1.next : null
//       const next2 = l2 ? l2.next : null
//       const val = carry ? val1 + val2 + 1 : val1 + val2

//       node = new ListNode(val % 10)

//       node.next = addTwoNumbers(next1, next2, val >= 10)

//   } else if (carry) {
//       node = new ListNode(1)
//       node.next = null
//   }
//   return node
// };

// var addTwoNumbers = function(l1, l2) {
//   let head, c= head,  one = l1, two = l2, carry = 0;


//   while(one || two) {
//       let x = 0, y = 0, sum = carry, next, tmpNode;
//       if(one.val){
//           x = one.val;
//       }
//       if(two.val){
//           y = two.val;
//       }
//       sum += x + y;
//       carry = Math.floor(sum / 10);
//       next = sum % 10;
//       tmpNode = new ListNode(next);
//       if(head == null){
//           head =  new ListNode(next);
//           c = head;
//       }else{
//           c.next = tmpNode;
//           c = c.next;
//       }
//     if(one.next != null){
//       one = one.next;
//     }else{
//       one = false
//     }
//     if(two.next != null){
//       two = two.next;
//     }else{
//       two = false
//     }
//   }
//   if(carry > 0){
//       let tmpNode= new ListNode(carry);
//       c.next = tmpNode;
//   }
//   return head;
// };