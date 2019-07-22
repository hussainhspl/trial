import React from 'react';
import {View, Text, Dimensions,} from 'react-native';

const window = Dimensions.get('window');

export default function Menu({ onItemSelected }) {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.menuHeader}> 
        <Text> Menu </Text>
      </View>
      <View style={{height:80,paddingLeft: 15, paddingTop: 15, justifyContent:"space-between"}}>
        <Text> Home </Text>
        <Text onPress={() => onItemSelected('Contacts')}> About </Text>
        <Text> Contact </Text>
      </View>
    </View>
  )
}

const styles = {
  menuHeader: {
    backgroundColor: '#3c86f2', 
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    borderWidth: 1,
    borderRightColor: '#eee',
    flex: 1 
  }
}


// Menu.propTypes = {
//   onItemSelected: PropTypes.func.isRequired,
// };
