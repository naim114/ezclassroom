import React from 'react';
import { Button, Icon, Input, Text, useTheme } from '@ui-kitten/components';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const RegisterScreen = ({ navigation }) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme['color-secondary-default'],
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontFamily: 'PTSans-Bold',
            fontSize: 30,
            textAlign: 'left',
            color: theme['color-primary-default'],
        },
        subtitle: {
            fontSize: 20,
            color: 'white',
            fontFamily: 'PTSans-Regular',
            textAlign: 'center',
            paddingBottom: 20,
        },
        input: {
            paddingVertical: 10,
            paddingHorizontal: 30,
        },
        icon: {
            width: 100,
            height: 100,
        },
        button: {
            borderRadius: 30,
            marginTop: 20,
            // backgroundColor: theme['color-third-default'],
            // borderColor: theme['color-third-default'],
        },
        buttonText: {
            color: 'white',
            paddingHorizontal: 130,
            paddingVertical: 5,
            fontSize: 18,
            fontWeight: 'bold',
        },
        subtitle2: {
            color: 'black',
            marginHorizontal: 5,
        },
        register: {
            flexDirection: 'row',
            marginVertical: 10,
        },
    })

    const MailIcon = (props) => (
        <Icon {...props} name={'email-outline'} />
    );

    const AtIcon = (props) => (
        <Icon {...props} name={'at'} />
    );

    const PersonIcon = (props) => (
        <Icon {...props} name={'person-outline'} />
    );

    const LockIcon = (props) => (
        <Icon {...props} name={'lock-outline'} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Icon
                style={styles.icon}
                fill='#1F2322'
                name='people'
            />
            <Text style={styles.title} category='h1'>
                Create an account
            </Text>
            <Text style={styles.subtitle}>
                Start your journey with us now
            </Text>
            <Input
                placeholder="Enter Email"
                style={styles.input}
                accessoryLeft={MailIcon}
            />
            <Input
                placeholder="Enter Username"
                style={styles.input}
                accessoryLeft={AtIcon}
            />
            <Input
                placeholder="Enter Full Name"
                style={styles.input}
                accessoryLeft={PersonIcon}
            />
            <Input
                placeholder="Enter Password"
                style={styles.input}
                accessoryLeft={LockIcon}
            />
            <Input
                placeholder="Confirm Password"
                style={styles.input}
                accessoryLeft={LockIcon}
            />
            <Button
                style={styles.button}

                children={() => {
                    return (
                        <Text style={styles.buttonText}>
                            Register
                        </Text>
                    )
                }}
                onPress={() => {
                }}
            >
            </Button>
            <Pressable
                onPress={() => {
                    navigation.navigate('login.auth')
                }}
            >
                <View style={styles.register}>
                    <Text style={styles.subtitle2}>
                        Already have have an account?
                    </Text>
                    <Text style={{ color: theme['color-third-default'], fontWeight: 'bold' }}>
                        Login
                    </Text>
                </View>
            </Pressable>
        </SafeAreaView>
    )
};