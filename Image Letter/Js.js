function append (message) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    
    for(var i=0; i < message.length; i++) {

        var lett = message.charAt(i);
        var currLetterIndex = alphabet.indexOf(lett);

        var imgName = "L_" + currLetterIndex + ".png";

        $(showLett).append 
        
        console.log(imgName);


    }


}

append("car");