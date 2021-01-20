var getshoessize = prompt("What is your shoes size ? ");


if (getshoessize === null || !isNaN(getshoessize)){
    while (getshoessize !== null || isNaN(getshoessize)){
        getshoessize = prompt("What is your shoes size? ");
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
        getbirthyear = prompt("What is birth your year ? ");
        console.log(getbirthyear)
       if (getbirthyear !== null || !isNaN(getbirthyear)){
           document.write(getbirthyear);
           break;
       }
    }
}else {
    document.write(getbirthyear);
}

var x = getshoessize;
var y = 2;
var z = getshoessize * 2;

var z = getshoessize * 2;
var a = 5;
var b = z + a ;


var b = z+a;
var c = 50 ;
var d = b * c ;

var d = b*c ;
var e = d - getbirthyear ;

var f = e + 1766 ;

