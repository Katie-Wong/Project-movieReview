import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
// import React to put my own <Header /> commponent over the default header from createStacNavigator 
import React from 'react';

const screens = {
  // Default Header comes with createStacNavigator shows on the top of each stack screen
  Home: {
    screen: Home,
    // HomeStack receives the navigation properties from drawer and stack navigators.
    navigationOptions: ({ navigation }) => {
      return{
        headerTitle: () => <Header navigation={navigation} title='HS1 Favorite Movies' />,
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'HS2 Review Details',
      headerStyle: {backgroundColor: 'pink'} // override the style from defaultNavigationOptions style
    }
  },
};


// styling the default header that comes with createStackNavigator
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {backgroundColor: 'lightgreen', height: 150 },
    headerTintColor:'blue' // color of the text
  }
});

export default HomeStack;


