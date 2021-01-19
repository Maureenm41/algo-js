var getnumber1 = prompt("give one decimal number ");


if (getnumber1 === null || !isNaN(getnumber1)){
    while (getnumber1 !== null || isNaN(getnumber1)){
        alert("Invalid name, please try again");
        getnumber1 = prompt("Give one decimal number");
        console.log(getnumber1)
       if (getnumber1 !== null || !isNaN(getnumber1)){
           document.write(getnumber1);
           break;
       }
    }
}else {
    document.write(getnumber1);
}

var getnumber2 = prompt("give one decimal number ");


if (getnumber2 === null || !isNaN(getnumber2)){
    while (getnumber2 !== null || isNaN(getnumber2)){
        alert("Invalid name, please try again");
        getnumber2 = prompt("Give another decimal number");
        console.log(getnumber2)
       if (getnumber2 !== null || !isNaN(getnumber2)){
           document.write(getnumber2);
           break;
       }
    }
}else {
    document.write(getnumber2);
}

let total= getnumber1 + getnumber2;

console.log('Total is ' + total);