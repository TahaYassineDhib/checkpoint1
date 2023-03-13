let phrase = "";

while ( phrase == ""){
    phrase = prompt("enter a phrase: ");
}
let wordCount = 1 ;
let vowelsCount = 0; 
for (let i =0 ;i < phrase.length ; i++){
    if(phrase[i] === " "){
        wordCount ++ ; 
    }
    if (['A','E','O','I','U','Y'].includes( phrase[i].toUpperCase())){
        vowelsCount ++ ; 
    }

}
console.log(`words: ${wordCount} vowels: ${vowelsCount}`)