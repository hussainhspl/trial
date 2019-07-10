import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../HeaderCommon';


 class CardSectioned extends Component {
	 render() {
		const { card, title, content, moreButton, buttonText } = styles;
		return (
			<View>
				<Header history={this.props.history} icon="arrow-back" />
				<View style={card}>
					<Text style={title}>
						{this.props.title}
					</Text>
					<Text style={content}>
						{this.props.content}
					</Text>
					<TouchableOpacity activeOpacity={0.6} style={moreButton} onPress={this._onPressButton}>
						<Text style={buttonText}> learn more </Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = {
	card: {
		shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
		padding: 20,
		marginHorizontal: 15,
		backgroundColor: 'white',
	},
	title: {
		fontWeight: '700',
		fontSize: 18,
		lineHeight: 28,
	},
	content: {
		paddingTop: 15,
		lineHeight: 21
	},
	moreButton: {
		borderColor: '#3c86f2',
		paddingVertical: 15,
		alignItems: 'center',
		borderWidth: 1,
		marginVertical: 15,
	},
	buttonText: {
		color: '#3c86f2',
		fontSize: 16,
		fontWeight: '600'
	}
}
export default CardSectioned;
