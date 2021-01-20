var getanswer1 = prompt("What is your favorite animal ? ");


if (getanswer1 === null || !isNaN(getanswer1)){
    while (getanswer1!== null || isNaN(getanswer1)){
        getanswer1 = prompt("What is your favorite animal ");
        console.log(getanswer1)
       if (getanswer1 !== null || !isNaN(getanswer1)){
           document.write(getanswer1);
           break;
       }
    }
}else {
    document.write(getanswer1);
}


var getanswer2 = prompt("Give an action");


if (getanswer2 === null || !isNaN(getanswer2)){
    while (getanswer2!== null || isNaN(getanswer2)){
        getanswer2 = prompt("Give an action ");
        console.log(getanswer2)
       if (getanswer2 !== null || !isNaN(getanswer2)){
           document.write(getanswer2);
           break;
       }
    }
}else {
    document.write(getanswer2);
}

var getanswer3 = prompt("Give a place ");


if (getanswer3 === null || !isNaN(getanswer3)){
    while (getanswer3!== null || isNaN(getanswer3)){
        getanswer3 = prompt("Give a place");
        console.log(getanswer2)
       if (getanswer3 !== null || !isNaN(getanswer3)){
           document.write(getanswer3);
           break;
       }
    }
}else {
    document.write(getanswer3);
}