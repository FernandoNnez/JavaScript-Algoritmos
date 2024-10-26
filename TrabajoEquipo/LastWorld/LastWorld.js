//IN: STRING s, n
//OUT: LAST WOLRD reverse

function lastWrld(s, n) {
    let copy = "";
    let reverse = "";
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] == " ") {
            break;
        }
        copy += s[i];
    }
    for (let v = copy.length - 1; v >= 0; v--) {
        reverse += copy[v];
    }
    return reverse;
}


let cadena = "por mi raza hablara el espiritu";
console.log(lastWrd(cadena, cadena.length));
