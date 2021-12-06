import { Button, Input, Layout, Text, useTheme } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'


export default function ShareFeesScreen() {
    const theme = useTheme();

    const styles = StyleSheet.create({
        layout: {
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20,
        },
        title: {
            fontFamily: 'PTSans-Bold',
            color: theme['color-primary-default'],
        },
        subtitle: {
            fontFamily: 'PTSans-Bold',
            paddingBottom: 10,
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
                    ezclassroom
                </Text>
                <Text category='h1' style={styles.subtitle}>RECEIPT</Text>

                <Text>{'Date: '}</Text>
                <Text style={{ paddingBottom: 10 }}>{'Receipt No. :'}</Text>

                <Text>Student Name</Text>
                <Input style={styles.input} disabled={true} />

                <Text>Month/Year</Text>
                <Input style={styles.input} disabled={true} />

                <Text>Present Day No.</Text>
                <Input style={styles.input} disabled={true} />

                <Text>Total Fee (RM)</Text>
                <Input style={styles.input} disabled={true} />

                <Button style={styles.button}>
                    Share
                </Button>
            </Layout>
        </SafeAreaView>
    );
}
