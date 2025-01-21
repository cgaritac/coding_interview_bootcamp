function load(){
    maxChar();
}

function maxChar(){
    let word = prompt("Please enter a string");
    
    word = word.split("");
    let counter = 0;
    let registryCount = 0;
    let registryLetter = "";
    
    for(let letter of word){
        counter = 0;
        for(let letter2 of word)
        {            
            if(letter === letter2){
                counter++;
            }
            
        }

        console.log(counter);
        
        if (registryCount <= counter) 
        {
            registryCount = counter;
            registryLetter = letter;
        }
    }
    
    let result = {registryLetter: registryCount}

    console.log(result);

    alert(registryLetter + " = " + registryCount);
}


//Solution 1
function maxChar(){
    let word = prompt("Please enter a string");
    
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of word){
        if(charMap[char]){
            charMap[char]++;
        }else{
            charMap[char] = 1;
        }
    }

    console.log(charMap);

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }

    let result = {registryLetter: maxChar, registryCount: max}

    alert(result);
}