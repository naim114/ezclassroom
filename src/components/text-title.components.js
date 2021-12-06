import React from 'react'
import { Text } from '@ui-kitten/components';

export default function TextTitle(props) {
    return (
        <>
            <Text style={{
                fontFamily: 'PTSans-Bold',
                paddingHorizontal: 20,
                paddingTop: 20,
            }} category='h3'>
                {props.title}
            </Text>
            <Text style={{
                fontFamily: 'PTSans-Regular',
                paddingHorizontal: 20,
                paddingBottom: 20,
            }} category='h6'>
                {props.subtitle}
            </Text>
        </>
    )
}
