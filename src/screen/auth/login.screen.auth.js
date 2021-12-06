import React from 'react'
import { Button, Icon, Input, Text, useTheme } from '@ui-kitten/components';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

export default function LoginScreen({ navigation }) {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme['color-primary-default'],
            alignItems: 'center',
            justifyContent: 'center',
        },
        logo: {
            fontFamily: 'PTSans-Bold',
            color: 'white',
            fontSize: 48,
            marginBottom: 5,
        },
        subtitle: {
            fontSize: 20,
            color: 'black',
            fontFamily: 'PTSans-Bold',
            textAlign: 'center',
            paddingBottom: 20,
        },
        input: {
            paddingVertical: 10,
            paddingHorizontal: 30,
        },
        icon: {
            color: '#A9A9A9',
        },
        button: {
            borderRadius: 30,
            marginTop: 20,
            backgroundColor: theme['color-third-default'],
            borderColor: theme['color-third-default'],
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
        }
    });

    const LockIcon = (props) => (
        <Icon {...props} name={'lock-outline'} />
    );

    const MailIcon = (props) => (
        <Icon {...props} name={'email-outline'} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo} category='h1'>
                ezclassroom
            </Text>
            <Text style={styles.subtitle}>
                Manage your class with ease
            </Text>
            <Input
                placeholder="Enter email"
                style={styles.input}
                accessoryLeft={MailIcon}
            />
            <Input
                placeholder="Enter password"
                style={styles.input}
                accessoryLeft={LockIcon}
            />
            <Button
                style={styles.button}
                children={() => {
                    return (
                        <Text style={styles.buttonText}>
                            Login
                        </Text>
                    )
                }}
                onPress={() => {
                    navigation.navigate('frame.home');
                }}
            >
            </Button>
            <Pressable
                onPress={() => {
                    navigation.navigate('register.auth');
                }}
            >
                <View style={styles.register}>
                    <Text style={styles.subtitle2}>
                        Don't have an account?
                    </Text>
                    <Text style={{ color: theme['color-secondary-default'], fontWeight: 'bold' }}>
                        Register Now
                    </Text>
                </View>
            </Pressable>
        </SafeAreaView>
    )
}
