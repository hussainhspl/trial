/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, Fragment} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';


import AccountOverview from './src/AccountOverview';
import InventaryManagement from './src/InventaryManagement';
import AccountTransaction from './src/AccountTransaction';

import { NativeRouter, Switch, Route } from 'react-router-native';

import InfoAlert from './src/Content/InfoAlert';
import SuccessAlert from './src/Content/SuccessAlert'
import ErrorAlert from './src/Content/ErrorAlert';
import WarningAlert from './src/Content/WarningAlert';
import BlankSlate from './src/Content/BlankSlate';
import Card from './src/Content/Card';
import CardAction from './src/Content/CardAction';
import CardBackground from './src/Content/CardBackground';
import CardItem from './src/Content/CardItem';
import ComponentContent from './src/Content/componentContent';
import CardSectioned from './src/Content/CardSectioned';
import ChatMessage from './src/Content/ChatMessage';
import FlipContent from './src/Content/FlipContent';
import FloatingContent from './src/Content/FloatingContent';
import ListItemContent from './src/Content/ListItemContent';
import Section from './src/Content/Section';
import SectionGroup from './src/Content/SectionGroup';
import Tag from './src/Content/Tag';
import Tooltip from './src/Content/Tooltip';
import UserAvatar from './src/Content/UserAvatar';
import ComponentInteraction from './src/Interaction/ComponentInteraction';


import RouterInteraction from './src/RouterInteraction';


// import InfoAlert from './src/Content/i'

