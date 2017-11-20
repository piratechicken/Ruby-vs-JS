class ShoppingList {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }

  displayItems() {
    this.items.forEach((item, index) => {
      console.log(`${index+1}. ${item}`)
    })
  }

  removeItem(item) {
    this.items.forEach((item2, index) => {
      if (item2 === item) {
        this.items.splice(index, 1)
      }
    })
    this.displayItems()
  }

  sortItems() {
    this.items.sort()
    this.displayItems()
  }
}

let list = new ShoppingList
list.addItem('Milk')
list.addItem('Orange juice')
list.addItem('Cheese')
list.addItem('Peanuts')
list.addItem('Half a dozen onions')

list.displayItems()
list.removeItem('Milk')
list.sortItems()

// console.log(list.length)
// 1. Add a `removeItem(item)` method
// 2. Add a `sortItems()` method to sort alphabetically