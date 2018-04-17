import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import ListStore from '../Mobx/listStore'
import {observer} from 'mobx-react/native'

@observer
export default class ListItems extends Component {
  state = {
    t: ''
  }

  addItem = () => {
    ListStore.addItem(this.state.t)
  }

  render() {
    return (
        <View>
          <TextInput placeholder='Packing Item'
            autoFocus
            blurOnSubmit
            clearTextOnFocus
            onSubmitEditing={this.addItem}
            onChangeText={t => this.setState({t})}
            returnKeyLabel='Add Item'
            returnKeyType='done'
          />
          <TouchableOpacity
            style={[{backgroundColor: 'green'}, styles.button]}
            onPress={this.addItem}>
            <Text>ADD ITEM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{backgroundColor: 'red'}, styles.button]}
            onPress={() => ListStore.clear()}>
            <Text>CLEAR ITEMS</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 4,
    margin: 5,
    padding: 10
  }
})

