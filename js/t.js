let a = document.getElementById("left");
let b = document.getElementById("right"); 
let c = document.getElementById("top");   
let d = 0;
let image = [
    "img/flip1.webp",
    "img/flip2.webp",
    "img/flip3.webp",
    "img/flip4.webp"
];
c.src = image[d];
setInterval( function() {
    d = (d + 1) % image.length;
    c.src = image[d];
},3000);

a.onclick = function repet() {
    d = (d - 1 + image.length) % image.length;
    c.src = image[d];
};

b.onclick = function() {
    d = (d + 1) % image.length;
    c.src = image[d];
};