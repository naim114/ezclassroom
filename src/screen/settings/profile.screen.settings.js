import { Button, Input, Layout, Text, useTheme, Modal, Card } from '@ui-kitten/components';
import React, { useRef } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ProfileScreen({ navigation }) {
    const theme = useTheme();

    const [visible, setVisible] = React.useState(false);

    const styles = StyleSheet.create({
        header: {
            backgroundColor: theme['color-primary-default'],
            height: 150,
            flexDirection: 'row',
            alignItems: 'flex-start',
        },
        avatar: {
            width: 130,
            height: 130,
            borderRadius: 63,
            borderWidth: 4,
            borderColor: "white",
            marginBottom: 10,
            alignSelf: 'center',
            position: 'absolute',
            marginTop: 80,
        },
        title: {
            fontFamily: 'PTSans-Bold',
            fontSize: 20,
        },
        body: {
            marginTop: 70,
            flexDirection: 'column',
            paddingHorizontal: 25,
        },
        input: {
            paddingVertical: 10,
        },
        backdrop: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalTitle: {
            fontWeight: 'bold',
            textAlign: 'center',
            paddingBottom: 10,
        },
        modalButton: {
            marginVertical: 5,
        }
    });

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Layout style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <Button
                            onPress={() => {
                                console.log('Confirm Edit Profile');
                            }}
                        >
                            Confirm Edit
                        </Button>
                    </View>
                    <Image style={styles.avatar} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg' }} />
                    <View style={styles.body}>
                        <View style={{ alignItems: 'center', marginBottom: 30 }}>
                            <Pressable
                                onPress={() => {
                                    console.log('Profile picture change');
                                    setVisible(true);
                                }}
                            >
                                <Text style={styles.title}>
                                    Change Profile Picture
                                </Text>
                            </Pressable>
                        </View>
                        <Text>Username</Text>
                        <Input style={styles.input} placeholder="Enter Username" />
                        <Text>Full Name</Text>
                        <Input style={styles.input} placeholder="Enter Full Name" />
                        <Text>Bio</Text>
                        <Input style={styles.input} placeholder="Enter Full Name" />
                    </View>
                </Layout>
            </SafeAreaView>
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    <Text style={styles.modalTitle}>Change Profile Picture</Text>
                    <Button style={styles.modalButton}>
                        Upload Profile Picture
                    </Button>
                    <Button status='danger' appearance='outline' style={styles.modalButton}>
                        Remove Profile Picture
                    </Button>
                    <Button status='basic' appearance='outline' style={styles.modalButton} onPress={() => setVisible(false)}>
                        Dismiss
                    </Button>
                </Card>
            </Modal>
        </>
    );

}

export default ProfileScreen;
