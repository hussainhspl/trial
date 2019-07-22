// import React, {Component} from 'react';
// import {View, Text, Picker, Platform, AppState, StyleSheet, TouchableHighlight} from 'react-native';
// import Header from '../HeaderCommon';
// import PushNotification from 'react-native-push-notification';
// import Noti from './Noti';

// const styles = StyleSheet.create({
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// class Notification extends Component {
//   constructor(props) {
//     super(props);

//     this.handleAppStateChange = this.handleAppStateChange.bind(this);
//     this.sendNotification = this.sendNotification.bind(this);
//     this.state = {
//     };
//   }

//   handleAppStateChange(appState) {
//     if (appState === 'background') {
//       // Schedule a notification
//       console.log("in background", new Date(Date.now() + (10 * 1000)));
//       PushNotification.localNotificationSchedule({
//         message: 'Scheduled delay notification message', // (required)
//         date: new Date(Date.now() + (10 * 1000)) // in 3 secs
//       });
//     }
//   };
//   sendNotification() {
//     PushNotification.localNotification({
//       title:"hello",
//       message: 'You pushed the notification button!'
//     });
//   };
//   componentDidMount() {
//     // console.log("enter in did mount");   
//     AppState.addEventListener('change', this.handleAppStateChange);
//   }
//   componentWillUnmount() {
//     AppState.removeEventListener('change', this.handleAppStateChange);
//   }

//   render() {
//     return(
//       <View>
//         <Header history={this.props.history} icon="arrow-back" title="Notification" />
//         <Text> Choose your notification time in seconds. </Text>
//         <TouchableHighlight style={styles1.notifyButton} onPress={this.sendNotification}>
//           <Text>click to notify </Text>
//         </TouchableHighlight>
//         {/* <Picker
//           selectedValue={this.state.seconds}
//           onValueChange={(seconds) => this.setState({ seconds })}
//           >
//             <Picker.Item label="5" value={5} />
//             <Picker.Item label="10" value={10} />
//             <Picker.Item label="15" value={15} />
//           </Picker> */}
//           <Noti />
//       </View>
//     )
//   }
// }
// const styles1= {
//   notifyButton: {
//     backgroundColor: '#3c86f2',
//     paddingVertical: 10,
//     paddingHorizontal: 15
//   }
// }
// export default Notification;