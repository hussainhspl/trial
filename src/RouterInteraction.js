import React, { Fragment } from 'react';
import {View, Text } from 'react-native';
import {Route } from 'react-router-native';
import ActionSheet from './Interaction/ActionSheet';
import ComponentInteraction from './Interaction/ComponentInteraction';
import Carousel from './Interaction/Carousel';
import DatePicker from './Interaction/DatePicker';
import FloatingAction from './Interaction/FloatingAction';
import HorizontalScroll from './Interaction/HorizontalScroll';
import LightBoxItem from './Interaction/LightBoxItem';
import Notification from './Interaction/Notification';
import RangeSlider from './Interaction/RangeSlider';
import RangeSliderInterval from './Interaction/RangeSliderInterval';
import Search from './Interaction/Search';
import Sidebar from './Interaction/Sidebar';
import StackedCards from './Interaction/StackedCards';
import Video from './Interaction/Video';



let dataCarousel =[
	{path: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWAH1SQQq_OFqudZeSKKSV4RBT9USpfIorcY5hiY5A84vu_yT"}},
	{path: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRKTFQzq16bPEP0mKhfBZtHnE5bNBQa6GdOWG9TWE7P5RmibGEw"}},
	{path: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJ4yMp4pP_BM9_zYnUARoUfJiw_q_9ZAepGGLGcXVDZWX1LQvJQ"}},
	{path: {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMRIQD209C9pC1NOUYV9-J6hk6tdj2VAQnIe3NwSuXbOGKlqyPA"}},
]
class RouterInteraction extends React.Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={ComponentInteraction}></Route>    
        <Route exact path="/ActionSheet"
          render={(props) => <ActionSheet {...props}
            modalName= "show action"
            viewStyle={ViewStyle}
            textStyle={TextStyle}
            >
            <View>
              <Text> Hello </Text>
              <Text> Hello </Text>
              <Text> Hello </Text>
            </View>
          </ActionSheet>}>
        </Route>
        <Route exact path="/Carousel" 
          render={(props) => <Carousel {...props}
          Entries={dataCarousel}
        /> }/>
        <Route exact path="/DatePicker"
          component={DatePicker} />
        <Route exact path="/FloatingAction"
          component={FloatingAction} />
        <Route exact path="/HorizontalScroll"
          render={(props) => <HorizontalScroll {...props}>
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
          </HorizontalScroll>}/>
        <Route exact path="/LightBoxItem"
          render={(props) => <LightBoxItem {...props}
          path= {{uri: 'https://thumbs.dreamstime.com/b/tiger-resting-lunch-zoo-38736862.jpg' }}
            Style= {{ height: 250}}
          />} />
        <Route exact path="/Notification"
          component={Notification} />
        <Route exact path="/RangeSlider"
          component={RangeSlider} />
        <Route exact path="/RangeSliderInterval"
          component={RangeSliderInterval} />
        <Route exact path="/Search"
          component={Search} />
        <Route exact path="/Sidebar"
          component={Sidebar} />
        <Route exact path="/StackedCards"
          component={StackedCards} />
        <Route exact path="/Video" 
          render={() => <Video 
              src={{uri:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"}}
            />} />
      </Fragment>
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

export default RouterInteraction; 