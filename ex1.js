//Opcion 1
// function reverse(){
//     const data = prompt("Introduzca la palabra");

//     const array = data.split("");
//     array.reverse();   

//     alert(array.join(""));
// }

//Opcion 2
// function reverse(){
//     const data = prompt("Introduzca la palabra");
//     let reversed = '';
//     
//     for(let character of data){
//     reversed = character + reversed;
//     }

//     alert(reversed);
// }

//Opcion 3
// function reverse(){
//     const data = prompt("Introduzca la palabra");
//     return data.split("").reduce((rev, char) => char + rev, '');
//     alert(reversed);
// }


//Mi solucion
function reverse(){
    const data = prompt("Introduzca la palabra");

    const array = data.split("");
    let reverseArray = [];
    let counter = 0;

    for (let i = array.length-1; i >= 0; i--) {        
        reverseArray[counter] = array[i]
        counter++;
    }

    let reverseString = reverseArray.join("");

    alert(reverseString);
}