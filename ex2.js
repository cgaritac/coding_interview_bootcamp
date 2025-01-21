function load(){
    palindrome2();
}

function palindrome(){
    let word = prompt("Please enter a word");
    let revWord = word.split("").reverse().join("");

    word === revWord? alert("It is a palindrome word") : alert("It is not a palindrome word");
}

// Solution 1
function palindrome1(){
    const word = prompt("Please enter a word");
    const revWord = word.split("").reverse().join("");

    word === revWord? alert("It is a palindrome word") : alert("It is not a palindrome word");
}

// Solution 1
function palindrome2(){
    const word = prompt("Please enter a word");
    let isPalindrome = word.split("").every((letter, i) => {
        let otherSideIndex = i + 1;

        return letter === word[word.length - otherSideIndex];

    })

    isPalindrome? alert("It is a palindrome word") : alert("It is not a palindrome word");
    console.log(2)
}