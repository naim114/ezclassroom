import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import Ionicons from 'react-native-vector-icons/Ionicons';

function NotificationTile(props) {
    const styles = StyleSheet.create({
        card: {
            borderRadius: 0,
        },
        notificationTitle: {
            fontWeight: 'bold',
            width: 285,
        },
        notificationSubtitle: {
            width: 285,
        },
        mainRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        column: {
            flexDirection: 'column',
        },
        icon: {
            marginRight: 20,
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
        backdrop: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalTitle: {
            fontWeight: 'bold',
            textAlign: 'center',
            paddingBottom: 10,
        },
        modalSubtitle: {
            textAlign: 'center',
            paddingBottom: 25,
        },
        modalButton: {
            marginVertical: 5,
        }
    });

    const [visible, setVisible] = React.useState(false);

    return (
        <>
            <Card style={styles.card} onPress={() => {
                console.log('Card pressed');
                setVisible(true);
            }}>
                <View style={styles.row}>
                    <Ionicons
                        name={props.icon ?? "notifications"}
                        size={20}
                        style={styles.icon}
                    />
                    <View style={styles.column}>
                        <Text style={styles.notificationTitle} numberOfLines={1}>
                            {props.title}
                        </Text>
                        <Text style={styles.notificationSubtitle}>
                            {props.subtitle}
                        </Text>
                    </View>
                </View>
            </Card>
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    <Text style={styles.modalTitle}>{props.title}</Text>
                    <Text style={styles.modalSubtitle}>
                        {props.subtitle}
                    </Text>
                    <Button status='danger' style={styles.modalButton}>
                        Delete Notification
                    </Button>
                    <Button status='basic' appearance='outline' style={styles.modalButton} onPress={() => setVisible(false)}>
                        Dismiss
                    </Button>
                </Card>
            </Modal>
        </>
    );
}

export default NotificationTile;