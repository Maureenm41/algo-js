
var getage = prompt("How old are you?? ");


if (getage === >18 || !isNaN(getage)){
    while (getage!== >18 || isNaN(getage)){
        getage = prompt("What is your favorite animal ");
        console.log(getage)
       if (getage !== >18 || !isNaN(getage)){
           document.write("You are not yet an adult");
           break;
       }
    }
}else {
    document.write("You are not yet an adult");
}


var getage = prompt ("How old are you?");
if(getage === >18 || !isNaN(getage))
{while (getage!== null || isNaN(getage)){
    getage = prompt("How old are you?");
    console.log(getage)
    if(getage === >18 || !isNaN(getage))
    {
        document.write("You are not yet an adult");
        break;
    }
}
}else {
document.write("You are not yet an adult");
}


if(getage === <18 || !isNaN(getage))
{while (getage!== <18 || isNaN(getage)){
    getage = prompt("How old are you?");
    console.log(getage)
    if(getage === <18 || !isNaN(getage))
    {
        document.write("You are an adult");
        break;
    }
}
}else {
document.write("You are an adult");
}
