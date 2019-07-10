import React, { Component, Fragment } from 'react';
import {View, Text, Image, FlatList } from 'react-native';
import Header from '../HeaderCommon';

class Tag extends Component {
  render() {
  
    const { imageView, profile, name, area, styleItem, skillView, infoText, itemName } = styles;

    return (
      <Fragment>
        <Header history={this.props.history} icon="arrow-back" />
      <View style={imageView}>
        <Image
          style={profile} 
          source={this.props.ProfileUrl}
        />
      </View>
      <Text style={name}>{this.props.name}</Text>
      <Text style={area}>{this.props.area}</Text>
      <View style={skillView}>
        <FlatList
          horizontal
          data={this.props.skills}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <View style={styleItem} key={item}><Text style={itemName}>{item}</Text></View>}
        />
      </View>
      <Text style={infoText}> {this.props.info} </Text>
      </Fragment>
    )
  }
}

const styles= {
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  profile : {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 10,
  },
  area: {
    fontSize: 18,
    paddingBottom: 30,
    textAlign: 'center',
  },
  styleItem: {
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#263238',
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    paddingBottom: 1,
    justifyContent: 'center'
  },
  itemName: {
    color: 'white',
    fontWeight: '500',
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  skillView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  infoText: {
    textAlign: 'center',
    paddingHorizontal: 15,
    lineHeight: 24
  }

}
export default Tag;