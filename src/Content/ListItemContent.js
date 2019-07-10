import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../HeaderCommon';
// import console = require('console');

// const data =[{key: 'a'}, {key: 'b'}];

class ListItemContent extends Component {
  _onPressButton () {
    console.log("clicked ")
  }
  render() {
    const { ListRow, itemView, iconView, title, subtitle, image, statusView } = styles;
    const data= this.props.dataArray;
    return (
      <View>
        <Header history={this.props.history} icon="arrow-back" />
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' onPress={this._onPressButton}>
              <View style={ListRow}>
                <View style={itemView}>
                  <View style={statusView}>
                    {/* { item.url && 
                      <Image style={image} source={item.url} />
                    }
                    { this.props.icon &&
                      <Icon name={item.icon} size={70} />
                    } */}
                    <View style={{width: 15, height: 15, borderRadius: 10, backgroundColor:`${item.color}`}} />
                  </View>
                  <View>
                    <Text numberOfLines={1} style={title}>{item.title}</Text>
                    <Text numberOfLines={1} style={subtitle}>{item.subtitle ? item.subtitle: ''}</Text>
                  </View>
                </View>
                <View style={iconView}>
                  <Icon color= '#3c86f2' name="ios-arrow-forward" size={20} />
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    )
  }
}
const styles= {
  ListRow: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    // marginHorizontal: 15,
  },
  itemView: {
    flex: 1,
    flexDirection: 'row'
  },
  iconView: {
    width: 50,
    // backgroundColor: 'red',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
  },
  subtitle: {
    fontSize: 16,
    paddingTop: 5,
    color: '#7b7b7b',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 10,
  },
  statusView: {
    justifyContent:'center',
    alignItems: 'center',
    // backgroundColor: '#0f0',
    width: 50,
  }
}
export default ListItemContent;