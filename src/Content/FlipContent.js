import React, { Component } from 'react';
import { View, Text, Image, Dimensions} from 'react-native';
import FlipCard from 'react-native-flip-card';
// import CardFlip from 'react-natPive-card-flip';
import Header from '../HeaderCommon';

const { height } = Dimensions.get('window');
class FlipContent extends Component {
  
  render() {
    const { face, back, title, content, mainView} = styles;
    console.log("flip height: ", height);
    return (
      <View style={mainView}>
        <Header history={this.props.history} icon="arrow-back" />
        {/* <View > */}
          <FlipCard
          style={{  marginTop: 15}}
          // friction={6}
          // perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          clickable={true}
          onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}>

            <View style={face}>
              <Image 
                style={{  height: 500, borderRadius: 4}}
                resizeMode= "cover"
                source={this.props.frontImage}
              />
            
            </View>
          
            <View style={back}>
              <Image 
                style={{  width: '100%', height: 250}}
                
                source={this.props.backImage}
              />
              <View style={{height: 250}}>
                <Text style={title}> {this.props.title} </Text>
                <Text numberOfLines={8} style={content}> {this.props.description} </Text>
              </View>
            </View>
          </FlipCard>
        {/* </View> */}
      </View>
    )
  }
}
const styles = {
  face: {
    marginHorizontal: 15
  },
  back: {
    backgroundColor: '#fff',
    height: 500,
    marginHorizontal: 15
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 20
  },
  content: {
    lineHeight: 21,
    paddingHorizontal: 15
  },
  mainView: {
    height: 570,
    // backgroundColor: 'red',
  }
}

export default FlipContent;
