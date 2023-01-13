var counter = 0;
Boolean = true; 

function increment() {
    counter++;
    document.getElementById("counter").innerHTML = "The value of the counter is " + counter;
}

function hide() {
    if(Boolean == true) {
        document.getElementById("counter").style.visibility = "hidden";
        Boolean = false;
    } else {
        document.getElementById("counter").style.visibility = "visible";
        Boolean = true;
    }
}

function getRandomWords() {
    document.getElementById("word1").innerHTML = getRandomWord();
    document.getElementById("word2").innerHTML = getRandomWord();
    document.getElementById("word3").innerHTML = getRandomWord();
}

// Jank metode fordi det er mange tomme strings etter script.split(" ")
function getRandomWord() {
    var script = document.getElementById("beeScript").innerHTML;
    var words = script.split(" ");
    var word = "";
    while(word.length==0) {
        word = words[Math.floor(Math.random() * words.length)];
    }
    if(word == "bee") {
        word = "BEE";
    }
    return word + " (Word appears " + getWordCount(words, word) + " times)";
}

function getWordCount(words, word) {
    var wordCount = 0;
    for(var i = 0; i < words.length; i++) {
        if(words[i] == word) {
            wordCount++;
        }
    }
    return wordCount;
}