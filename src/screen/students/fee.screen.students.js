import { Layout, Text, useTheme } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import ExtraMultiRoleButtonTile from '../../components/extra-multirole-button-tile.components';

export default function StudentFeeScreen({ navigation }) {
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
            paddingTop: 20,
            paddingHorizontal: 20,
        },
        subtitle: {
            fontFamily: 'PTSans-Regular',
            paddingHorizontal: 20,
            paddingBottom: 20,
        },
        button: {
            marginHorizontal: 30,
        },
        icon: {
            width: 30,
            height: 30,
            marginRight: 10,
            marginLeft: 20,
        },
        layout: {
            flex: 1,
            backgroundColor: '#F5F5F5',
        },
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={styles.layout}>
                <ScrollView>
                    <Text category='h4' style={styles.title}>
                        Student's Fee List
                    </Text>
                    <Text style={styles.subtitle}>
                        View all of Student #1 fee.
                    </Text>
                    <ExtraMultiRoleButtonTile
                        color='#F5F5F5'
                        title='Fee #1 Fee #1 Fee #1 Fee #1 Fee #1 Fee #1'
                        modalTitle={'Remove Fee?'}
                        deleteButtonText={'Remove Fee'}
                        onPressCard={() => {
                            navigation.navigate('edit.fees');
                        }}
                        onPressEdit={() => {
                            navigation.navigate('edit.fees');
                        }}
                        onPressRemove={() => {
                            console.log('Remove Fee');
                        }}
                    />
                </ScrollView>
            </Layout>
        </SafeAreaView>
    )
}
