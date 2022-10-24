import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Searchbar } from 'react-native-paper';
import AboutUs from './src/navigators/Drawer/AboutUs';
import Help from './src/navigators/Drawer/Help';
import LogOut from './src/navigators/Drawer/LogOut';
import User from './src/navigators/Drawer/User';
import Call from './src/navigators/Tab/Call';
import Chat from './src/navigators/Tab/Chat';
import Status from './src/navigators/Tab/Status';
import Home from './src/navigators/BottomTab/Home';
import Account from './src/navigators/BottomTab/Account';
import Settings from './src/navigators/BottomTab/Settings';
import DrawerContent from './src/navigators/Drawer/DrawerContent';
import Login from './src/navigators/Stack/Login';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import NewTab from './src/navigators/Tab/NewTab';
const Stack= createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab= createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator(); 

function StackNav(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
     
      <Stack.Screen name='DrawerNav' component={DrawerNav}/>
      <Stack.Screen name='TabNav' component={TabNav}/>
      <Stack.Screen name='BottomTabNav' component={BottomTabNav}/>
    </Stack.Navigator>
  )
  

  
}

function DrawerNav() {
  return(
       <Drawer.Navigator>
        <Drawer.Screen 
        name='User' 
        component={BottomTabNav} 
        
        />
        <Drawer.Screen
         name='Actions' 
         component={TabNav}
        
         />
        <Drawer.Screen
         name='Help' 
         component={TabNav} 
         
         />
        <Drawer.Screen 
        name='LogOut' 
        component={TabNav} 
       
        />
       </Drawer.Navigator>
  )
}

const TabNav=() =>{
  return(
    <View style={{flex:1}}>
    
    <NewTab/>
     
    <Tab.Navigator>
      <Tab.Screen 
      name='Chat'
      component={BottomTabNav}
      options={{headerShown:false,
        tabBarLabelStyle:{ fontSize:13},
        tabBarIcon:({focused}) =>
          focused ? <Icon1 name='chatbubbles' size={24}  color='blue'/> :<Icon1 name='chatbubbles-outline' size={24} color='grey'/>  
      }}
      
      />
      <Tab.Screen 
      name='Call' 
      component={Call}
      options={{headerShown:false,
        tabBarLabelStyle:{ fontSize:13},
        tabBarIcon:({focused}) =>
          focused ? <Icon1 name='call' size={24}  color='blue'/> :<Icon1 name='call-outline' size={24} color='grey'/>
      }}
      />
      <Tab.Screen 
      name='Status' 
      component={Status}
      options={{headerShown:false,
        tabBarLabelStyle:{ fontSize:13},
        tabBarIcon:({focused}) =>
          focused ? <Icon1 name='play-circle' size={24}  color='blue'/> :<Icon1 name='play-circle-outline' size={24} color='grey'/>
      }}
      />
    </Tab.Navigator>
    </View>
  )
}
function BottomTabNav(){
  return(
    <BottomTab.Navigator>
    <BottomTab.Screen 
    name='Home' 
    component={Home}
    options={{headerShown:false,
      tabBarLabelStyle:{ fontSize:13},
      tabBarIcon:({focused}) =>
        focused ? <Icon1 name='home' size={24}  color='blue'/> :<Icon1 name='home-outline' size={24} color='grey'/>
      
    }}
    />
    <BottomTab.Screen 
    name='Account' 
    component={Account}
    options={{headerShown:false,
      tabBarIcon:({focused}) =>
      focused ? <Icon name='account-circle' size={24} color='blue'/> : <Icon name='account-circle-outline' size={24} color='grey'/>
    }}
    />
    <BottomTab.Screen 
    name='Settings' 
    component={Settings}
    options={{headerShown:false,
    tabBarLabelStyle:{ fontSize:13},
      tabBarIcon:({focused}) =>
        focused ? <Icon1 name='settings' size={24}  color='blue'/> :<Icon1 name='settings-outline' size={24} color='grey'/>
    }}
    />
  </BottomTab.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
    <StackNav/>
    </NavigationContainer>
  )
}

export default App