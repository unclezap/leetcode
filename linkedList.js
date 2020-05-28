//https://leetcode.com/problems/reverse-linked-list/

function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
    }


    var reverseList = function(head) {
        let current = head;
        let prev = null;
        let next = head.next;
        while ( current.next !== null) {
            current.next = prev;
            prev = current;
            current = next;
            next = current.next
       } 
        head = current;
        head.next = prev;
        return head;
    };