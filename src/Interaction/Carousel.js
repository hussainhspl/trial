import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import Header from '../HeaderCommon';
import CarouselSnap, { Pagination } from 'react-native-snap-carousel';
// import console = require('console');

class Carousel extends React.Component {
  state= {entries: this.props.Entries}
  _renderItem ({item, index}) {
    return (
      <View style={styles.slide}>
          {/* <Text style={styles.title}>{ item.title }</Text> */}
          <Image 
          style={{ width: '100%', height: 200 }}
          source={item.path} />
      </View>
    );
  }
  get pagination () {
    const { entries, activeSlide=0, slider1Ref } = this.state;
    // console.log("slider1 ref:", slider1Ref);
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        tappableDots= {slider1Ref? true : false}
        carouselRef={slider1Ref}
        // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    console.log("this.props.Entries ", this.props.Entries)
    return (
      <View>
        <Header icon="arrow-back" title="Carousel" />
        <CarouselSnap
          // ref={(c) => { this._carousel = c; }}
          ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
        />
          { this.pagination }
      </View>
    )
  }
}

const styles = {
  slide: {
		backgroundColor: '#fff',
		// marginRight: '10%',
		// marginLeft: '10%',
	},
}
export default Carousel;