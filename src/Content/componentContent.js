import React, { Component } from 'react';
import { View, ScrollView, Dimensions, TouchableHighlight } from 'react-native';

import BlankSlate from './BlankSlate';
import Card from './Card';    
import CardAction from './CardAction';
import CardBackground from './CardBackground';
import CardItem from './CardItem';
import CardSectioned from './CardSectioned';
import ChatMessage from './ChatMessage';
import FlipContent from './FlipContent';
import FloatingContent from './FloatingContent';


import { Container, Text } from 'native-base';
import ListItemContent from './ListItemContent';
import Section from './Section'
import SectionExpandable from './SectionExpandable';
import SectionGroup from './SectionGroup';
import Tag from './Tag';
import Tooltip from './Tooltip';
import UserAvatar from './UserAvatar';

import Header from '../HeaderCommon';


// import console = require('console');

const { height } = Dimensions.get('window');

const list = [
  {
    title: 'Gather feedback',
    subtitle: 'Sample app mobile trial',
    url: {uri: 'https://www.outsystems.com/OSUImobilePreview/img/OSUImobilePreview.PhotoUser.jpg?6wjpMoFDrdCGL8UML+JQAw'},
    color: '#f00'
  },
  {
    title: 'Gather feedback',
    subtitle: 'Sample app mobile trial',
    color: '#0f0'
  },
  {
    title: 'Gather feedback',
    subtitle: '',
    color: '#ffa500'
  },
  
];

const section = [
  {
    title: 'First',
    content: 'Commodo adipisicing sit duis irure dolor voluptate esse eiusmod consequat nulla et eu esse id. Do velit ex officia irure. Voluptate sunt sunt qui do consectetur adipisicing mollit sint sunt officia consectetur incididunt dolor.'
  },
  {
    title: 'Second',
    content: 'Commodo adipisicing sit duis irure dolor voluptate esse eiusmod consequat nulla et eu esse id. Do velit ex officia irure. Voluptate sunt sunt qui do consectetur adipisicing mollit sint sunt officia consectetur incididunt dolor.'
  }
];

const skillsArray = [
  "UI", "React", "Javascript", "React Native"
]


class componentContent extends Component {
  state = {
    screenHeight: 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };

