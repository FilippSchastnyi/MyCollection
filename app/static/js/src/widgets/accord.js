class Accord {
  constructor(nodeElement) {
    this.$container = nodeElement
    this.$optionItem = this.$container.querySelectorAll('.js-accord-option')

    this.whenOptionClick = this.whenOptionClick.bind(this)
    this.init()
  }

  whenOptionClick() {
    console.log('hello')
  }

  init() {
    this.$optionItem.forEach(item => {
      item.addEventListener('click', this.whenOptionClick)
    })
  }
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-accord').forEach(item => {
    new Accord(item)
  })
})
