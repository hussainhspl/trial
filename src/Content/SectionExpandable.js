import React, { Component } from 'react';
import {View, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/Ionicons';

class SectionExpandable extends Component {
  state = {
    activeSections: []
  };
  // const SECTIONS = this.props.accordion;

  // _renderSectionTitle = section => {
  //   return (
  //     <View style={styles.content}>
  //       <Text>{section.content}</Text>
  //     </View>
  //   );
  // };
 
  _renderHeader = (section, isActive) => {
    const currentActive = this.state.activeSections
    console.log("section", section, isActive, currentActive[0]);
    return (
      <View style={isActive === currentActive[0] ? styles.headerActive : styles.header }>
        <Text style={[styles.headerText, {color: isActive === currentActive[0] ? "#3c86f2" : "#000"}]}>{section.title}</Text>
        <Icon name={isActive === currentActive[0] ? 'ios-arrow-up' : 'ios-arrow-down'} size={25} color="#3c86f2" />
      </View>
    );
  };
 
  _renderContent = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };
 
  _updateSections = activeSections => {
    console.log("active sections", activeSections);
    this.setState({ activeSections });
  };


  render() {
    return (
      <View>
        <Accordion
          sections={this.props.accordion}
          activeSections={this.state.activeSections}
          // renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
          underlayColor='rgba(221,221,221,0.6)'
          style={styles.styleAccordion}
        />
      </View>
    )
  }
}
const styles = {
  header: {
    color: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    
  },
  headerActive: {
    color: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: '500',
    color: '#3c86f2'

  },
  headerText: {
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: '500'
  },
  styleAccordion: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 15,
    // shadow : 'none'
  },
  content: {
    paddingHorizontal: 15,
    paddingBottom: 15
  }
}
export default SectionExpandable;
