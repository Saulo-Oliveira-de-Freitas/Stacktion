import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            screenOptions={{
                style: {
                    
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 14,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#334756',
                activeBackgroundColor: '#082032',
                inactiveTintColor: '#185ADB',
                activeTintColor: '#FF4C29',
            }}
        >
            <Screen 
                name="TeacherList" 
                component={TeacherList} 
                options={{
                    tabBarLabel: 'Catálogo',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="search" size={size} color={focused ? '#FF4C29' : color}  />
                        );
                    }
                }}
            />
            <Screen 
                name="Favorites" 
                component={Favorites} 
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-heart" size={size} color={focused ? '#FF4C29' : color} />
                        );
                    }
                }}
            />
        </Navigator>
    )
}

export default StudyTabs;