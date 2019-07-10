import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Text } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// const item = [
// 	{title: 'slide 1'},
// 	{title: 'slide 2'},
// 	{title: 'slide 3'},
// 	{title: 'slide 4'},
// ]


class AccountTransaction extends Component {
	state= {entries: [
		{title: 'slide 1'},
		{title: 'slide 2'},
		{title: 'slide 3'},
		{title: 'slide 4'},
	]}
	_renderItem ({item, index}) {
		const { slide } = styles;
		return (
				<View style={styles.slide}>
						<Text style={styles.title}>{ item.title }</Text>
				</View>
		);
	}

	get pagination () {
		const { entries, activeSlide=0 } = this.state;
		return (
				<Pagination
					dotsLength={entries.length}
					activeDotIndex={activeSlide}
					containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
					dotStyle={{
							width: 10,
							height: 10,
							borderRadius: 5,
							marginHorizontal: 8,
							backgroundColor: 'rgba(255, 255, 255, 0.92)'
					}}
					inactiveDotStyle={{
							// Define styles for inactive dots here
							backgroundColor: 'rgba(255, 0, 0, 1 )'
					}}
					inactiveDotOpacity={0.4}
					inactiveDotScale={0.6}
				/>
		);
}

	render() {
		const { styleHeader, styleHeaderTitle } = styles;
		const screenWidth = Math.round(Dimensions.get('window').width);
		return(
			<View style={{flex: 1,backgroundColor: '#f6f6f6'}}>
        <Header style={styleHeader}>
          <Left style={{flex:1}}>
            <Button transparent>
              <Icon style={{color: '#fff'}} name='menu' />
            </Button>
          </Left>
          <Body style={{flex:4}}>
            <Title style={styleHeaderTitle}> Inventory Management </Title>
          </Body>
          <Right style={{flex:1}}/>
        </Header>
				<View>
					<Text> carousel </Text>
					<Carousel
						ref={(c) => { this._carousel = c; }}
						data={this.state.entries}
						renderItem={this._renderItem}
						sliderWidth={screenWidth}
						itemWidth={screenWidth}
						onSnapToItem={(index) => this.setState({ activeSlide: index }) }
						
					/>
					{ this.pagination }
				</View>
				</View>
		);
	}
}
const styles= {
  styleHeader: {
      backgroundColor: '#3c86f2',
      // height: '40px',
      justifyContent: 'center',
      alignItems: 'center'
  },
  styleHeaderTitle: {
      color: '#fff',
      fontSize: 22
	},
	slide: {
		backgroundColor: '#fff',
		marginRight: '10%',
		marginLeft: '10%',
	},
	
}

export default AccountTransaction;