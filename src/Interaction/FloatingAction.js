import React from 'react';
import {View, TouchableOpacity, Alert, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../HeaderCommon';

const data= [
  {name: 'option 1 '},
  {name: 'option 2'},
  {name: 'option 3'},
  
]

class FloatingAction extends React.Component {
  state={floating: false}
  clickHandler = () => {
    //function to handle click on floating Action Button
    // Alert.alert('Floating Button Clicked');
    this.setState({ floating: true});
  };
  closeFloating = () => {
    this.setState({ floating: false});
  }
  render() {
    const { floatingBg, floatButton, floatingAlign, moreButton, inlineText, floatingText} = styles;
    return(
      <View style={{flex: 1}}>
        <Header history={this.props.history} icon="arrow-back" title="Floating Action"  />
        <View style={styles.MainContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}>
            <View style={moreButton}>
              <Icon name={"ios-add"}  size={40} color="#fff" />
            </View>
        </TouchableOpacity>
        {
          this.state.floating && (
            <View style={floatingBg}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.closeFloating}
                style={styles.TouchableOpacityStyle}>
                  <View style={moreButton}>
                    <Icon name={"ios-close"}  size={40} color="#fff" />
                  </View>
                  <View style={floatingAlign}>
                    {
                      data.map(button => (
                        <View style={inlineText}>
                          <Text style={floatingText}> {button.name} </Text>
                          <View style={floatButton}>
                            <Icon name={"ios-settings"}  size={20} color="#fff" />
                          </View>
                        </View>
                      ))
                    }
                  </View>
              </TouchableOpacity>
            </View>
          )
        }
      </View>
      </View>
    )
  }
}

const styles = {
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inlineText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
    width: 200,
    alignItems: 'center',
    marginBottom: 15
    
  },
  floatingText: {
    paddingRight: 20,
    color: "#3c86f2",
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'right',
    // backgroundColor: 'yellow'
  },
  floatingBg: {
    position:'absolute',
    top: 0, bottom:0, right: 0, left: 0,
    backgroundColor: 'rgba(247, 247, 247, 0.8)',

  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    zIndex: 1,
    //backgroundColor:'black'
  },
  moreButton: {
		borderWidth:1,
		borderColor:'rgba(0,0,0,0.2)',
		alignItems:'center',
		justifyContent:'center',
		width:50,
		height:50,
		backgroundColor:'#3c86f2',
		borderRadius:50,
		shadowColor: '#aaa',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.8,
		shadowRadius: 2,  
    elevation: 5,
    zIndex: 2,
    marginTop: 10
  },
  floatButton: {
    borderWidth:1,
		borderColor:'rgba(0,0,0,0.2)',
		alignItems:'center',
		justifyContent:'center',
		width:40,
		height:40,
		backgroundColor:'#3c86f2',
    borderRadius:50,
    
  },
  floatingAlign: {
    position: 'absolute',
    bottom: 60,
    right: 5

  }
};

export default FloatingAction;