// import ChatMessage from './src/Content/chatMessage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const skillsArray = [
  "UI", "React", "Javascript", "React Native",
]

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <NativeRouter>
      <Fragment>
        <StatusBar barStyle="light-content" 
          backgroundColor="3c86f2"
        /> 
        {/* <View style={{flex: 1, backgroundColor: '#fff'}}> */}
          {/* <AccountOverview />  */}
          {/* <InventaryManagement /> */}
          {/* <AccountTransaction /> */}
          {/* <ComponentInteraction /> */}
          <Switch>
            {/* <Route exact path="/" component={ComponentContent}></Route> */}
            <Route exact path="/infoAlert" component={InfoAlert}></Route>
            <Route exact path="/successAlert" component={SuccessAlert}></Route>
            <Route exact path="/ErrorAlert" component={ErrorAlert}></Route>
            <Route exact path="/WarningAlert" component={WarningAlert}></Route>
            <Route exact path="/BlankSlate" component={BlankSlate}></Route>
            <Route exact path="/Card" 
              render={(props) => <Card 
                {...props}
                title="First elemnt of content (title)" 
                footerTitle= "Inside element in Content"
              > Velit cillum excepteur velit laborum ipsum id do aute ex aliquip irure. Deserunt minim et reprehenderit occaecat commodo sint nostrud eu. Tempor eu nisi fugiat in nostrud eu veniam ullamco nostrud minim tempor quis culpa. Nulla elit esse officia et id nulla. </Card>}
            ></Route>
            <Route exact path="/CardAction"
              render={(props) => <CardAction {...props} title="Fruit">
              A Bunch of grapes
              </CardAction>}>
            </Route>
            <Route exact path="/CardBackground"
              render={(props) => <CardBackground {...props}
              title="Bank of Public Trust"
              info="South Carolina"
              rating= {3} 
              votes={180} />}></Route>
            <Route exact path="/CardItem"
              render={(props) => <CardItem {...props}
              name="Hussain Badri"
              designation="front end developer"
              profileUrl={{uri: "https://www.menshairstylestoday.com/wp-content/uploads/2016/10/Hairstyles-For-Square-Faces-Buzz-Cut.jpg"}} />}></Route>
            <Route exact path="/CardSectioned"
              render={(props) => <CardSectioned {...props}
              title="Hire our personal small price"
              content="Sint enim et aute aute nostrud aute minim veniam ea nostrud et aute cupidatat labore. Minim commodo reprehenderit commodo voluptate ea mollit cillum veniam veniam tempor. Sit et ex et labore proident excepteur excepteur esse esse irure exercitation aliquip minim. Incididunt ad dolor qui mollit velit qui."
              />}></Route>
            <Route exact path="/ChatMessage"
              render={(props) => <ChatMessage {...props}
              senderMessage="hey" 
              receiverMessage="Hello Hussain!" />
            }></Route>
            <Route exact path="/FlipContent"
              render={(props) => <FlipContent {...props}
              frontImage={{uri: 'https://www.outsystems.com/OSUImobilePreview/img/OSUImobilePreview.tulipback.png?_Ud28_KZAyHG+Iz6_VAI8g'}}
              backImage={{uri: 'https://www.outsystems.com/OSUImobilePreview/img/OSUImobilePreview.tulipback.png?_Ud28_KZAyHG+Iz6_VAI8g'}} 
              title="Tulip" 
              description="Commodo adipisicing sit duis irure dolor voluptate esse eiusmod consequat nulla et eu esse id. Do velit ex officia irure. Voluptate sunt sunt qui do consectetur adipisicing mollit sint sunt officia consectetur incididunt dolor."/>}>
            </Route>
            <Route exact path="/FloatingContent"
              render={(props) => <FloatingContent {...props} >
                <View style={styles.FloatingText}>
                  <Text> Floating </Text>
                </View>
              </FloatingContent>}
            ></Route>
            <Route exact path="/ListItemContent"
              render={(props) => <ListItemContent {...props}
                dataArray={list}
                />}></Route>
            <Route exact path="/Section"
              render={(props) => <Section {...props} title="summary" 
              content="Commodo adipisicing sit duis irure dolor voluptate esse eiusmod consequat nulla et eu esse id. Do velit ex officia irure. Voluptate sunt sunt qui do consectetur adipisicing mollit sint sunt officia consectetur incididunt dolor." 
              />}></Route>
            <Route exact path="/SectionGroup"
              render={(props) => <SectionGroup {...props}
              title="summary" 
              content="Commodo adipisicing sit duis irure dolor voluptate esse eiusmod consequat nulla et eu esse id. Do velit ex officia irure. Voluptate sunt sunt qui do consectetur adipisicing mollit sint sunt officia consectetur incididunt dolor. 
              
              Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui.
              
              Mollit elit pariatur fugiat do excepteur irure ex reprehenderit. Et adipisicing reprehenderit ut duis consectetur fugiat velit magna exercitation sit. Enim amet qui anim laborum enim anim occaecat officia. Sint Lorem consequat ipsum eu duis velit sunt irure id nostrud.
              
              Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui.
              
              Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui.
              
              Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui.
                
              Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui.
                
              Laborum minim nostrud excepteur velit tempor qui incididunt elit excepteur ea do irure irure. Nisi cupidatat consectetur non deserunt sit reprehenderit tempor deserunt fugiat est adipisicing irure tempor. Minim eu adipisicing sint consectetur adipisicing excepteur est exercitation in duis nostrud voluptate dolor. Ad id exercitation qui qui."
                />}></Route>
            <Route exact path="/tag" 
                render={(props) => <Tag {...props}
                ProfileUrl={{uri: "https://www.menshairstylestoday.com/wp-content/uploads/2016/10/Hairstyles-For-Square-Faces-Buzz-Cut.jpg"}}
                  name="Hussain Badri"
                  area="Pune, IN"
                  skills={skillsArray}
                  info="Hussain is a 27 years old React Developer with an impressive portfolio"
                  />}
              ></Route>
            <Route exact path="/Tooltip"
              render={(props) => <Tooltip {...props}
              tip="this is tool tip "
              title="click here"
              /> }>
            </Route>
            <Route exact path="/UserAvatar"
                  render={(props) => <UserAvatar {...props}
                  name="Hussain Badri"
                  ProfileUrl={{uri: "https://www.menshairstylestoday.com/wp-content/uploads/2016/10/Hairstyles-For-Square-Faces-Buzz-Cut.jpg"}}
                  />}></Route>       
            {/* Interacion */}
            
            <RouterInteraction />
          </Switch>
          
        {/* </View> */}
        <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
      </Fragment>
      </NativeRouter>
    );
  }
}

const styles = {
  FloatingText: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
}



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