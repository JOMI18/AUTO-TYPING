"use strict"
let sentenceIndex = 0;
let wordIndex = 0
let content= ["My name is Odedairo Oluwajomiloju 🎀",
             "I am a software developer✨",
             "My Project is based on autotyping " ];
console.log(content[sentenceIndex][wordIndex]);


function start() {
    if (sentenceIndex>=content.length) {
        sentenceIndex=0
    }
    let write = content[sentenceIndex]
    console.log(write)

    writeText(write) 
}
start()

function writeText(word) { 
    wordTyper.innerHTML+= word[wordIndex]
    wordIndex++
   setTimeout(() => {
    if (word[wordIndex]) {
        writeText(word)
    } else {
        wordIndex=0
        sentenceIndex++
        setTimeout(() => {
            delette()
        }, 2000);
    }
    
   }, 50);
}

function delette() {
    let slices = wordTyper.innerHTML.toString()
    let a = slices.slice( slices,-1)

    wordTyper.innerHTML =a
     setTimeout(() => {
        if (wordTyper.innerHTML=='') {
            start()
           }
           else{
             delette()
           }
    }, 100);
    
}

