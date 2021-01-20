
var getage = prompt("How old are you?");


if (getage  >18 || !isNaN(getage)){
    while (getage >18 || isNaN(getage)){
        getage = prompt("How old are you? ");
        console.log(getage)
       if (getage  >18 || !isNaN(getage)){
           document.write("You are not yet an adult");
           break;
       }
    }
}else {
    document.write("You are not yet an adult");}