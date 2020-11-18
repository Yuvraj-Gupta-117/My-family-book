var image=[
"mom.jpg",
"father.jpg",
"sister.png",
"brother.jpg",
],
var name=[
  "Renu",
  "Puneet",
  "Tanishi",
  "I",
],
var i = 0;
function change() { 
 
   if(i > 4)
     {
       i=0;
     }
     document.getElementById("image").src=image[i];
  i++;
  document.getElementById("name").innerHTML=name[i];
    }