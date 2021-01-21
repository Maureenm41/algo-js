var getnumber = prompt ("What is your favorite number");
if (getnumber ===42 || !isNaN(getnumber))
{
    while(getnumber !==42 || isNaN(getnumber))
    {
        getnumber = prompt("What is your favorite number?");
        alert("Are you sure ?");
        getnumber= prompt("What is your favorite number?");
        console.log(getnumber)
        if(getnumber !==42 || !isNaN (getnumber))
        {
            document.write("Congratulation!");
            break;
        }
    }
}
else {
    document.write("Congratulation!")
}