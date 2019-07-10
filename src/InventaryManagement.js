import React, {Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Text } from 'native-base';
import { PieChart, LineChart, YAxis, Grid } from 'react-native-svg-charts'

export default class HeaderIconExample extends Component {
  static navigationOptions = { headerStyle:{display: null}}
  render() {
		const { styleHeader, styleHeaderTitle, styleName, dot, WhiteBlock,
			countBlock, TotalStockCount, barGraphTitle } = styles;
		const data = [ 50 ]
		const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
		const newColor = randomColor()
		console.log("random color:", newColor);
		const pieData = data
			.filter(value => value > 0)
			.map((value, index) => ({
					value,
					svg: {
							fill: newColor,
							onPress: () => console.log('press', index),
					},
					key: `pie-${index}`,
			}))

			const dataLine = [ 150, 160, 150, 180 ];
			// const dataLine= [ {value: 90, label: '180'}]
			const dataY = [150, 160, 170, 180];
			const contentInset = { top: 20, bottom: 20 }
			// ÷const valueLine = [20, 40, 60, 80, 100, 120]

    return (
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
					<Text style={styleName}> Hussain Black's Stock </Text>
					<View style={WhiteBlock}>
						<View style={countBlock} >
							<Text style={TotalStockCount}> 2058 </Text>
							<Text style={{ textTransform: 'capitalize', fontSize: 21}}> on hand stock </Text>
						</View>
						<PieChart
							style={ { height: 150 } }
							data={ pieData }
						/>
						<View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 20}}>
							<View style={{ marginTop: 5, marginRight: 5, width: 10, height: 10, backgroundColor: `${newColor}`, borderRadius: 10
								}}
							/>
							<View>
								<Text> North </Text>
								<Text> 2508 </Text>
							</View>
						</View>
					</View>
					<Text style={barGraphTitle}> Last 7 days </Text>
					<View style={WhiteBlock}>
						<View style={{ height: 200, flexDirection: 'row' }}>
							<YAxis
								data={ dataY }
								contentInset={ contentInset }
								svg={{
										fill: 'grey',
										fontSize: 15,
								}}
								numberOfTicks={ 4 }
								showGrid= {false}
								formatLabel={ value => `${value}` }
							/>
							<LineChart
								style={{ flex: 1, marginLeft: 16 }}
								data={ dataLine }
								svg={{ stroke: 'rgb(134, 65, 244)' }}
								contentInset={ contentInset }
							>
								<Grid/>
							</LineChart>
            </View>
					</View>
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
	styleName: {
		fontSize: 26,
		paddingLeft: 20,
		paddingTop: 30,
		paddingBottom: 20
	},
	WhiteBlock: {
		backgroundColor: '#fff',
		borderRadius: 10,
		// borderTopLeftRadius: 10,
		marginLeft: 10,
		marginRight: 10,
		padding: 20,
		// paddingRight: 20
	},
	TotalStockCount : {
		fontSize: 36,
		fontWeight: '700',
		marginRight: 10
	},
	countBlock: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 30,
	},
	barGraphTitle: {
		fontSize: 21,
		fontWeight: "300",
		paddingTop: 20,
		paddingBottom: 30,
		paddingLeft: 20,
		color: '#4d4d4d',
	}
}
