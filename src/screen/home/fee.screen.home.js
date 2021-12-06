import { Button, Icon, Layout, Text, useTheme } from '@ui-kitten/components';
import React from 'react'
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExtraMultiRoleButtonTile from '../../components/extra-multirole-button-tile.components';

export default function FeesScreen({ navigation }) {
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
            paddingVertical: 20,
        },
        subtitle: {
            fontFamily: 'PTSans-Regular',
            padding: 20,
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
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        fill='#1F2322'
                        name='book'
                        style={styles.icon}
                    />
                    <Text category='h4' style={styles.title}>
                        Fees
                    </Text>
                </View>
                <Button style={styles.button}
                    onPress={() => {
                        navigation.navigate('add.fees')
                    }}
                >
                    Add Fee
                </Button>
                <Text category='h5' style={styles.subtitle}>
                    List of fee
                </Text>
                <ScrollView>
                    <ExtraMultiRoleButtonTile
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
                        onPressShare={() => {
                            navigation.navigate('share.fees')
                        }}
                    />
                </ScrollView>
            </Layout>
        </SafeAreaView>
    );
}
