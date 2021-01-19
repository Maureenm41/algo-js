
var getName = prompt("What is your name ? ");


if (getName === null || !isNaN(getName)){
    while (getName !== null || isNaN(getName)){
        alert("Invalid name, please try again");
        getName = prompt("What is your name ? ");
        console.log(getName)
       if (getName !== null || !isNaN(getName)){
           document.write("Hello ", getName);
           break;
       }
    }
}else {
    document.write("Hello ", getName);
}

var getlastname = prompt("What is your last name ? ");


if (getlastname === null || !isNaN(getlastname)){
    while (getlastname !== null || isNaN(getlastname)){
        alert("Invalid name, please try again");
        getlastname = prompt("What is your last name ? ");
        console.log(getlastname)
       if (getlastname!== null || !isNaN(lastname)){
           document.write("Hello ", getName);
           break;
       }
    }
}else {
    document.write(lastname);
}


var getcity = prompt("Where do you live? ");


if (getcity === null || !isNaN(getcity)){
    while (getcity !== null || isNaN(getcity)){
        alert("Invalid city, please try again");
        getcity = prompt("where do you live? ");
        console.log(getcity)
       if (getcity!== null || !isNaN(getcity)){
           document.write( getcity);
           break;
       }
    }
}else {
    document.write("who lives in", getcity);
}