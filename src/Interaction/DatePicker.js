import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import Header from '../HeaderCommon';
import DateTimePicker from "react-native-modal-datetime-picker";

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };
 
  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
 
  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };
  render() {
    const {ViewStyle, TextStyle } = styles;
    return(
      <View>
        <Header history={this.props.history} icon="arrow-back" title="ActionSheet" />
        <TouchableOpacity onPress={this.showDateTimePicker}>
          <View style={ViewStyle}>
            <Text style={TextStyle}> 
              Show DatePicker
            </Text>
          </View>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </View>
    )
  }
}
const styles = {
  ViewStyle: {
    backgroundColor: '#3c86f2',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 15
  },
  TextStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'capitalize',
  }
}
export default DatePicker;
