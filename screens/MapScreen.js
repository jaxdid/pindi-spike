import React, { Component } from 'react'
import { Platform, Text, View } from 'react-native'
import { Constants, Location, Permissions, MapView } from 'expo'

class MapScreen extends Component {
  state = {
    region: null,
    errorMessage: null,
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      })
    } else {
      this._watchLocationAsync()
    }
  }

  _watchLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      })
    }

    await Location.watchPositionAsync({
      enableHighAccuracy: true,
      timeInterval: 0,
      distanceInterval: 0.25
    }, ({ coords }) => {
      this.setState({
        region: {
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }
      })
    })
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          region={this.state.region}
          // onRegionChange={this.onRegionChangeComplete}
          style={{ flex: 1 }}
        />
      </View>
    )
  }
}

export default MapScreen
