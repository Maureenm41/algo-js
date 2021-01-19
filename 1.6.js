var getinteger1 = prompt("give one number");


if (getinteger1 === null || !isNaN(getinteger1)){
    while (getinteger1 !== null || isNaN(getinteger1)){
        alert("please try again ");
        getinteger1 = prompt("give one number ");
        console.log(getinteger1)
       if (getinteger1!== null || !isNaN(getinteger1)){
           document.write(getinteger1);
           break;
       }
    }
}else {
    document.write(getinteger1);
}

var getinteger2 = prompt("give a second number");


if (getinteger2 === null || !isNaN(getinteger2)){
    while (getinteger2 !== null || isNaN(getinteger2)){
        alert("please try again");
        getinteger2 = prompt("give a second number");
        console.log(getinteger2)
       if (getinteger2 !== null || !isNaN(getinteger2)){
           document.write(getinteger2);
           break;
       }
    }
}else {
    document.write(getinteger2);
}