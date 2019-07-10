import React, {Component} from 'react';
import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import Header from '../HeaderCommon';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

class HorizontalScroll extends Component {
  _renderItem = ({item}) => (
    <View>
      <Text>
        hellofdf
      </Text>
      <Text>
        hellofdf
      </Text>
      <Text>
        hellofdf
      </Text>
      <Text>
        hellofdf
      </Text>
      <Text>
        hellofdf
      </Text>
      <Text>
        hellofdf
      </Text>

      <Text>
        hellofdf
      </Text>
      {/* <Image
        style={{height: 250, width: 350, marginRight:15}} 
        source={item.path} /> */}
    </View>
  )
  render() {
    console.log("this.props.data",this.props.data);
    return(
      <View style={{flex: 1}}>
        <Header icon="arrow-back" title="Horizontal Scroll" />
        {/* <FlatList
          horizontal={true}
          data={this.props.data}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
          scrollEnabled
        /> */}
        {/* <View style={style.HorizontalView}> */}
        <ScrollView
          horizontal
          
        >
          {this.props.children}
        </ScrollView>
        {/* </View>÷ */}
      </View>
    )
  }
}
const style = {
  HorizontalView :{
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflowX: 'auto'
  }
} 
export default HorizontalScroll;