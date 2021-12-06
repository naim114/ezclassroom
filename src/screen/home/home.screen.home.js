import { Layout, Text, useTheme } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const theme = useTheme();

    const styles = StyleSheet.create({
        logo: {
            fontFamily: 'PTSans-Bold',
            padding: 20,
            textAlign: 'center',
            color: theme['color-primary-default'],
        },
        title: {
            fontFamily: 'PTSans-Bold',
            padding: 20,
        },
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1 }}>
                <Text style={styles.logo} category='h4'>
                    ezclassroom
                </Text>
            </Layout>
        </SafeAreaView>
    );
}