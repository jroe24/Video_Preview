document.getElementById("video").addEventListener("mouseover", function() {
	this.play();
});

document.getElementById("video").addEventListener("mouseleave", function() {
	this.pause();
});