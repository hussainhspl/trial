import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../HeaderCommon';

class UserAvatar extends Component {
  render() {
    const { avatarBg, name, noAvatar, noAvatarText } = styles;
    return (
      <View>
        <Header history={this.props.history} icon="arrow-back" />
        <View style={{paddingTop: 15}} />
        <View style={{flexDirection: 'row', justifyContent:"space-between", paddingHorizontal: 10}}>
          <View style={avatarBg}>
            <Image style={{width:60, height:60, borderRadius:30 }} source={this.props.ProfileUrl} />
            <Text style={name}> {this.props.name}</Text>
          </View>
          <View style={avatarBg}>
            <View style={noAvatar}>
              <Text style={noAvatarText}> hb</Text>
            </View>
            <Text style={name}>{this.props.name}</Text>
          </View>
        </View>
      </View>
    )
  }
}
const styles = {
  avatarBg: {
    width: "49%",
    backgroundColor: 'white',
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 4
  },
  name: {
    fontStyle: 'italic',
    paddingTop: 10
  },
  noAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3c86f2',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  noAvatarText: {
    color: 'white',
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: 24
  }
}

export default UserAvatar;
