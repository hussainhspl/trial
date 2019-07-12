import React, {Component, PropTypes} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import Header from '../HeaderCommon';
import Icon from 'react-native-vector-icons/Ionicons';

import ListItemContent from '../Content/ListItemContent'

emails = [{
  id: 1,
  title: 'Juniper',
  subtitle: 'Hello World!',
  color: '#f00'
}, {
  id: 2,
  title: 'Robert',
  subtitle: 'React is <3',
}, {
  id: 3,
  title: 'you can search for me using a regex : `java$`',
  subtitle: "What's Up?",
}, {
  id: 4,
  title: 'Georgia',
  subtitle: 'How are you today?',
}, {
  id: 5,
  title: 'Albert',
  subtitle: 'Hey!',
}, {
  id: 6,
  title: 'Zoey',
  subtitle: 'React Native!',
}, {
  id: 7,
  title: 'Cody',
  subtitle: 'is super!',
}, {
  id: 8,
  title: 'Chili',
  subtitle: 'Awesome!',
}]

const KEYS_TO_FILTERS = ['title', 'subtitle'];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  
  render() {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return(
      <View>
        <Header icon="arrow-back" title="Notification" />
        {/* <Text> search </Text> */}
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type a message to search"
          />
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=>alert(email.title)} key={email.title} style={styles.emailItem}>
                {/* <View>
                  <Text>{email.user.name}</Text>
                  <Text style={styles.emailSubject}>{email.subject}</Text>
                </View> */}
                {/* <ListItemContent 
                  dataArray={emails}
                /> */}
                <View style={styles.itemView}>
                  <View style={{flex: 1}}>
                    <Text numberOfLines={1} style={styles.title}>{email.title}</Text>
                    <Text numberOfLines={1} style={styles.subtitle}>{email.subtitle ? email.subtitle: ''}</Text>
                  </View>
                  <View style={styles.iconView}>
                    <Icon color= '#3c86f2' name="ios-arrow-forward" size={20} />
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  },
  ListRow: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    // marginHorizontal: 15,
  },

  itemView: {
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    paddingRight: 15,
  },
  subtitle: {
    fontSize: 16,
    paddingTop: 5,
    color: '#7b7b7b',
    paddingRight: 15,
  },
  iconView: {
    width: 50,
    // backgroundColor: 'red',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
export default Search;