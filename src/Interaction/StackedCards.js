import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Header from '../HeaderCommon';
import CardStack, { Card } from 'react-native-card-stack-swiper';
// import console = require('console');
const cardArr = ['John', 'Marry', 'Lisa']
class StackedCards extends React.Component {
  render() {
    const {height, width} = Dimensions.get('window');
    const CardHeight = `height: ${height -100}`
    
    console.log("height: ", height, CardHeight)
    return(
      <View style={{flex: 1}}>
        <Header history={this.props.history} icon="arrow-back" title="Stacked Cards" />
        <CardStack style={styles.content} ref={swiper => { this.swiper = swiper }}>
          {
          cardArr.map(data => {
            let ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            
            return (
              <Card style={[styles.card, {backgroundColor:`${ColorCode}`}]}>
                <Text style={styles.label}>{data}</Text>
              </Card>
            )
          })
          }
        </CardStack>
        <View style={styles.buttonsView}>
          <TouchableOpacity style={styles.button} onPress={ () => { this.swiper.swipeLeft() }}>
            <Text style={styles.buttonLabel}>Dislike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ () => { this.swiper.swipeTop() }}>
            <Text style={styles.buttonLabel}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ () => { this.swiper.swipeRight() }}>
            <Text style={styles.buttonLabel}>Like</Text>
          </TouchableOpacity>
        </View> 

      </View>
    )
  }
}
const styles = {
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 15,
    // backgroundColor: '#f0f'
  },
  card: {
    height: Dimensions.get('window').height -180,
    width: Dimensions.get('window').width-30,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  card1: {
    backgroundColor: '#f00',
  },
  card2: {
    backgroundColor: '#0f0',
  },
  card3: {
    backgroundColor: '#00f',
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15
  },
  button: {
    padding: 15,
    backgroundColor: '#3c86f2',
    alignSelf: 'flex-start',
    borderRadius: 4
  },
  label: {
    fontSize: 21,
    color: "#fff",
    fontWeight: '700'
  }
}
export default StackedCards;