import Expo from 'expo'
import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
// import firebase from 'firebase'
import reducers from './src/reducers'

import AuthScreen from './screens/AuthScreen'
import MapScreen from './screens/MapScreen'
import PostScreen from './screens/PostScreen'
import SettingsScreen from './screens/SettingsScreen'

class App extends Component {
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    const MainNavigator = TabNavigator({
      auth: { screen: AuthScreen },
      map: { screen: MapScreen },
      post: { screen: PostScreen },
      settings: { screen: SettingsScreen }
    })

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}

Expo.registerRootComponent(App)
