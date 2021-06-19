const slides = document.querySelectorAll('.slide');
const body = document.querySelector('body')
// const btnL = document.querySelector('.btn-left')
const buttons = document.querySelectorAll('.btn')
let activeIndex = 1;

for (const slide of slides) {
	slide.addEventListener('click', (e) => {

		for (i = 0; i < slides.length; i++) {
			if (slides[i] == e.target) {
				let current = i + 1
				setSlide(current)
				activeIndex = current
				setButtons()
				return
			}
		}
	})
}

for (btn of buttons) {
	btn.addEventListener('click', (e) => {
		if (e.target.classList.contains('btn-left')) {
			toSlide('left')
		} else if (e.target.classList.contains('btn-right')) {
			toSlide('right')
		}
	})
}

document.addEventListener('keydown', event => {
	if (event.key === 'ArrowLeft') {
		toSlide('left')
	}

	else if (event.key === 'ArrowRight') {
		toSlide('right')
	}
})


function toSlide(e) {
	if (e === 'left' && activeIndex > 1) {
		activeIndex--
	}
	else if (e === 'right' && activeIndex < slides.length) {
		activeIndex++
	}
	setSlide(activeIndex)
	setButtons()
}


function setSlide(curSlide) {
	for (const slide of slides) {
		slides.forEach((slide) => {
			slide.classList.remove('active')
		})
	}
	slides[curSlide - 1].classList.add('active')

	const style = getComputedStyle(slides[curSlide - 1])
	body.style.backgroundImage = style['background-image']

}

function setButtons() {
	if (activeIndex == 1) {
		buttons[0].classList.remove('active')
		buttons[1].classList.add('active')
	} else if (activeIndex > 1 && activeIndex < slides.length) {
		buttons[0].classList.add('active')
		buttons[1].classList.add('active')
	} else if (activeIndex == slides.length) {
		buttons[0].classList.add('active')
		buttons[1].classList.remove('active')
	}
}