import React, { Component } from 'react'

import ListStore from '../Mobx/listStore'
import AddPackingItem from './addPackingItem'
import {observer} from 'mobx-react/native'

@observer
export default class AddItems extends Component {
  render () {
    return (
      <AddPackingItem
        addItem={(item) => ListStore.addItem(item)}
        setNewItemText={ListStore.setNewItemName}
        value={ListStore.newItemName}
        clear={ListStore.clear}
      />
    )
  }
}
