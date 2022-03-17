// Simple, remove the spaces from the string, then return the resultant string.



//SOLUTION

function noSpace(x){
    return x.split(" ").join("")
    }


noSpace("M    a r ch ") //"March"
noSpace("On       e ") //"One"