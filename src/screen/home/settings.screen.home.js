import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout, Text, Toggle } from '@ui-kitten/components';

import { ThemeContext } from '../../assets/themes/theme-context';
import ButtonTile from '../../components/button-tile.components';


export default function SettingsScreen({ navigation }) {
    const themeContext = React.useContext(ThemeContext);

    const [checked, setChecked] = React.useState(false);

    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
        themeContext.toggleTheme();
        console.log(`Theme toggled: ${checked ? 'Light Mode' : 'Dark Mode'}`);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1 }}>
                {/* <Layout style={{ padding: 20 }}> */}
                <Text style={{ fontFamily: 'PTSans-Bold', padding: 20 }} category='h1'>Settings</Text>
                <View
                    style={{
                        paddingHorizontal: 20,
                        paddingVertical: 17,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >

                    <Toggle
                        checked={checked}
                        onChange={onCheckedChange}
                        status="primary"
                    >
                        <Text />
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: 'PTSans-Bold',
                            }}
                        >
                            {`${checked ? 'Dark Mode' : 'Light Mode'}`}
                        </Text>
                    </Toggle>
                </View>
                <ButtonTile
                    title="Profile"
                    iconName="person"
                    onPress={() =>
                        navigation.navigate('profile.settings')
                    }
                />
                <ButtonTile
                    title="Notifications"
                    iconName="mail"
                    onPress={() =>
                        navigation.navigate('notifications.settings')
                    }
                    hasBadge={true}
                    badgeValue="10"
                />
                <ButtonTile
                    title="App Settings"
                    iconName="settings"
                    onPress={() => {
                        navigation.navigate('app-settings.settings')
                    }}
                />
                <ButtonTile
                    title="Log Out"
                    iconName="log-out-outline"
                    iconColor="red"
                    fontStatus="danger"
                    onPress={() => {
                        navigation.navigate('login.auth');
                    }}
                />
            </Layout>
        </SafeAreaView>
    );
}