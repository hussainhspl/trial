import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Header from '../HeaderCommon';


class Card extends Component {
	render() {
		const { Card, cardTitle, cardInner,innerContentText } = styles;
		return (
			<View>
				<Header history={this.props.history} icon="arrow-back" />
			<View style={Card}>
				<Text style={cardTitle}>
					{this.props.title? this.props.title : ''}
				</Text>
				<View style={cardInner}>
					<Text style={{ lineHeight :25}}>
						{ this.props.children }
					</Text>
				</View>
				<Text style={innerContentText}> 
					{this.props.footerTitle ? this.props.footerTitle : ''}
				</Text>
			</View>
			</View>
		)
	}
}
const styles = {
	Card: {
		backgroundColor: '#f6f6f6',
		padding: 20,
	},
	cardTitle: {
		fontSize: 18,
		fontStyle: 'italic',
	},
	cardInner: {
		shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
		padding: 25,
		backgroundColor: 'white',
		marginVertical: 20,
	},
	innerContentText: {
		fontSize: 16,
		fontStyle: 'italic',
		paddingLeft: 15,
		lineHeight :25
	}
};
export default Card;
