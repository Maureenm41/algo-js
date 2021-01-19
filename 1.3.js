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