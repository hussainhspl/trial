import React from 'react';
import {View, Text } from 'react-native';
import Header from '../HeaderCommon';
import Slider from 'react-native-slider';


class RangeSlider extends React.Component {
  state= {
    value: 0.2,
  }
  render() {
    return(
      <View>
        <Header history={this.props.history} icon="arrow-back" title="Notification" />
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState({value})}
          minimumTrackTintColor="#3c86f2"
          maximumValue={10}
          maximumTrackTintColor='#cfd8dc'
          thumbTintColor="#fff"
          step={1}
          trackStyle={{height: 2}}
          thumbStyle={{
            borderColor: '#3c86f2',
            borderWidth: 1
          }}
          style={{
            margin: 20
          }}
        />
        <Text style={{paddingLeft: 20, fontWeight: 'bold'}}>Value: {this.state.value}</Text>

      </View>
    )
  }
}

export default RangeSlider