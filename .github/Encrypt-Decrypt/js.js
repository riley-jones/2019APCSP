function encrypt(message, key, needEncrypt) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var encMessage = "";
        
    for(var i=0; i < message.length; i++) {
        var j = i%key.length;
        
        var lett = message.charAt(i);
        var kLetter = key.charAt(j);
        var move = alphabet.indexOf(kLetter);
        var currLetter = alphabet.indexOf(lett);
   
        if(needEncrypt) {
            var newIndex = (currLetter + move)%alphabet.length;
        }
        
        else{
            var newIndex = (currLetter + (alphabet.length-move))%alphabet.length;         
        }
        var newLetter = alphabet.charAt(newIndex);
        encMessage += newLetter;
           

        
    }
    return encMessage;  
 
 }

console.log(encrypt(encrypt("computerscience","cab",true),"cab",false));
