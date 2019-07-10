import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Text } from 'native-base';
import AccountOverviewOptions from './AccountOverviewOptions';
export default class HeaderIconExample extends Component {
  static navigationOptions = { headerStyle:{display: null}}
  render() {
      const {styleName, styleHeader, styleHeaderTitle, styleListBlock,
            styleNameBlock, balanceBox, styleBalance, BalanceText } = styles;
    return (
      <View style={{flex: 1,backgroundColor: '#fff'}}>
        <Header style={styleHeader}>
          <Left style={{flex:1}}>
            <Button transparent>
              <Icon style={{color: '#fff'}} name='menu' />
            </Button>
          </Left>
          <Body style={{flex:4}}>
            <Title style={styleHeaderTitle}> Account Overview </Title>
          </Body>
          <Right style={{flex:1}}/>
          {/* </Right> */}
        </Header>
        <View style={{ flex: 1}}>
            <View style={styleNameBlock}>
                <Text style={styleName}> Welcome back, Hussain </Text>
                <View style={balanceBox}>
                  <Text style={BalanceText}> Account Balance </Text>
                  <Text style={styleBalance}> $53.880,50 </Text>
                  <Text style={BalanceText}> Available $52.365,00 </Text>
                </View>
            </View>
            <View style={styleListBlock}>
                <AccountOverviewOptions />
            </View>
        </View>
      </View>
    );
  }
}

const styles= {
  styleHeader: {
      backgroundColor: '#3c86f2',
      // height: '40px',
      justifyContent: 'center',
      alignItems: 'center'
  },
  styleHeaderTitle: {
      color: '#fff',
      fontSize: 22
  },
  styleNameBlock: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
      shadowOffset:{  width: 0,  height: 2,  },
      shadowColor: '#aaa',
      shadowOpacity: 1.0,
      backgroundColor: '#fff',
      zIndex: 1,
  },
  styleName: {
      fontSize: 26,
      top: -10
  },
  styleListBlock: {
      backgroundColor: '#f6f6f6',
      flex: 3,
      display: 'flex',
      margin: 10,
      marginTop: 0,
      paddingTop: 130,
      
    
    // overflow: 'hidden',

    // margin: 10,
    // flex: 1,
    // backgroundColor: 'transparent',
    // borderColor: 'white',
    // borderWidth: 0,
    // overflow: 'hidden',
    // shadowColor: '#f00',
    // shadowRadius: 10,
    // shadowOpacity: 1,

  },
  balanceBox: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#3c86f2',
    position: 'absolute',
    bottom: -110,
    padding: 30,
    // zIndex: 20,
  },
  styleBalance: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    lineHeight: 45
  },
  BalanceText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  }
}