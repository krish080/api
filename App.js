import React from 'react';
import {createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./screens/home";
import DetailsScreen from "./screens/detail"

export default function App(){
  return<AppContainer/>;
}

const appStackNavigator=createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOption:{
        headerShown:false
      }

    },
    Details:{
      screen:DetailsScreen
          
    }
  },
  {
    initalRouteName:"Home"
  }
);

const AppContainer=createAppContainer(appStackNavigator);
