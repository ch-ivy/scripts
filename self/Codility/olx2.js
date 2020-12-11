function olex(ju, cap) {
    var max = 1;
    let nuju = [];
    for (let i = 0; i < ju.length; i++) {
        let aa = [ju[i], i];
        nuju.push(aa);
    }
    nuju.sort((a, b) => a[0] - b[0]);
    var sum = [];
    sum[0] = nuju[0][0];
    var check = {};
    for (let i = 1; i < ju.length; i++) {
        sum[i] = nuju[i][0] + sum[i - 1];
    }
    for (let i = 0; i < sum.length; i++) {
        check[sum[i]] = i;
    }
    for (let i = 0; i < ju.length; i++) {
        let full = cap[nuju[i][1]];
        let rem = full - nuju[i][0];

        if (full == sum[i]) {
            max = Math.max(max, i + 1);
        }
        if (full == sum[i]) {
            max = Math.max(max, i + 1);
        } else if (full < sum[i]) {
            var index = check[rem] || bIndex(sum, rem);
            if (index < 0) {
                index = (-index - 1) - 1;
            }
            if (index >= 0) {
                max = Math.max(max, index + 1 + 1);
            }
        } else {
            var index = check[full] || bIndex(sum, full)
            if (index < 0) {
                index = (-index - 1) - 1;
            }
            if (index >= 0) {
                max = Math.max(max, index + 1);
            }
        }
    }

    return max;
}
function bIndex(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    var index = Math.floor((end - start) / 2) + start;
    if (target > nums[nums.length - 1]) {
        index = nums.length;
    }
    else {
        while (start < end) {
            var value = nums[index];

            if (value === target) {
                result = index;
                break;
            }
            else if (target < value) {
                end = index;
            }
            else {
                start = index + 1;
            }

            index = Math.floor((end - start) / 2) + start;
        }
    }
    return -(index + 1);
}
console.log(olex([10, 2, 1, 1], [10, 3, 2, 2]));
console.log(olex([1, 2, 3, 4], [3, 6, 4, 4]));
console.log(olex([2, 3], [3, 4]));
console.log(olex([1, 1, 5], [6, 5, 8]));
console.log(olex([1, 2], [4, 3]));
