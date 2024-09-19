function sumEvenMatrix(mtx) {
    //input: matriz bidimencional de enteros.
    //ouput: la suma de los números impares de la matriz.
    let sum = 0;
    for (let v = 0; v < mtx.length; v++) {
        for (let k = 0; k < mtx[v].length; k++) {
            if (mtx[v][k] % 2 == 0) {
                sum = sum + mtx[v][k];
            }
        }
    }
    return sum;
}

const mtx1 = [
    [0, 2, 0],
    [2, 0, 2],
    [0, 2, 0]
];

const mtx2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const mtx3 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

const mtx4 = [
    [1,2,3,4]
];
console.log("Suma de Matriz 1: ", sumEvenMatrix(mtx1));

console.log("Suma de Matriz 2: ", sumEvenMatrix(mtx2));

console.log("Suma de Matriz 3: ", sumEvenMatrix(mtx3));

console.log("Suma de Matriz 4: ", sumEvenMatrix(mtx4));
