import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../HeaderCommon';

class Section extends Component {
  render() {
    const { title, content, seperator } = styles;
    return (
      <View style={{flex: 1}}>
        <Header history={this.props.history} icon="arrow-back" />        
        <Text style={title}>{this.props.title}</Text>
        <View style={seperator} />
        <Text style={content}>{this.props.content}</Text>
      </View>
    )
  }
}
const styles = {
  
  title: {
    padding: 20,
    fontSize: 16,
    
    textTransform: 'capitalize',
  },
  content: {
    padding: 20,
    fontSize: 16,
    lineHeight: 21
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
}
export default Section;