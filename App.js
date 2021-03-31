import React from 'react';
import {createAppContainer}from 'react-navigation';
import {createBottomTabNavigator}from 'react-navigation-tabs';
import Facebook from './screen/Facebook';
import Instagram from './screen/Instagram';


export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}
 
const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram},
});

const AppContainer = createAppContainer(TabNavigator);
