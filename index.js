function shout(string){
    return string.toUpperCase();
}


function whisper(string){
    return string.toLowerCase();
}


function logShout(string){
    console.log(shout(string));
}

function logWhisper(string){
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string){
    switch(true){
        case string === 'Let\'s have dinner together!':
            return "I would love to!"
            break;
        
        case whisper(string) === string:
            return "I can\'t hear you!";
            break
        case shout(string) === string:
            return 'YES INDEED!';
            break;   
    }
}
    
    
  /*  
    if (string === string.toLowerCase()) {
        return "I can\'t hear you!";

    } else if(string === string.toUpperCase()) {
        return 'YES INDEED!';

    } else if(string === 'Let\'s have dinner tonight!'){
        return "I would love to!";

    }

}
*/
console.log(sayHiToHeadphonedRoommate("hey!"))