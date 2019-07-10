import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../HeaderCommon';

class CardItem extends Component {
	render() {
		const { cardItemView, avatar, itemName, itemPost, nameView, avatarView, iconView } = styles;
		return (
			<View>
				<Header history={this.props.history} icon="arrow-back" />
			<View style={cardItemView}>
				<View style={avatarView}>
					<Image 
						style={avatar}
						// source={require('../../img/bar-chart.png')}
						source={this.props.profileUrl}
						/>
				</View>
				<View style={nameView}>
					<Text style={itemName}>{this.props.name}</Text>
					<Text style={itemPost}>{this.props.designation}</Text>
				</View>
				<View style={iconView}>
					<Icon color= '#3c86f2' name="ios-call" size={20} />
				</View>
			</View>
			</View>
		)
	}
}
const styles = {
	cardItemView: {
		backgroundColor: '#fff',
		shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,  
		elevation: 5,
		margin: 15,
		marginTop: 0,
		padding: 15,
		flexDirection: 'row',
		
	},
	avatarView: {
		flex: 2,
		justifyContent: 'center'
	},
	avatar: {
		height: 70, 
		width: 70,
		borderRadius: 40,
		marginRight: 15
	},
	itemName: {
		fontSize: 21,
		fontWeight: '400',
		textTransform: 'capitalize'
	},
	itemPost: {
		fontSize: 18,
		color: '#aaa',
		fontWeight: '400',
		textTransform: 'capitalize'
	},
	iconView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingRight: 10
	},
	nameView: {
		flex: 5,
		paddingLeft: 5,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingLeft: 10,
		// backgroundColor: 'red'
	}
}

export default CardItem;
