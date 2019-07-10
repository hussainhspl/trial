import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import Header from '../HeaderCommon';

const { height } = Dimensions.get('window');

class SectionGroup extends Component {
  state = {
    screenHeight: 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  render() {
    const { title, content, seperator } = styles;
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <View>
        <Header history={this.props.history} icon="arrow-back" />  
        <Text style={title}>{this.props.title}</Text>
        <View style={seperator} />
        <ScrollView
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <Text style={content}>{this.props.content}</Text>
        </ScrollView>
        {/* <Text> hello </Text> */}
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
    lineHeight: 21,
    
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
}
export default SectionGroup;
