function append (message) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    for(var i=0; i < message.length; i++) {

        var lett = message.charAt(i);
             
        var currLetterIndex = alphabet.indexOf(lett);

        var imgName = "L_" + currLetterIndex + ".png";
        
        $("#final").append("<img src='Images/"+imgName+"'>");


        console.log(imgName);

    }   
}

$("#ui").keydown(
    function(){
        
        var userInput = $("#ui"). val();
        
            $(".final").empty();
         
            append(userInput);

    }
);

