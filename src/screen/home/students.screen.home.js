import { Button, Icon, Layout, Text, useTheme } from '@ui-kitten/components';
import React from 'react'
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MultiRoleButtonTile from '../../components/multirole-button-tile.components';

export default function StudentsScreen({ navigation }) {
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
                        name='people'
                        style={styles.icon}
                    />
                    <Text category='h4' style={styles.title}>
                        Students
                    </Text>
                </View>
                <Button style={styles.button}
                    onPress={() => {
                        navigation.navigate('add.students')
                    }}
                >
                    Add Student
                </Button>
                <Text category='h5' style={styles.subtitle}>
                    List of student
                </Text>
                <ScrollView>
                    <MultiRoleButtonTile
                        title='Student #1'
                        modalTitle={'Remove Student?'}
                        deleteButtonText={'Remove Student'}
                        onPressCard={() => {
                            navigation.navigate('fee.students');
                        }}
                        onPressEdit={() => {
                            navigation.navigate('edit.students');
                        }}
                        onPressRemove={() => {
                            console.log('Remove Student');
                        }}
                    />
                </ScrollView>
            </Layout>
        </SafeAreaView>
    );
}
