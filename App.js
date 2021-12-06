import React from 'react';
import * as eva from '@eva-design/eva';
import { useFonts } from 'expo-font';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';

// assets
import { ThemeContext } from './src/assets/themes/theme-context';
import { default as ColorTheme } from './src/assets/themes/color-theme.json';
import LoginScreen from './src/screen/auth/login.screen.auth';
import { NavigationContainer } from '@react-navigation/native';
import { RegisterScreen } from './src/screen/auth/register.screen.auth';
import HomeFrame from './src/screen/home/frame.screen.home';
import ProfileScreen from './src/screen/settings/profile.screen.settings';
import NotificationScreen from './src/screen/settings/notifications.screen.settings';
import AppSettingsScreen from './src/screen/settings/app-settings.settings';
import PrivacyPolicyScreen from './src/screen/app-settings/privacy-policy.screen.app-settings';
import UserAgreementScreen from './src/screen/app-settings/user-agreement.screen.app-settings';
import AddStudentsScreen from './src/screen/students/add.screen.students';
import EditStudentsScreen from './src/screen/students/edit.screen.students';
import AddFeesScreen from './src/screen/fees/add.screen.fees';
import EditFeesScreen from './src/screen/fees/edit.screen.fees';
import StudentFeeScreen from './src/screen/students/fee.screen.students';
import ShareFeesScreen from './src/screen/fees/share.screen.fees';

const Stack = createStackNavigator();

export default function App() {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  const [loaded] = useFonts({
    'PTSans-Bold': require('./src/assets/fonts/PTSans-Bold.ttf'),
    'PTSans-BoldItalic': require('./src/assets/fonts/PTSans-BoldItalic.ttf'),
    'PTSans-Italic': require('./src/assets/fonts/PTSans-Italic.ttf'),
    'PTSans-Regular': require('./src/assets/fonts/PTSans-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={{ ...eva[theme], ...ColorTheme }} >
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="HomeFrame"
              screenOptions={{
                headerShown: false,
              }}
            >
              {/* Not logged in */}
              <Stack.Group>
                <Stack.Screen name="login.auth" component={LoginScreen} />
                <Stack.Screen name="register.auth" component={RegisterScreen} />
              </Stack.Group>
              {/* Not logged in */}
              {/* Logged in */}
              <Stack.Group>
                {/* home */}
                <Stack.Screen name="frame.home" component={HomeFrame} />
                {/* home */}

                {/* settings */}
                <Stack.Screen name="profile.settings" component={ProfileScreen} />
                <Stack.Screen name="notifications.settings" component={NotificationScreen} />
                <Stack.Screen name="app-settings.settings" component={AppSettingsScreen} />
                {/* settings */}

                {/* app-settings */}
                <Stack.Screen name="policy.app-settings" component={PrivacyPolicyScreen} />
                <Stack.Screen name="agreement.app-settings" component={UserAgreementScreen} />
                {/* app-settings */}

                {/* students */}
                <Stack.Screen name="add.students" component={AddStudentsScreen} />
                <Stack.Screen name="edit.students" component={EditStudentsScreen} />
                <Stack.Screen name="fee.students" component={StudentFeeScreen} />
                {/* students */}

                {/* fee */}
                <Stack.Screen name="add.fees" component={AddFeesScreen} />
                <Stack.Screen name="edit.fees" component={EditFeesScreen} />
                <Stack.Screen name="share.fees" component={ShareFeesScreen} />
                {/* fee */}

              </Stack.Group>
              {/* Logged in */}
            </Stack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
}