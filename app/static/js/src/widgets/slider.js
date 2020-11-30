class Slider {
  constructor(nodeElement) {
    this.$container = nodeElement
    this.$slide = this.$container.querySelectorAll('.js-slide')
    this.$buttonSliderNext = this.$container.querySelector('.js-button-next')
    this.$buttonSliderPrev = this.$container.querySelector('.js-button-prev')
    this.$sliderTotal = this.$container.querySelector('.js-slide-total')
    this.$slideCurrent = this.$container.querySelector('.js-slide-current')
    this.$startSliderNumber = 1

    this.onButtonNextClick = this.onButtonNextClick.bind(this)
    this.onButtonPrevClick = this.onButtonPrevClick.bind(this)

    this.init()
  }

  checkDisableButton() {
    if (this.$startSliderNumber === 1) {
      this.$buttonSliderPrev.classList.add('disabled')
    } else{
        this.$buttonSliderPrev.classList.remove('disabled')
      }

    if (this.$startSliderNumber === this.$slide.length) {
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
    if (i < 10) {
      this.$slideCurrent.innerText = '0' + i
    } else {
      this.$slideCurrent.innerText = i
    }
  }

  onButtonNextClick() {
    if (this.$startSliderNumber < this.$slide.length) {
      this.insertCurrentNumber(++this.$startSliderNumber)
      this.checkDisableButton()
    } else {
      return;
    }
  }

  onButtonPrevClick() {
    if (this.$startSliderNumber !== 1) {
      this.insertCurrentNumber(--this.$startSliderNumber)
      this.checkDisableButton()
    } else {
      return;
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
