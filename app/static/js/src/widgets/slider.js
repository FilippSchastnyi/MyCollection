class Slider {
  constructor(nodeElement) {
    this.$container = nodeElement
    this.$slide = this.$container.querySelectorAll('.js-slide')
    this.$buttonSliderNext = this.$container.querySelector('.js-button-next')
    this.$buttonSliderPrev = this.$container.querySelector('.js-button-prev')
    this.$sliderTotal = this.$container.querySelector('.js-slide-total')
    this.$slideCurrent = this.$container.querySelector('.js-slide-current')
    this.$startSliderNumber = 0
    this.$slideCurrent.innerText = '0' + 1

    this.onButtonNextClick = this.onButtonNextClick.bind(this)
    this.onButtonPrevClick = this.onButtonPrevClick.bind(this)
    this.slideToShow = this.slideToShow.bind(this)

    this.init()
  }

  checkDisableButton() {
    if (this.$startSliderNumber === 0) {
      this.$buttonSliderPrev.classList.add('disabled')
    } else {
      this.$buttonSliderPrev.classList.remove('disabled')
    }

    if (this.$startSliderNumber === this.$slide.length - 1) {
      this.$buttonSliderNext.classList.add('disabled')
    } else {
      this.$buttonSliderNext.classList.remove('disabled')
    }
  }

  insertSlideTotal() {
    const total = this.$sliderTotal
    if (this.$slide.length < 10) {
      total.textContent = '/0' + this.$slide.length
    } else {
      total.textContent = '/' + this.$slide.length
    }
  }

  insertCurrentNumber(i) {
    i++;
    if (i < 10) {
      this.$slideCurrent.innerText = '0' + i
    } else {
      this.$slideCurrent.innerText = i
    }
  }

  onButtonNextClick() {
    if (this.$startSliderNumber < 3) {
      this.insertCurrentNumber(++this.$startSliderNumber)
      this.checkDisableButton()
      this.slideToShow(this.$startSliderNumber)
    }

  }

  onButtonPrevClick() {
    if (this.$startSliderNumber > 0) {
      this.insertCurrentNumber(--this.$startSliderNumber)
      this.slideToShow(this.$startSliderNumber)
    }
    this.checkDisableButton()
  }

  slideToShow(slideNumber) {
    for (let i = 0; i < this.$slide.length; i++) {
      this.$slide[i].classList.remove('active')
      if (i === slideNumber) {
        this.$slide[i].classList.add('active')
      }
    }
  }

  init() {
    this.checkDisableButton()
    this.insertSlideTotal()

    this.$buttonSliderNext.addEventListener('click', this.onButtonNextClick)
    this.$buttonSliderPrev.addEventListener('click', this.onButtonPrevClick)
  }
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-slider').forEach(item => {
    new Slider(item)
  })
})
