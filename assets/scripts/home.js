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
		let imgs = $('.img-wrapper');
		imgs.mouseenter(function() {
			let img = this.children[0];
			let hoverImg = this.children[1];
			const hoverSrc = img.getAttribute('data-hover');
			const imgHeight = img.getBoundingClientRect().height;
			if (hoverSrc.indexOf('assets') !== -1) {
				$(img).css('display', 'none')
				$(hoverImg).css('height', imgHeight);
				$(hoverImg).css('display', 'block')
			}

		})
		imgs.mouseleave(function() {
			let img = this.children[0];
			let hoverImg = this.children[1];
			const pineapple = img.getAttribute('data-pineapple');
			if (pineapple.indexOf('assets') !== -1) {
				// img.src = pineapple;
				$(hoverImg).css('display', 'none')
				$(img).css('display', 'block')
			}
		})	
	})
}(jQuery))