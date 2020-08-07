// https://leetcode.com/problems/path-sum-iii/submissions/

var pathSum = function(root, target) {
    let counter = 0
    
    function summate (node, sum=0) {
        if (node !== null) {
            sum += node.val

            if (sum === target) {
                counter++
            }

            summate(node.left, sum)
            summate(node.right, sum)
        }
    }
    
    function descend (node) {
       if (node !== null) {
        summate(node)
        descend(node.left)
        descend(node.right)
       }
    };
 
    descend(root)

    return counter
}