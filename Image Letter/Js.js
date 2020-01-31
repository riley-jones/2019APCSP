function append (message) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    
    for(var i=0; i < message.length; i++) {

        var lett = message.charAt(i);
        var currLetterIndex = alphabet.indexOf(lett);

        var imgName = "L_" + currLetterIndex + ".png";

        var img = new Image();
        var div = document.getElementById('imgName');
 
 
img.onload = function() {
 
  div.innerHTML += '<img src="'+img.src+'" />'; 
 
};
 
 
img.src = 'imgName';

        console.log(imgName);


    }   
}

append("car");