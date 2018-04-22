import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  LayoutAnimation
} from 'react-native'

import MultiColumnButton from './multiButtonColumn'
import SimpleList from './simpleList'

import ListStore from '../Mobx/listStore'
import {observer} from 'mobx-react/native'

@observer
export default class ListItems extends Component {

  render() {
    LayoutAnimation.spring()
    return (
        <View>
          <SimpleList value={[...ListStore.allItems]} />
        </View>
    )
    // return (
    //     <View>
    //       <MultiColumnButton
    //         value={
    //           ListStore.allItems.map(item => ({value: item, active: Math.round(Math.random() * 10) % 2 === 0}))
    //         }
    //       />
    //     </View>
    // )
  }
}
