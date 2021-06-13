var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if (strokes === 1 )
{
  console.log ("Hole-in-one!");
}
else if(strokes <= (par - 2))
{
  console.log( "Eagle");
}
else if(strokes === (par - 1))
{
  console.log( "Birdie");

}

else if(strokes === par)
{
  console.log( "Par");
}
else if(strokes === (par + 1))
{
   console.log("Bogey");
}

else if(strokes === (par + 2))
{
  console.log ("Double Bogey");
}

else if(strokes >= (par + 3))
{
  console.log("Go Home!");
}
  
 return  "Change Me";
  // Only change code above this line
}

golfScore(4, 1);
golfScore(4, 2);
golfScore(5, 2);
golfScore(4, 3);
golfScore(4, 4);
golfScore(1, 1);
golfScore(5, 5);
golfScore(4, 5);
golfScore(4, 6);
golfScore(4, 7);
golfScore(5, 9);
