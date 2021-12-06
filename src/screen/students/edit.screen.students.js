import { Button, Input, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function EditStudentsScreen() {
    const styles = StyleSheet.create({
        layout: {
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: '#F5F5F5',
        },
        title: {
            fontFamily: 'PTSans-Bold',
        },
        subtitle: {
            fontFamily: 'PTSans-Regular',
            paddingBottom: 20,
        },
        input: {
            paddingVertical: 10,
        },
        button: {
            marginVertical: 20,
        },
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={styles.layout}>
                <Text category='h5' style={styles.title}>
                    Edit student
                </Text>
                <Text style={styles.subtitle}>Edit student information.</Text>

                <Text>Name</Text>
                <Input style={styles.input} placeholder="Enter Name" />

                <Text>Age</Text>
                <Input style={styles.input} placeholder="Enter Age" />

                <Text>Parent(s) name</Text>
                <Input style={styles.input} placeholder="Enter Parent(s) Name" />

                <Text>Address</Text>
                <Input style={styles.input} placeholder="Enter Address" />

                <Text>Phone No.</Text>
                <Input style={styles.input} placeholder="Enter Phone No." />

                <Button appearance='outline' style={styles.button}>
                    Confirm Changes
                </Button>
            </Layout>
        </SafeAreaView>
    )
}
