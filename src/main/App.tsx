import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home/home';
import HousePrices from '../screens/HousePrices/housePrices';
import Settings from '../screens/Settings/settings';
import Properties from '../screens/Properties/properties';
import Search from '../screens/Search/search';
import {theme} from '../theme/theme';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: theme.colors.primary,
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialIcons name="snooze" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Properties"
            component={Properties}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialIcons name="home" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialIcons name="search" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="House Prices"
            component={HousePrices}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialIcons name="euro" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialIcons name="settings" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
