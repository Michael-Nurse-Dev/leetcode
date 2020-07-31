/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single
digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.

Syntax bote: In Javascript != null arguments can be ommitted.
i.e. if(x != null) is the same as if(x). Only works with declared
variables.
*/

const addTwoNumbers = function(l1, l2) {    

    let node = null
    
    //Accesses the 3rd argument passed to this function.
    const carry = arguments[2]

    if (l1 || l2 ) {       

        //If current a value is null fill with a zero. 
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0

        //Move linked lists forward unless you have reached the end.
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null

        //Addition
        const val = carry ? val1 + val2 + 1 : val1 + val2

        //Functional recursion
        node = new ListNode(val % 10)
        node.next = addTwoNumbers(next1, next2, val >= 10)  

    } else if (carry) {
        node = new ListNode(1)
        node.next = null
    }

    return node
};

/*
leetcode.com result

Success

Runtime: 136 ms, faster than 51.61% of JavaScript online submissions for Add Two Numbers.*/