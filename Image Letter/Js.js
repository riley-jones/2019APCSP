function append (message) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    
    
    var lett = message.charAt(0);
    var currLetterIndex = alphabet.indexOf(lett);

    var imgName = currLetterIndex;

    console.log(imgName);

}

append("b");