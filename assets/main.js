function closeLightbox() {
	let btn = '<button id="close" onclick="closeLightbox()">Close</button>'
	lightbox.style.display = "none"
	lightbox.innerHTML = btn
}