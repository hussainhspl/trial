import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../HeaderCommon';


 class WarningAlert extends Component {
	 render() {
		const { Box, TextBox } = styles;
		return (
			<View>
				<Header history={this.props.history} icon="arrow-back" />
				<View style={Box}>
					<Icon color= 'white' name="ios-warning" size={20} />
					<Text numberOfLines={1} style={TextBox}> {this.props.name ? this.props.name : 'This is an warning Alert'} </Text>	
				</View>
			</View>
		)
	}
}
const styles = {
	Box: {
		padding: 15,
		flexDirection: 'row',
		backgroundColor: '#ffc107',
		margin: 20,
		alignItems: 'center',
		borderRadius: 4
	},
	TextBox: {
		color: 'white',
		fontSize: 18,
		paddingLeft: 10,
		fontWeight: '700',
	}
}
export default WarningAlert;