	render() {
    const {styleName, styleHeader, styleHeaderTitle, FloatingText, touchable} = styles;
    const scrollEnabled = this.state.screenHeight > height;
    const history= this.props.history;
    console.log("scroll enabled :", scrollEnabled);
		return (
      
			<View style={{ flex: 1,backgroundColor: '#fff'}}>
        <Header icon="menu" />
        <ScrollView
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/successAlert")}>
            <Text>Success Alert</Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/InfoAlert")}>
            <Text> Info Alert </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/ErrorAlert")}>
            <Text> Error Alert </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/WarningAlert")}>
            <Text> Warning Alert </Text> 
          </TouchableHighlight>
          
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/BlankSlate")}>
            <Text> Blank Slate </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/Card")}>
            <Text> Card </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/CardAction")}>
            <Text> Card Action </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/CardBackground")}>
            <Text> Card Background </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/CardItem")}>
            <Text> Card Item </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/CardSectioned")}>
            <Text> Card Sectioned </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/ChatMessage")}>
            <Text> Chat Message </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/FlipContent")}>
            <Text> Flip Content </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/FloatingContent")}>
            <Text> Floating Content </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/ListItemContent")}>
            <Text> List Item Content </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/Section")}>
            <Text> Section </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/SectionGroup")}>
            <Text> Section Group </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/Tag")}>
            <Text> Tag </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/Tooltip")}>
            <Text> Tooltip </Text> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(221, 221, 221, 0.4)' style={touchable} onPress={() => history.push("/UserAvatar")}>
            <Text> User Avatar </Text> 
          </TouchableHighlight>

          {/* <BlankSlate />
          <Card title="First elemnt of content (title)" footerTitle= "Inside element in Content">
            Velit cillum excepteur velit laborum ipsum id do aute ex aliquip irure. Deserunt minim et reprehenderit occaecat commodo sint nostrud eu. Tempor eu nisi fugiat in nostrud eu veniam ullamco nostrud minim tempor quis culpa. Nulla elit esse officia et id nulla.
          </Card>
          <CardAction title="Fruit">
            A Bunch of grapes
          </CardAction>
          
          <View style={{paddingVertical: 20}}>
            <CardBackground 
              title="Bank of Public Trust"
              info="South Carolina"
              rating= {3} 
              votes={180}
            /> 
            <CardItem 
              name="Hussain Badri"
              designation="front end developer"
            />
            <CardItem 
              name="Hussain Badri"
              designation="front end developer"
            />
             
          <CardSectioned 
            title="Hire our personal small price"
            content="Sint enim et aute aute nostrud aute minim veniam ea nostrud et aute cupidatat labore. Minim commodo reprehenderit commodo voluptate ea mollit cillum veniam veniam tempor. Sit et ex et labore proident excepteur excepteur esse esse irure exercitation aliquip minim. Incididunt ad dolor qui mollit velit qui."
          />
          <ChatMessage senderMessage="hey" receiverMessage="Hello Hussain!" />
          <FlipContent
            frontImage={{uri: 'https://www.outsystems.com/OSUImobilePreview/img/OSUImobilePreview.tulipback.png?_Ud28_KZAyHG+Iz6_VAI8g'}}
            backImage={{uri: 'https://www.outsystems.com/OSUImobilePreview/img/OSUImobilePreview.tulipback.png?_Ud28_KZAyHG+Iz6_VAI8g'}} 
            title="Tulip" 
            description="Commodo adipisicing sit duis irure dolor voluptate esse eiusmod consequat nulla et eu esse id. Do velit ex officia irure. Voluptate sunt sunt qui do consectetur adipisicing mollit sint sunt officia consectetur incididunt dolor." 
          />
          <FloatingContent>
            <View style={FloatingText}>
              <Text> Floating </Text>
            </View>
          </FloatingContent>
          <ListItemContent 
            dataArray={list}
          />
          <Section title="summary" 
          content="Commodo adipisicing sit duis irure dolor voluptate esse eiusmod consequat nulla et eu esse id. Do velit ex officia irure. Voluptate sunt sunt qui do consectetur adipisicing mollit sint sunt officia consectetur incididunt dolor." 
          />
          <SectionExpandable accordion={section}/>
          <SectionGroup 
          title="summary" 
          content="Commodo adipisicing sit duis irure dolor voluptate esse eiusmod consequat nulla et eu esse id. Do velit ex officia irure. Voluptate sunt sunt qui do consectetur adipisicing mollit sint sunt officia consectetur incididunt dolor. 

          Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui.
          
          Mollit elit pariatur fugiat do excepteur irure ex reprehenderit. Et adipisicing reprehenderit ut duis consectetur fugiat velit magna exercitation sit. Enim amet qui anim laborum enim anim occaecat officia. Sint Lorem consequat ipsum eu duis velit sunt irure id nostrud.
          
          Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui.
          
          Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui.
          
          Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui.
          
          Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui.
          
          Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui."
          />
          <Tag 
            ProfileUrl={{uri: "https://www.menshairstylestoday.com/wp-content/uploads/2016/10/Hairstyles-For-Square-Faces-Buzz-Cut.jpg"}}
            name="Hussain Badri"
            area="Pune, IN"
            skills={skillsArray}
            info="Hussain is a 27 years old React Developer with an impressive portfolio"
          /> */}
          
          {/* <Text> Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit </Text> */}
          {/* </View> */}
          {/* <View> */}
          {/* <Text style={{alignSelf: 'flex-start', backgroundColor: 'red'}}>
            Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui.
          </Text> */}
          {/* <Tooltip
            tip="this is tool tip "
            title="click here"
          /> 
          <UserAvatar 
            name="Hussain Badri"
            ProfileUrl={{uri: "https://www.menshairstylestoday.com/wp-content/uploads/2016/10/Hairstyles-For-Square-Faces-Buzz-Cut.jpg"}}
          /> */}
          {/* </Text> */}
          {/* </View> */}
        </ScrollView>
        
			</View>
    )
	}
}
const styles= {
  FloatingText: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  touchable: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingLeft: 15,

  }
}

export default componentContent;
