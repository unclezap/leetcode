// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function(head) {
    if (head) {
        let curr = head
        let prev

        while (curr) {
            prev = curr
            if (!curr.next) {
                break
            } else {
                curr = curr.next
            }
            
            if (prev.val === curr.val) {
                prev.next = curr.next
                curr = prev
            }
        }

        return head        
    } else {
        return head
    }
};