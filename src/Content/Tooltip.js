import React, { Component } from 'react';
import {Text, View, TouchableHighlight } from 'react-native';
import Popover from 'react-native-popover-view';
import Header from '../HeaderCommon';
// import console = require('console');

class Tooltip extends Component {
  state = {
    isVisible: false
  }
 
  showPopover() {
    console.log("enter popover open",this.state.isVisible);
    this.setState({isVisible: true});
  }
 
  closePopover() {
    console.log("enter popover close",this.state.isVisible);
    this.setState({isVisible: false});
  }
  render() {
    const { highlight, TooltipBox, tip, tooltipArrow, arrow, tooltipBoxAlign, TextView, container } = styles;
    return (
      <View>
        <Header history={this.props.history} icon="arrow-back" />
        <View style={{padding: 15}} >
        <View style={container}>
          <TouchableHighlight 
            underlayColor= "#eee"
            ref={ref => this.touchable = ref} 
            style={styles.button} onPress={() => this.showPopover()}
          >
            <Text style={highlight}>Press me</Text>
          </TouchableHighlight>
            <Popover
              isVisible={this.state.isVisible}
              fromView={this.touchable}
              onRequestClose={() => this.closePopover()}
              popoverStyle={{
                padding:10,
                backgroundColor:'rgba(24, 24, 24, 0.8)',
              }}
              >
              <Text style={tip}> {this.props.tip} </Text>
            </Popover>
          {/* <View style={TextView}>
            <Text style={{ alignSelf: 'flex-start' ,backgroundColor: 'yellow', color: 'blue'}}>
            {this.props.children}
            </Text>
            <View style={tooltipBoxAlign}>
              <View style={TooltipBox}>
                <View style={tooltipArrow}>
                  <View style={arrow} />
                </View>
                <Text style={tip}>{this.props.tip}</Text>
              </View>
            </View> */}
        </View>
        </View>
      </View>
    )
  }
}
const styles = {
  container: {
    alignSelf: 'flex-start',

    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'rgb(43, 186, 180)',
  },
  tip: {
    color: 'white',
    lineHeight: 21,
    fontSize: 16,
  },
  highlight: {
    color: '#3c86f2',
    fontWeight: '500',
  },
  button: {
    // marginTop: 50,
    // borderRadius: 4,
    // padding: 10,
    // marginLeft: 10,
    // marginRight: 10,
    // backgroundColor: '#f00',
    // borderColor: '#333',
    // borderWidth: 1,
  },
  
  // tooltipBoxAlign: {
  //   position: 'absolute',
  //   top:-80, left: 0, right: 0, bottom:30,
  //   justifyContent: 'flex-end',
  //   Width: 200,
  //   Height: 200,
  //   backgroundColor: '#f00',
  //   zIndex:1,
  // },
  // TooltipBox: {
  //   backgroundColor: 'rgba(0, 0, 0, 0.7)',
  //   maxWidth: 150,
  //   padding: 10,
  //   alignSelf: 'center',
  //   justifySelf: 'flex-start',
  //   borderRadius: 5,
  //   height: 'auto',
  //   // zIndex: 1
  // },
  // 
  // tooltipArrow: {
  //   position: 'absolute',
  //   top: 0,
  //   bottom: -14, 
  //   left: 0,
  //   right: 0,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // },
  // arrow: {
  //   borderWidth: 7,
  //   borderColor: 'transparent',
  //   borderTopColor: 'rgba(0, 0, 0, 0.7)',
  // },
  // TextView: {
  //   position: 'relative',
  //   backgroundColor: '#f00',
  //   alignSelf: 'flex-start',
  // }
}
export default Tooltip;
