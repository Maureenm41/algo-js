var getshoessize = prompt("What is your shoes size ? ");


if (getshoessize === null || !isNaN(getshoessize)){
    while (getshoessize !== null || isNaN(getshoessize)){
        getshoessize = prompt("What is shoes size? ");
        console.log(getName)
       if (getshoessize !== null || !isNaN(getshoessize)){
           document.write(getshoessize);
           break;
       }
    }
}else {
    document.write(getshoessize);
}

var getbirthyear = prompt("What is your birth year ? ");


if (getbirthyear === null || !isNaN(getbirthyear)){
    while (getbirthyear !== null || isNaN(getbirthyear)){
        getbirthyear = prompt("What is birth year ? ");
        console.log(getbirthyear)
       if (getbirthyear !== null || !isNaN(getbirthyear)){
           document.write(getbirthyear);
           break;
       }
    }
}else {
    document.write(birthyear);
}