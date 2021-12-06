import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import NotificationTile from '../../components/notification-tile.components';
import TextTitle from '../../components/text-title.components';
import { ScrollView } from 'react-native-gesture-handler';

function NotificationScreen() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1 }}>
                <ScrollView>
                    <TextTitle
                        title={"Notification"}
                        subtitle={"View all of your notification here."}
                    />
                    {/* foreach here */}
                    <NotificationTile
                        title="Notification Title #1"
                        subtitle="Notification Subtitle #1"
                    />
                    <NotificationTile
                        title="Notification Title #2"
                        subtitle="Notification Subtitle #2"
                    />
                    <NotificationTile
                        title="Notification Title #3"
                        subtitle="Notification Subtitle #3"
                    />
                    <NotificationTile
                        title="Notification Title #1"
                        subtitle="Notification Subtitle #1"
                    />
                    <NotificationTile
                        title="Notification Title #2"
                        subtitle="Notification Subtitle #2"
                    />
                    <NotificationTile
                        title="Notification Title #3"
                        subtitle="Notification Subtitle #3"
                    />
                    <NotificationTile
                        title="Notification Title #1"
                        subtitle="Notification Subtitle #1"
                    />
                    <NotificationTile
                        title="Notification Title #2"
                        subtitle="Notification Subtitle #2"
                    />
                    <NotificationTile
                        title="Notification Title #3"
                        subtitle="Notification Subtitle #3"
                    />
                    <NotificationTile
                        title="Notification Title #1"
                        subtitle="Notification Subtitle #1"
                    />
                    <NotificationTile
                        title="Notification Title #2"
                        subtitle="Notification Subtitle #2"
                    />
                    <NotificationTile
                        title="Notification Title #3"
                        subtitle="Notification Subtitle #3"
                    />
                    <NotificationTile
                        title="Notification Title #1"
                        subtitle="Notification Subtitle #1"
                    />
                    <NotificationTile
                        title="Notification Title #2"
                        subtitle="Notification Subtitle #2"
                    />
                    <NotificationTile
                        title="Notification Title #3"
                        subtitle="Notification Subtitle #3"
                    />
                    {/* foreach here */}
                </ScrollView>
            </Layout>
        </SafeAreaView>
    );
}

export default NotificationScreen;