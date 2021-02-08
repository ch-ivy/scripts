class MaxBinaryHeap {
   constructor() {
      this.values = [];
   }
   insert(element) {
      this.values.push(element);
      this.bubbleUp();
   }
   bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while (idx > 0) {
         let parentIdx = Math.floor((idx - 1) / 2);
         let parent = this.values[parentIdx];
         if (element <= parent) break;
         this.values[parentIdx] = element;
         this.values[idx] = parent;
         idx = parentIdx;
      }
   }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

//my version
class BinaryHeaps2 {
   constructor() {
      this.value = [];
   }
   insert(val) {
      this.value.push(val);
      if (this.value.length > 1) {
         let n = this.value.length - 1;
         let parent = Math.floor((n - 1) / 2);
         while (n > 0) {
            if (val <= this.value[parent]) {
               break;
            }
            this.swap(this.value, n, parent);
            n = parent;
            parent = Math.floor((n - 1) / 2);
         }
      }

      return this.value;
   }
   swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);
}

let heap = new BinaryHeaps2();
[41, 39, 33, 18, 27, 12, 55].forEach((a) => heap.insert(a));
console.log(heap.value);
