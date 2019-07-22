import React from 'react';
import {View, Text, TouchableHighlight } from 'react-native';
import { Left, Body, Right, Icon, 
  Title, Button, Header} from 'native-base';
// import console = require('console');

class HeaderCommon extends React.Component {
  render() {
    const { styleHeader, styleHeaderTitle} = styles;
    const history= this.props.history;
    console.log("history:", history);
    return (
      <Header style={styleHeader}>
        <Left style={{flex:1}}>
        <TouchableHighlight  style={{paddingHorizontal:10}} underlayColor='rgba(221, 221, 221, 0.4)' onPress={() => history.push("/")}>
            <Icon style={{color: '#fff'}} name={this.props.icon} />
          </TouchableHighlight>
        </Left>
        <Body style={{flex:4}}>
          <Title style={styleHeaderTitle}> {this.props.title ? this.props.title : 'Content'} </Title>
        </Body>
        <Right style={{flex:1}}/>
      </Header>
    )
  }
}
 
const styles = {
  styleHeader: {
    backgroundColor: '#3c86f2',
    // height: '40px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  styleHeaderTitle: {
    color: '#fff',
    fontSize: 22,
    
  },
}
export default HeaderCommon;
