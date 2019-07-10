import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../HeaderCommon'
// import console = require('console');

const { height } = Dimensions.get('window');

class BlankSlate extends Component {
	state = {
    screenHeight: 0,
  };
  onContentSizeChange = (contentWidth, contentHeight) => {
		// Save the content height in state
		if(contentHeight > height) {
			this.setState({ screenHeight: contentHeight });
		}
		else {
			// this.setState({ screenHeight: height});
			contentHeight = height 
			console.log("correct", contentHeight, height);
		}
  };
	render() {
		const { slate, messageButton, MsgButtonText } = styles;
		const scrollEnabled = this.state.screenHeight > height;
		console.log("height", height);
		return (
			<View style={{flex: 1}}>
				{/* <View style={{height: 100}}> */}
				<Header history={this.props.history} icon="arrow-back" />
				<ScrollView
          scrollEnabled={scrollEnabled}
					onContentSizeChange={this.onContentSizeChange}
					contentContainerStyle={{ flexGrow: 1 }}
        >
					<View style={slate}>
						<Icon color= '#d3d3d3' name="ios-chatbubbles" size={160} />
						<Text style={{fontSize: 18, paddingVertical: 30, color: '#777'}}> No messages </Text>
						<TouchableOpacity
						style={messageButton}
						onPress={this.onPress}
						>
						<Text style={MsgButtonText}> Send new message </Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		)
	}
};
const styles= {
	slate : {
		backgroundColor: '#f6f6f6',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

	},
	messageButton: {
		borderWidth : 1,
		borderColor: '#3c86f2',
		borderRadius: 4,
		borderStyle: 'solid',
		paddingVertical: 15,
		paddingHorizontal: 20,	
		// backgroundColor: 'red'
	},
	MsgButtonText : {
		color: '#3c86f2',
		fontSize: 16
	}
}
export default BlankSlate;
