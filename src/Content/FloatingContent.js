import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../HeaderCommon';

class FloatingContent extends Component {
  render() {
    return (
      <View style={{flex: 1,}}>
				<Header history={this.props.history} icon="arrow-back" />
        <View style={{flex: 1, backgroundColor: '#44aaff'}}>
          <Text style={{color: '#0f0'}}> hello </Text>
          <Text style={{color: '#0f0'}}> hello </Text>
        <View style={styles.floating}>
          {this.props.children}
        </View>
        </View>
      </View>
    )
  }
}
const styles= {
  floating: {
    backgroundColor: 'white',
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    margin: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 'auto',
    zIndex: 9999,
  }
}
export default FloatingContent;
