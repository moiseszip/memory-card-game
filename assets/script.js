const cards = document.querySelectorAll('.card')
let counter = 0
let firstSel = ''
let secondSel = ''
let flippedCards = 0
let correctCards = 0

function flipCard() {
	if (flippedCards <= 1) {
		this.classList.add('flipped')

		if (counter === 0) {
			secondSel = ''
			firstSel = this.getAttribute('vector')
			counter++
			flippedCards++
		} else {
			secondSel = this.getAttribute('vector')
			counter = 0
			flippedCards++
			checkCards()
		}
	}
}

function checkCards() {
	if (firstSel === secondSel) {
		const equalCards = document.querySelectorAll(
			".card[vector='" + firstSel + "']"
		)

		equalCards[0].classList.add('checked')
		equalCards[0].classList.remove('flipped')
		equalCards[1].classList.add('checked')
		equalCards[1].classList.remove('flipped')
		setTimeout(() => {
			flippedCards = 0
		}, 300)
	} else {
		incorrectCards = document.querySelectorAll('.flipped')

		incorrectCards[0].classList.add('wrong')
		incorrectCards[1].classList.add('wrong')

		setTimeout(() => {
			incorrectCards[0].classList.remove('wrong')
			incorrectCards[1].classList.remove('wrong')
			incorrectCards[0].classList.add('turn-back')
			incorrectCards[1].classList.add('turn-back')
		}, 800)
		setTimeout(() => {
			incorrectCards[0].classList.remove('flipped')
			incorrectCards[1].classList.remove('flipped')
			incorrectCards[0].classList.remove('turn-back')
			incorrectCards[1].classList.remove('turn-back')
			flippedCards = 0
		}, 1300)
	}
}

cards.forEach(card => {
	card.addEventListener('click', flipCard)
})
