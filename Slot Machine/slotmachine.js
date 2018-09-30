var credit = 0;

function writeMessage( message ) {
    document.getElementById('messages').innerHTML = message;
}

function spin() {
            
    if ( credit > 0 ) {
        reloadCredit(-1);
        var firstsquareValue = Math.floor((Math.random()*9)+1);
        var secondsquareValue = Math.floor((Math.random()*9)+1);
        var thirdsquareValue = Math.floor((Math.random()*9)+1);

	    document.getElementById('firstSquare').innerHTML = firstsquareValue;
        document.getElementById('secondSquare').innerHTML = secondsquareValue;
        document.getElementById('thirdSquare').innerHTML = thirdsquareValue;

        if ( firstsquareValue == secondsquareValue && firstsquareValue == thirdsquareValue  ) {
            writeMessage( 'you are born to be winner!!!' );
        } 
        else {
            writeMessage( 'please try again....' );
        }
            } 
    else 
        {
            writeMessage( 'You need to add credits to start the game!!!! ' );
    }
}

function reloadCredit( value ) {
    credit += value;
    document.getElementById("p2").innerHTML = credit;
}