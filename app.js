// Write your JS in here

pics = [
	"imgs/kitty_bed.jpg",
	"imgs/kitty_basket.jpg", 
	"imgs/kitty_laptop.jpg",
	"imgs/kitty_door.jpg",
	"imgs/kitty_sink.jpg",
	"imgs/kitty_wall.jpg"
]

btn = document.querySelector("button");
IMG = document.querySelector("img");

btn.addEventListener("click", function(){
	img.src = "imgs/kitty_sink.jpg";
});