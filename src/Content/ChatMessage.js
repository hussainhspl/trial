import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import Header from '../HeaderCommon';

const { height } = Dimensions.get('window');

class ChatMessage extends Component {
  state = {
    screenHeight: 0,
  };
  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  render() {
    const { sender, noAvatar, noAvatarText, senderMessage, senderArrow, receiver, avatarImage, receiverArrow, receiverMessage, messageText } = styles;
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <View>
				<Header history={this.props.history} icon="arrow-back" />
        <ScrollView
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View style={{paddingTop: 15}} />
          <View style={sender}>
            <View style={noAvatar}>
              <Text style={noAvatarText}> JD </Text>
            </View>
            <View style={senderMessage}>
              <View style={senderArrow} />
              <Text style={messageText}> {this.props.senderMessage} </Text>
            </View>
          </View>
          <View style={receiver}>
            <View style={receiverMessage}>
              <View style={receiverArrow} />
              <Text style={messageText}> {this.props.receiverMessage} </Text>
            </View>
            <View style={noAvatar}>
              <Image 
                style={avatarImage}
                // source={require('../../img/bar-chart.png')}
                source={{uri: 'https://www.outsystems.com/OSUImobilePreview/img/OSUImobilePreview.PhotoUser.jpg?6wjpMoFDrdCGL8UML+JQAw'}}
                />
            </View>
          </View>
          <View style={sender}>
            <View style={noAvatar}>
              <Text style={noAvatarText}> JD </Text>
            </View>
            <View style={senderMessage}>
              <View style={senderArrow} />
              <Text style={messageText}> ... </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  sender : {
    alignItems: 'center',
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  noAvatar : {
    height: 40,
    width: 40, 
    borderRadius: 20,
    backgroundColor: '#b0bec5',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
    
  },
  avatarImage: {
    height: 40,
    width: 40,
  },
  noAvatarText: {
    color: '#fff',
    fontSize: 21,
  },
  senderMessage: {
    backgroundColor: '#eceff1',
    borderRadius: 10,
    padding: 10,
    maxWidth: '70%',
    position: 'relative',
    marginLeft: 15
  },
  senderArrow: {
    position: 'absolute',
    borderWidth: 7,
    borderColor: 'transparent',
    borderRightColor: '#eceff1',
    top: 10,
    left: -13,
  },
  receiverArrow: {
    position: 'absolute',
    borderWidth: 7,
    borderColor: 'transparent',
    borderLeftColor: '#dbecf5',
    top: 10,
    right: -13,
  },
  receiver: {
    alignItems: 'center',
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
  },
  receiverMessage: {
    backgroundColor: '#dbecf5',
    borderRadius: 10,
    padding: 10,
    maxWidth: '70%',
    position: 'relative',
    marginRight: 15
  },
  messageText: {
    fontSize: 18,
    lineHeight: 21,
  },
}

export default ChatMessage;