function deleteDuplicates(num) {
    if (num.length == 0) return 0;
    
    let total = 1;

    for (let i = 1; i < num.length; i++) {
        if (num[i] != num[i - 1]) {
            num[total] = num[i];
            total++;
        }
    }

    return total;
}

let num1 = [1,2,3,4,5,6,7,8,9];
console.log(deleteDuplicates(num1));

let num2 = [0,0,0,0];
console.log(deleteDuplicates(num2));

let num3 = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9];
console.log(deleteDuplicates(num3));

let num4 = [-1,-2,-2,-3];
console.log(deleteDuplicates(num4));

let num5 = [-1,-1,-2,-3,1,1,2,3];
console.log(deleteDuplicates(num5));
