var sr = ScrollReveal({
	origin   : "bottom",
	distance : "64px",
	duration : 800,
	delay    : 0,
	scale    : 1
});

sr.reveal('.projects-list a');
sr.reveal('.posts-list a');


(function($) {
	$(function() {
		// let imgs = $('.img-wrapper');
		// imgs.mouseenter(function() {
		// 	let img = this.children[0];
		// 	const hoverSrc = img.getAttribute('data-hover');
		// 	const imgHeight = img.height;
		// 	console.log('img height', img.height)
		// 	if (hoverSrc.indexOf('assets') !== -1) {
		// 		img.src = hoverSrc;
		// 		img.height = imgHeight;
		// 	}

		// })
		// imgs.mouseleave(function() {
		// 	let img = this.children[0];
		// 	const pineapple = img.getAttribute('data-pineapple');
		// 	if (pineapple.indexOf('assets') !== -1) {
		// 		img.src = pineapple;
		// 	}
		// })	
	})
}(jQuery))