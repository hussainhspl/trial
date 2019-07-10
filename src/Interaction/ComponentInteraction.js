import React, {Component} from 'react';
import { View, Text } from 'react-native';
import ActionSheet from './ActionSheet';
import Header from '../HeaderCommon';
import Carousel from './Carousel';
import DatePicker from './DatePicker';
import FloatingAction from './FloatingAction';
import HorizontalScroll from './HorizontalScroll';
import LightBoxItem from './LightBoxItem';
import Notification from './Notification';


let dataCarousel =[
	{path: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWAH1SQQq_OFqudZeSKKSV4RBT9USpfIorcY5hiY5A84vu_yT"}},
	{path: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRKTFQzq16bPEP0mKhfBZtHnE5bNBQa6GdOWG9TWE7P5RmibGEw"}},
	{path: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJ4yMp4pP_BM9_zYnUARoUfJiw_q_9ZAepGGLGcXVDZWX1LQvJQ"}},
	{path: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMRIQD209C9pC1NOUYV9-J6hk6tdj2VAQnIe3NwSuXbOGKlqyPA"}},
]
class ComponentInteraction extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <Header icon="menu" title="Interaction" /> */}

        {/* <ActionSheet
          modalName= "show action"
          viewStyle={ViewStyle}
          textStyle={TextStyle}
        >
          <View>
            <Text> heuhy</Text>
            <Text> heuhy</Text>
            <Text> heuhy</Text>

          </View>
        </ActionSheet> */}
        {/* <Carousel
          Entries={dataCarousel}
        /> */}
        {/* <DatePicker /> */}
        {/* <FloatingAction /> */}
        {/* <HorizontalScroll>
          <View style={{width: 150, alignItems: 'center'}}>
            <Text> Layout 1</Text>
          </View>
          <View style={{width: 150, alignItems: 'center'}}>
            <Text> Layout 1</Text>
          </View>
          <View style={{width: 150, alignItems: 'center'}}>
            <Text> Layout 2</Text>
          </View>
          <View style={{width: 150, alignItems: 'center'}}>
            <Text> Layout 3</Text>
          </View>
          <View style={{width: 150, alignItems: 'center'}}>
            <Text> Layout 4</Text>
          </View>
          <View style={{width: 150, alignItems: 'center'}}>
            <Text> Layout 5 </Text>
          </View>
        </HorizontalScroll> */}
        {/* <LightBoxItem 
          path= {{uri: 'https://thumbs.dreamstime.com/b/tiger-resting-lunch-zoo-38736862.jpg' }}
          Style= {{ height: 250}}
        /> */}
        <Notification />
      </View>
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

export default ComponentInteraction;
