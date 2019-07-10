import React, { Component, Fragement } from 'react'
import { View, Image, Text } from 'react-native';
import StarRating from 'react-native-star-rating';
import FloatingContent from './FloatingContent';
import Header from '../HeaderCommon';


class CardBackground extends Component {
	render() {
		const { card, overlay, TextBlock, reviewBox, closeText, imageText } = styles;
		return (
			<View>
				<Header history={this.props.history} icon="arrow-back" />
			<View style={card}>
				<Image
					style={{height: 250,
						position: 'relative'
						// resizeMode: 'contain',
					}}
          source={{uri: 'https://cdn0.weddingwire.com/emp/fotos/4/2/2/1/0/0/alexa-and-ronnie-front-stairs-1_51_1224_v1.jpg'}}
        />
				<View style={overlay}>
					<View style={TextBlock}>
						<Text numberOfLines={1} style={imageText}>{this.props.title}</Text>
						<Text numberOfLines={1} style={imageText}>{this.props.info}</Text>
						{
							this.props.rating &&
							<View style={reviewBox}>
								<View style={{width: 130}}>
									<StarRating
										disabled={true}
										maxStars={5}
										rating={this.props.rating}
										starSize={20}
										fullStarColor= '#FFA000'
									/>
								</View>
								<Text style={imageText}> {this.props.votes? '('+(this.props.votes)+' Votes )' : 'hello'} </Text>
							</View>
						}
						<Text style={closeText}> Closed Now </Text>
					</View>
				</View>
			</View>
			{/* <FloatingContent>
				<Text> hello</Text>
			</FloatingContent> */}
			</View>
		)
	}
}
const styles = {

	cardTitle: {
		fontSize: 18,
		fontStyle: 'italic',
	},
	card: {
		height: 250,
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.8)',
		height: 250,

		position: 'absolute',
		top: 0, right: 0, left: 0, bottom: 0,
	},
	TextBlock: {
		//  backgroundColor: 'rgba(250, 0 , 0, 0.6)',
		top: 120,
		left: 15,
		right: 15,
		marginRight: 30,
		height: 100,
	},
	imageText: {
		color: 'white',
		fontSize: 18,
		paddingBottom: 5,
		
	},
	reviewBox: {
		flexDirection: 'row',
	},
	closeText: {
		color: '#EF5350',
		fontWeight: '600',
		fontSize: 18,
	}
}
export default CardBackground;
