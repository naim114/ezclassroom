import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert, Linking, StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import AppSettingsTile from '../../components/app-settings-tile.components';
import TextTitle from '../../components/text-title.components';

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <AppSettingsTile title="About Us" onPress={handlePress} />;
};

function AppSettingsScreen({ navigation }) {
    const styles = StyleSheet.create({
        layout: {
            flex: 1,
            paddingVertical: 20,
        },
        title: {
            fontFamily: 'PTSans-Bold',
            marginHorizontal: 20,
            fontSize: 18,
            marginVertical: 15,
        },
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={styles.layout}>
                <TextTitle
                    title={"App Settings"}
                    subtitle={"Optimize your app here."}
                />
                <Text appearance='hint' style={styles.title}>
                    ABOUT
                </Text>
                <AppSettingsTile
                    title="Privacy Policy"
                    onPress={() => navigation.navigate('policy.app-settings')}
                />
                <AppSettingsTile
                    title="User Agreement"
                    onPress={() => navigation.navigate('agreement.app-settings')}
                />
                <Text appearance='hint' style={styles.title}>
                    SUPPORT
                </Text>
                <OpenURLButton url="https://github.com/naim114" />
                <Text style={{ fontSize: 12, textAlign: 'center', paddingVertical: 10 }} appearance='hint'>
                    {"Developed & desigined\nby https://github.com/naim114"}
                </Text>
            </Layout>
        </SafeAreaView>
    );
}

export default AppSettingsScreen;