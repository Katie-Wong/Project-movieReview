import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
// import React to put the <Header /> commponent
import React from 'react';


const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return{
        headerTitle: () => <Header navigation={navigation} title='About the movies' />,
      }
    }
    // Below cannot pass the navigation function to header.js
    // navigationOptions: {
    //   headerTitle: () => <Header />

    // }
  }
}


const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {backgroundColor: 'lightgreen', height: 180 },
    headerTintColor:'blue'
  }
});

export default AboutStack;


