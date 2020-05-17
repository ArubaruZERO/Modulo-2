
// // hotel

// var nameHotel = "Barcelo"
// var locationHotel ="Barcelona"
// var imgHotel ="img/hotel.jpg"



// document.getElementById("hotel-name").innerHTML = "Hotel"+ " " + nameHotel;

// document.getElementById("hotel-location").innerHTML = "Ubicacion" + " " + locationHotel;

// document.getElementById("hotel-image").src = imgHotel;






//Usiario elige hotel
var hoteles={ 
Barcelo:{
    name:"barcelo",
    location:"cadiz",
    image: "img/hotel.jpg"
},
Riu:{
    name:"riu",
    location:"madrid",
    image: "img/hotel2.jpg"
}

}
var elegirHotel= prompt ("Hotel : Riu o Barcelo");


document.getElementById("hotel-name").innerHTML= hoteles[elegirHotel].name; 

document.getElementById("hotel-location").innerHTML= hoteles[elegirHotel].location;

document.getElementById("hotel-image").src = hoteles[elegirHotel].image;



//  Puntuacion

 var rating = prompt("Puntuacion: 1 al 5") ;

 document.getElementById("rating").innerHTML=rating;


//  anonimo

var anonimo = confirm("¿reseña anonima?")

document.getElementById("anonimus").checked = anonimo;