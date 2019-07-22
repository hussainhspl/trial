import React from 'react';
import {View, Text,  } from 'react-native';
import Header from '../HeaderCommon';
import MultiSlider from '@ptomasroos/react-native-multi-slider';



class RangeSliderInterval extends React.Component {
  state = {
    sliderOneChanging: false,
    sliderOneValue: [5],
    multiSliderValue: [3, 7],
    nonCollidingMultiSliderValue: [40, 80],
  };

  nonCollidingMultiSliderValuesChange = (values) => {
    this.setState({
      nonCollidingMultiSliderValue: values,
    });
  };
  checkActive =(i, first, second)=>{

    if(i >= first && i <= second) {
      return true 
    }
    else
      return false 
  }
  renderScale=(firstState, lastState)=> {
    const items = [];
    for (let i=0; i <= 100; i=i+20) {
      items.push(
        <View style={{height: 30, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={this.checkActive(i, firstState, lastState ) ? styles.active : styles.inactive}>{i}</Text>
          <Text style={this.checkActive(i, firstState, lastState) ? styles.line : {}}> { this.checkActive(i, firstState, lastState) ? '|' : ''}</Text>
        </View>
      );
    }
    return items;
  }
  render() {
    return(
      <View>
        <Header history={this.props.history} icon="arrow-back" title="Slider Interval" />
        <View style={styles.sliderView}>
          <View>
            <Text style={styles.text}>Two Markers with minimum overlap distance:</Text>
            <Text style={styles.text}>{this.state.nonCollidingMultiSliderValue[0]} </Text>
            <Text style={styles.text}>{this.state.nonCollidingMultiSliderValue[1]}</Text>
          </View>
          <View style={[styles.column,{marginLeft:15,marginRight:15}]}>
            {this.renderScale(
              this.state.nonCollidingMultiSliderValue[0], this.state.nonCollidingMultiSliderValue[1]
            )}
          </View>
          <MultiSlider
            min={0}
            max={100}
            step={20}
            values={[
              this.state.nonCollidingMultiSliderValue[0],
              this.state.nonCollidingMultiSliderValue[1],
            ]}
            selectedStyle={{
              backgroundColor: '#3c86f2',
            }}
            unselectedStyle={{
              backgroundColor: '#cfd8dc',
            }}
            onValuesChange={this.nonCollidingMultiSliderValuesChange}
            trackStyle={{
              height: 2,
              backgroundColor: '#f00',
            }}
            touchDimensions={{
              height: 40,
              width: 40,
              borderRadius: 20,
              slipDisplacement: 40,
            }}
            customMarker={() => <View style={styles.styleMarker} />}
            sliderLength={300}
          />
        </View>
      </View>
    )
  }
}
const styles = {
  sliderView: {
    alignItems: 'center'
  },
  styleMarker: {
    backgroundColor: '#fff',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#3c86f2',
    borderWidth: 1
  },
  column:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    bottom:-25,
    right: 0,
    width: 310,
  },
  active:{
    textAlign: 'center',
    fontSize:16,
    bottom:10,
    color:'#5e5e5e',
  },
  inactive:{
    flex:1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight:'normal',
    color:'#bdc3c7',
  },
  line:{
    fontSize:8,
    textAlign: 'center',
  },
}
export default RangeSliderInterval;