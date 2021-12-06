import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@ui-kitten/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './home.screen.home';
import SettingsScreen from './settings.screen.home';
import StudentsScreen from './students.screen.home';
import FeesScreen from './fee.screen.home';

const Tab = createBottomTabNavigator();

function HomeFrame() {
    const theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Students') {
                        iconName = focused
                            ? 'school'
                            : 'school-outline';
                    } else if (route.name === 'Fees') {
                        iconName = focused ? 'cash' : 'cash-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                // tabBarStyle: { backgroundColor: theme['color-primary-default'] },
                tabBarActiveTintColor: theme['color-primary-default'],
                // tabBarInactiveTintColor: 'white',
                // tabBarShowLabel: false,
                headerShown: false,
            })}
        >
            <Tab.Screen name="Students" component={StudentsScreen} />
            <Tab.Screen name="Fees" component={FeesScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default HomeFrame;
