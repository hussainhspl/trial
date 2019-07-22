import React from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import Header from '../HeaderCommon';
import { continueStatement } from '@babel/types';
// import console = require('console');

class ActionSheet extends React.Component {
  state = {
    modalVisible: false,
  };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    const { modalBg, closeButton, closeText, modalView } = styles;
    let data = this.props;
    console.log("view style: ", data);
    return(
      <View >
        <Header history={this.props.history} icon="arrow-back" title="ActionSheet" />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
          >
          <View style={modalBg}>
            {/* <View style={{flex: 1, backgroundColor: '#ff0'}}> */}
              
              <View style={{ backgroundColor: '#fff' }}>
                <View style={modalView}>
                  {this.props.children}
                </View>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <View style={closeButton}>
                    <Text style={closeText}>Cancel</Text>
                  </View>
                </TouchableHighlight>
              </View>
            {/* </View> */}
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
            <View style={data.viewStyle ? data.viewStyle : ''}>
              <Text style={data.textStyle ? data.textStyle : '' }> 
                {this.props.modalName} 
              </Text>
            </View>
        </TouchableHighlight>
      </View>
    )
  }
}
const styles =  {
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(47, 47, 47, 0.8)',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom:0,
    // alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 50,
    margin: 15,
  },
  closeText: {
    color: '#3c86f2',
    fontSize: 16,
    fontWeight: '500',
  },
  modalView: {
    margin: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    position: 'absolute',
    bottom: 65,
    left: 0, right: 0
  }
}
export default ActionSheet;