let photos = [{
	link: "./src/img/project_1.jpg",
	title: "Small coffee hall"
}, {
	link: "./src/img/project_2.jpg",
	title: "Kitchen"
}, {
	link: "./src/img/project_3.jpg",
	title: "Living room"
}, {
	link: "./src/img/project_4.jpg",
	title: "Childroom"
}, {
	link: "./src/img/project_5.jpg",
	title: "Bedroom"
}, {
	link: "./src/img/project_6.jpg",
	title: "Bathroom"
}];

function initSlider() {
	if(!photos || !photos.length) return;

	let sliderPhotos = document.querySelector('.project_photos-slider');
	let sliderArrows = document.querySelector('.project_slider-arrows');
	let sliderDots = document.querySelector('.project_slider-dots');

	initPhotos();
	initArrows();
	initDots();

	function initPhotos() {
		photos.forEach((photo, index) => {
			let photoDiv = `<img class='project__image n${index} ${index === 0 ? 'active' : ''}' src='${photos[index].link}' alt='Admiral, ${photos[index].title}' data-index='${index}'></img>`;
			sliderPhotos.innerHTML += photoDiv;
		});
	}

	function initArrows() {
		sliderArrows.querySelectorAll('.project_slider-arrow').forEach(arrow => {
			arrow.addEventListener('click', () => {
				let currentPhoto = +sliderPhotos.querySelector('.active').dataset.index;
				let nextPhoto;
				if(arrow.classList.contains('left')) {
					nextPhoto = (currentPhoto === 0) ? photos.length - 1 : currentPhoto - 1;
				} else {
					nextPhoto = (currentPhoto === photos.length - 1) ? 0 : currentPhoto + 1;
				}
				movePhotos(nextPhoto);
			})
		});
	}

	function initDots() {
		photos.forEach((photo, index) => {
			let dot = `<div class='slider__dots-item n${index} ${index === 0 ? 'active' : ''}' data-index='${index}'></div>`;
			sliderDots.innerHTML += dot;
		});
		sliderDots.querySelectorAll('.slider__dots-item').forEach(dot => {
			dot.addEventListener('click', function() {
				movePhotos(this.dataset.index);
			});
		}); 
	}

	function movePhotos(num) {
		sliderPhotos.querySelector('.active').classList.remove('active');
		sliderPhotos.querySelector('.n' + num).classList.add('active');
		sliderDots.querySelector('.active').classList.remove('active');
		sliderDots.querySelector('.n' + num).classList.add('active');
	}

}

document.addEventListener('DOMContentLoaded', initSlider);
