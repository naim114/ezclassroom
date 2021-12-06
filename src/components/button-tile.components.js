import { Text, useTheme } from '@ui-kitten/components';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Badge } from 'react-native-elements/dist/badge/Badge';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ButtonTile(props) {
    const theme = useTheme();
    let badge;
    if (props.hasBadge) {
        badge = <Badge badgeStyle={{ backgroundColor: theme['color-primary-default'] }} value={props.badgeValue} />;
    }
    return (
        <>
            <Pressable
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 17,
                    borderBottomColor: '#D3D3D3',
                }}
                onPress={props.onPress}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Ionicons
                        name={props.iconName ?? 'home'}
                        size={20}
                        style={{ marginRight: 20 }}
                        color={props.iconColor ?? 'black'}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: 'PTSans-Bold',
                            marginRight: 10,
                        }}
                        status={props.fontStatus ?? 'basic'}
                    >
                        {props.title}
                    </Text>
                    {badge}
                </View>

            </Pressable>
            <Divider />
        </>
    );
}

export default ButtonTile;