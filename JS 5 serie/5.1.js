function askTvSerie(name , dateOf , cast)
{
  var serieName = prompt ("What's your favorite serie");
  var prodYear = prompt ("What's the year of production?");
  var castMemberName = prompt ("What are the cast members names?");

   alert(serieName);
   alert(prodYear);
   alert(castMemberName);

}

askTvSerie();

var serie = { serieName , prodYear , castMemberName};
console.log(serie);


/*doesn't work like I want it to work but it kinda work*/