function isPalindrom (num) {
    if (num < 1 || num >= 10000) return false; //base, condición

    let residuo = 0, tmp = num, sum = 0;

    while (num > 0) {
        residuo = num % 10;
        sum = (sum * 10) + residuo;
        num = Math.floor(num / 10); //si no se reduce el número quitándole el último dígito con Mth.flt no sirve.
    }

    if (tmp == sum) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrom(-20));
console.log(isPalindrom(0));
console.log(isPalindrom(1));
console.log(isPalindrom(121));
console.log(isPalindrom(10001));