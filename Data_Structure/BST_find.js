class Node {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}
class BST {
   constructor() {
      this.root = null;
   }

   insert(val) {
      let node = new Node(val);
      if (!this.root) {
         this.root = node;
         return this;
      } else {
         let curr = this.root;
         while (true) {
            if (val < curr.value) {
               if (curr.left === null) {
                  curr.left = node;
                  return this;
               } else {
                  curr = curr.left;
               }
            }
            if (val > curr.value) {
               if (!curr.right) {
                  curr.right = node;
                  return this;
               } else {
                  curr = curr.right;
               }
            }
            if (node === curr.val) {
               return undefined;
            }
         }
      }
   }

   find(val) {
      if (!this.root) return false;
      let curr = this.root;
      let found = false;
      while (!found && curr) {
         if (val < curr.value) {
            curr = curr.left;
         } else if (val > curr.value) {
            curr = curr.right;
         } else if (val === curr.value) {
            found = true;
            return curr;
         }
      }

      return found;
   }
}

let tree = new BST();
[20, 23, 12, 4, 13, 7, 10, 3, 8].forEach((a) => tree.insert(a));
console.log(tree.find(7));
