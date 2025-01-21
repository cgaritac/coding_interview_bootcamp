function load(){
    intReverse();
}

function intReverse(){
    let number = prompt("Please enter a number");
    let revnumber = parseInt(number.split("").reverse().join(""));
    revnumber = Math.sign(number) * revnumber;

    alert("Original: " + number + ", revertido: " + revnumber);
}