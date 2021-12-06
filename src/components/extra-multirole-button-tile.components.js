import { Button, ButtonGroup, Card, Icon, Text, Modal } from '@ui-kitten/components';
import React from 'react'
import { StyleSheet, View } from 'react-native';

export default function ExtraMultiRoleButtonTile(props) {
    const styles = StyleSheet.create({
        card: {
            borderRadius: 0,
            backgroundColor: props.color ?? 'white',
        },
        view: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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
        },
    });

    const ShareIcon = (props) => (
        <Icon {...props} name='share' />
    );

    const EditIcon = (props) => (
        <Icon {...props} name='edit' />
    );

    const RemoveIcon = (props) => (
        <Icon {...props} name='trash-2-outline' />
    );

    const [visible, setVisible] = React.useState(false);

    return (
        <>
            <Card
                style={styles.card}
                onPress={props.onPressCard}
            >
                <View
                    style={styles.view}
                >
                    <Text numberOfLines={1} style={{ width: 200 }}>
                        {props.title}
                    </Text>
                    <ButtonGroup status='info' size='small' appearance='outline'>
                        <Button accessoryLeft={ShareIcon} onPress={props.onPressShare} />
                        <Button accessoryLeft={EditIcon} onPress={props.onPressEdit} />
                        <Button accessoryLeft={RemoveIcon} onPress={() => setVisible(true)} />
                    </ButtonGroup>
                </View>
            </Card>
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    <Text style={styles.modalTitle}>{props.modalTitle}</Text>
                    <Text style={styles.modalSubtitle}>
                        {'Are you sure you want to remove ' + props.title + '?'}
                    </Text>
                    <Button onPress={props.onPressRemove} status='danger' style={styles.modalButton}>
                        {props.deleteButtonText ?? 'Confirm remove'}
                    </Button>
                    <Button status='basic' appearance='outline' style={styles.modalButton} onPress={() => setVisible(false)}>
                        Dismiss
                    </Button>
                </Card>
            </Modal>
        </>
    );
}
