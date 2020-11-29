class Accord {
  constructor(nodeElement) {
    this.$container = nodeElement
    this.$optionItem = this.$container.querySelectorAll('.js-accord-option')

    this.optionClick = this.optionClick.bind(this)
    this.init()
  }

  optionClick(e) {
    const optionElement = e.target.closest('.js-accord-option')
    if (!optionElement) return
    else {
      optionElement.classList.toggle('open')
    }
  }

  init() {
    this.$optionItem.forEach(item => {
      item.addEventListener('click', this.optionClick)
    })
  }
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-accord').forEach(item => {
    new Accord(item)
  })
})
