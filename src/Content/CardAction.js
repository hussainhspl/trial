import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Alert, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../HeaderCommon';



class CardAction extends Component {
	state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
	render() {
		const { card, ActionText, ActionItems, moreButton, closeBox, image} = styles;
		return  (
			<View>
				<Header history={this.props.history} icon="arrow-back" />
				<View style={card}>
					<Image
						style={image}
						source={{uri: 'https://images.all-free-download.com/images/graphicthumb/fruits_sweet_fruit_213988.jpg'}}
					/>
					<View style={ActionItems}>
						<Text style={ActionText}> {this.props.title} </Text>
						<TouchableOpacity 
							activeOpacity={0.9}
							style={moreButton}
							onPress={() => {
								this.setModalVisible(true);
							}} 
						>
							<Icon name={"ios-add"}  size={60} color="#fff" />
						</TouchableOpacity>
						<Modal
							animationType="fade"
							transparent={false}
							visible={this.state.modalVisible}
							onRequestClose={() => {
								Alert.alert('Modal has been closed.');
							}}>
							<View style={{marginTop: 50, padding: 20}}>
								<View>
									<View style={closeBox}>
											<TouchableHighlight
												onPress={() => {
													this.setModalVisible(!this.state.modalVisible);
												}}>
													<Text style={{ fontWeight: '600', fontSize: 21}}>x</Text>
											</TouchableHighlight>
										</View>
									<Text>
										{ this.props.children }
									</Text>
								</View>
							</View>
						</Modal>
					</View>
				</View>
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
		shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
		backgroundColor: 'white',
		margin: 15,
		padding: 15,
	},
	image: {
		height: 180,
		backgroundColor: '#ddd'
	},
	ActionText: {
		fontSize: 21,
		paddingTop: 15,
		color: '#4d4d4d',
	},
	ActionItems: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		height: 50,
	},
	moreButton: {
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.2)',
		alignItems:'center',
		justifyContent:'center',
		width:70,
		height:70,
		backgroundColor:'#3c86f2',
		borderRadius:50,
		position: 'relative',
		top : -20,
		marginRight: 10,
		shadowColor: '#aaa',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.8,
		shadowRadius: 2,  
		elevation: 5,
	},
	closeBox: {
		alignItems: 'flex-end',
		marginLeft: 'auto',
		padding: 10,

	}
};

export default CardAction;
