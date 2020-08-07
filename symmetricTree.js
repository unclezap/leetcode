// https://leetcode.com/problems/symmetric-tree/submissions/

let array1 = [1,2,2,3,4,4,3]
let array2 = [1,2,2,3,4,4,3,5,6,7,8,8,7,6,5]
let array3 = [1,2,2,null,3,null,3]
let array4 = [1,2,2,3,null,null,3]

function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
         if (this.left)  {
           this.left = new TreeNode(this.left)
         }
         
    }

    let root = new TreeNode([1],[2,3,4],[2,4,3])
    console.log(root.left)
    // param {TreeNode} root
    // return {boolean}

// let x = TreeNode(1, [2,3,4], [2,4,3])
// console.log(x)
// console.log(x.val)

var isSymmetricRecursive = function(root) {
    function compare (left, right) {
        if (left == null && right == null) {
            return true
        }
        if (left == null || right == null) {
            return false
        }
        if (left.val !== right.val) {
            return false
        }
        
        return compare(left.left, right.right) && compare(left.right, right.left)
    }
    
    return compare(root, root)
    
};

var isSymmetricIterative = function(root) {

    if (root == null ) {
        return true
    }
    if (root.left == null && root.right == null) {
        return true
    }

    let prevRow = [root.left, root.right]
    let symmetric = true
    
    while (symmetric === true) {
        newRow = []
        if (prevRow.length > 0) {
            for (let i=0; i < prevRow.length; i++) {
                if (prevRow[i] == null && prevRow[prevRow.length - 1 - i] == null) {
                    
                } else if (prevRow[i] == null || prevRow[prevRow.length - 1 - i] == null) {
                    return false
                } else if (prevRow[i].val !== prevRow[prevRow.length - 1 - i].val) {
                    return false
                }
            }
        }
        prevRow.forEach((item) => {
            if (item !== null) {
                newRow.push(item.left)
                newRow.push(item.right)
            }
        })
        if (newRow.length === 0) {
            break
        }
        prevRow = newRow
    }

return symmetric    
};

var isSymmetric = function(root) {
    let step = 1
    let i = 1
    let miniRoot
    
    while (i < root.length) {
        step *= 2
        miniRoot = root.slice(i,i+step)
        // console.log("miniRoot",miniRoot)
        for (let j=0; j < miniRoot.length/2; j++) {
            // console.log(miniRoot[j], miniRoot[miniRoot.length - 1 - j])
            if (miniRoot[j] !== miniRoot[miniRoot.length - 1 - j]) {
                return false
            }
        }
        i += step
    }
    // console.log("===")
    return true
};

var isSymmetric = function(root) {
    if (!root) return true;
    
    function checkSymmetry(l, r) {
        if (!l && !r) {
            return true; // Both nodes are missing
        }
        if(!l || !r || l.val !== r.val) {
            return false; // One ndoe is missing or mismatch detected
        }
        return checkSymmetry(l.left, r.right) && checkSymmetry(l.right, r.left);
    }
    
    return checkSymmetry(root.left, root.right)
};

// console.log(isSymmetric(array1))
// console.log(isSymmetric(array2))
// console.log(isSymmetric(array3))
// console.log(isSymmetric(array4))

