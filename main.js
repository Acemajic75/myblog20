var familymembers= ["Dad", "Mom", "Me"];

var images=["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/An_Easygoing_Cartoon_Businessman.svg/1200px-An_Easygoing_Cartoon_Businessman.svg.png", 
"https://th.bing.com/th/id/OIP.SjPfO4Iyh4vHn7wHn0t6JAHaMd?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.vEXy91n5Fu9-YOmuG6Zd2gHaLb?pid=ImgDet&rs=1"]


var i=0;

function next() {
    
 var number_of_mem_arry =3;
 if( i > number_of_mem_arry) {
     i=0;

    
 }
var nextimage=images[i];
var nextmem=familymembers[i]



document.getElementById("image").src = nextimage;
document.getElementById("nameofmem").innerHTML = nextmem;

i++
}

