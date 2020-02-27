function append (message) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    for(var i=0; i < message.length; i++) {

        var lett = message.charAt(i);
             
        var currLetterIndex = alphabet.indexOf(lett);

        var imgName = "L_" + currLetterIndex + ".png";

        $("#final").append("<img src='Images/"+imgName+"'>");

        var message = $('#ui').val();

        console.log(imgName);

    }   
}

append('message');
