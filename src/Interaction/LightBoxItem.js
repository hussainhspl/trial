import React from 'react';
import {View, Image } from 'react-native';
import Header from '../HeaderCommon';
import Lightbox from 'react-native-lightbox';
// import console = require('console');
// import PropTypes from 'prop-types';

class LightboxItem extends React.Component {
  
  render() {
    state = {
      Style: {height: 300}
    }
    console.log("props:", this.props);
    const {navigator} = this.props;
    return (
      <View style={{flex: 1}}>
        <Header history={this.props.history} icon="arrow-back" title="LightBox" />
          <Lightbox navigator={navigator}>
          <Image
            style={this.props.Style}
            source= {this.props.path}
          />
          </Lightbox>
      </View>
    )
  }
}

LightboxItem.defaultProps = {
  Style: {height: 300},
  path: {uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg'}
}
export default LightboxItem;
