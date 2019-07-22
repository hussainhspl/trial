import React, {Component, Fragment} from 'react';
import { View, Text, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
import ActionSheet from './ActionSheet';
import Header from '../HeaderCommon';
import Carousel from './Carousel';
import DatePicker from './DatePicker';
import FloatingAction from './FloatingAction';
import HorizontalScroll from './HorizontalScroll';
import LightBoxItem from './LightBoxItem';
import Notification from './Notification';
import RangeSlider from './RangeSlider';
import RangeSliderInterval from './RangeSliderInterval';
import Search from './Search';
import Sidebar from './Sidebar';
import Video from './Video';
import StackedCards from './StackedCards';
import { NativeRouter, Switch, Route } from 'react-router-native';


let dataCarousel =[
	{path: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWAH1SQQq_OFqudZeSKKSV4RBT9USpfIorcY5hiY5A84vu_yT"}},
	{path: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRKTFQzq16bPEP0mKhfBZtHnE5bNBQa6GdOWG9TWE7P5RmibGEw"}},
	{path: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJ4yMp4pP_BM9_zYnUARoUfJiw_q_9ZAepGGLGcXVDZWX1LQvJQ"}},
	{path: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMRIQD209C9pC1NOUYV9-J6hk6tdj2VAQnIe3NwSuXbOGKlqyPA"}},
]

const { height } = Dimensions.get('window');
 
class ComponentInteraction extends Component {
  state = {
    screenHeight: 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  render() {
    const scrollEnabled = this.state.screenHeight > height;
    const history= this.props.history;
    console.log("history", history);
    return (
      <View style={{ flex: 1,backgroundColor: '#fff'}}>
        <Header icon="menu" />
        <ScrollView
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/ActionSheet")}>
            <Text>Action sheet</Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/carousel")}>
            <Text> Carousel </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/DatePicker")}>
            <Text> Date Picker </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/FloatingAction")}>
            <Text> Floating Action </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/HorizontalScroll")}>
            <Text> Horizontal scroll </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/LightBoxItem")}>
            <Text> Lightbox Item </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/Notification")}>
            <Text> Notification </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/RangeSlider")}>
            <Text> Ranger Slider </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/RangeSliderInterval")}>
            <Text> Ranger Slider Interval </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/Search")}>
            <Text> Search </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/Sidebar")}>
            <Text> Sidebar </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/StackedCards")}>
            <Text> Stacked Cards </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/Video")}>
            <Text> Video </Text> 
          </TouchableHighlight>
        </ScrollView>
      </View>
      //   //  <Header icon="menu" title="Interaction" />

      //   {/* <ActionSheet
      //     modalName= "show action"
      //     viewStyle={ViewStyle}
      //     textStyle={TextStyle}
      //   >
      //     <View>
      //       <Text> heuhy</Text>
      //       <Text> heuhy</Text>
      //       <Text> heuhy</Text>

      //     </View>
      //   </ActionSheet> */}
      //   {/* <Carousel
      //     Entries={dataCarousel}
      //   /> */}
      //   {/* <DatePicker /> */}
      //   {/* <FloatingAction /> */}
      //   {/* <HorizontalScroll>
      //     <View style={{width: 150, alignItems: 'center'}}>
      //       <Text> Layout 1</Text>
      //     </View>
      //     <View style={{width: 150, alignItems: 'center'}}>
      //       <Text> Layout 1</Text>
      //     </View>
      //     <View style={{width: 150, alignItems: 'center'}}>
      //       <Text> Layout 2</Text>
      //     </View>
      //     <View style={{width: 150, alignItems: 'center'}}>
      //       <Text> Layout 3</Text>
      //     </View>
      //     <View style={{width: 150, alignItems: 'center'}}>
      //       <Text> Layout 4</Text>
      //     </View>
      //     <View style={{width: 150, alignItems: 'center'}}>
      //       <Text> Layout 5 </Text>
      //     </View>
      //   </HorizontalScroll> */}
      //   {/* <LightBoxItem 
      //     path= {{uri: 'https://thumbs.dreamstime.com/b/tiger-resting-lunch-zoo-38736862.jpg' }}
      //     Style= {{ height: 250}}
      //   /> */}
      //   {/* <Notification /> */}
      //   {/* <RangeSlider /> */}
      //   {/* <RangeSliderInterval /> */}
      //   {/* <Search /> */}
      //   {/* <Sidebar /> */}
      //   {/* <Video 
      //     src={{uri:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"}}
      //   /> */}
      //   {/* <StackedCards /> */}
      // {/* </View> */}
      // {/* </NativeRouter> */}

    )
  }
}

const ViewStyle = {
  backgroundColor: '#3c86f2',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5,
  margin: 15
}

const TextStyle= {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
  textTransform: 'capitalize',
}

const touchable= {
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderColor: '#ddd',
  paddingLeft: 15,
}

export default ComponentInteraction;
