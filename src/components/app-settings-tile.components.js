import { Card, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function AppSettingsTile(props) {
    const styles = StyleSheet.create({
        card: {
            borderRadius: 0,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        title: {
            fontWeight: 'bold'
        },
    });

    return (
        <Card style={styles.card} onPress={props.onPress}>
            <View style={styles.row}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Ionicons
                    name={props.icon ?? "ios-arrow-forward"}
                    size={20}
                />
            </View>
        </Card >
    );
}

export default AppSettingsTile;