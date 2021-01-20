var getanswer1 = prompt("What is your favorite animal ? ");


if (getgetanswer1 === null || !isNaN(getgetanswer1)){
    while (getgetanswer1!== null || isNaN(getgetanswer1)){
        getgetanswer1 = prompt("What is your favorite animal ");
        console.log(getgetanswer1)
       if (getgetanswer1 !== null || !isNaN(getgetanswer1)){
           document.write(getgetanswer1);
           break;
       }
    }
}else {
    document.write(getgetanswer1);
}


var getanswer2 = prompt("Give an action");


if (getgetanswer2 === null || !isNaN(getgetanswer2)){
    while (getgetanswer2!== null || isNaN(getgetanswer2)){
        getgetanswer2 = prompt("Give an action ");
        console.log(getgetanswer2)
       if (getgetanswer2 !== null || !isNaN(getgetanswer2)){
           document.write(getgetanswer2);
           break;
       }
    }
}else {
    document.write(getgetanswer2);
}

var getanswer3 = prompt("Give a place ");


if (getgetanswer3 === null || !isNaN(getgetanswer3)){
    while (getgetanswer3!== null || isNaN(getgetanswer3)){
        getgetanswer3 = prompt("Give a place");
        console.log(getgetanswer2)
       if (getgetanswer3 !== null || !isNaN(getgetanswer3)){
           document.write(getgetanswer3);
           break;
       }
    }
}else {
    document.write(getgetanswer3);