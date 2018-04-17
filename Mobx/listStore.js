import {observable} from 'mobx'

let index = 0

class ObservableListStore {
  @observable allItems = ['nacho', 'burrito', 'hotdog']

  addItem (item) {
    this.allItems.push(item)
  }

  clear () {
    this.allItems = []
  }

}


const observableListStore = new ObservableListStore()
export default observableListStore
