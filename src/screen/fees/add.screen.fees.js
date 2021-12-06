import { Button, Input, Layout, IndexPath, Select, SelectItem, Text, useTheme } from '@ui-kitten/components'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dropdown } from 'react-native-element-dropdown';

export default function AddFeesScreen() {
    const theme = useTheme();

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
        dateTime: {
            paddingVertical: 10,
            width: 175,
        },
        button: {
            marginVertical: 20,
        },
        dropdown: {
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 8,
            paddingHorizontal: 15,
            marginVertical: 10,
        },
        placeholder: {
            color: 'gray',
        },
        selected: {
            color: 'black'
        },
    });

    const studentData = [
        { label: 'Student 1', value: '1' },
        { label: 'Student 2', value: '2' },
        { label: 'Student 3', value: '3' },
        { label: 'Student 4', value: '4' },
        { label: 'where r u?', value: '5' },
        { label: 'Student 6', value: '6' },
        { label: 'Student 7', value: '7' },
        { label: 'Student 8', value: '8' },
    ];

    const [stuValue, setStuValue] = useState(null);
    const [stuLabel, setStuLabel] = useState(null);
    const [isStuFocus, setIsStuFocus] = useState(false);

    const monthData = [
        { label: 'January', value: 'jan' },
        { label: 'February', value: 'feb' },
        { label: 'March', value: 'mar' },
        { label: 'April', value: 'apr' },
        { label: 'May', value: 'may' },
        { label: 'June', value: 'jun' },
        { label: 'July', value: 'jul' },
        { label: 'August', value: 'aug' },
        { label: 'September', value: 'sep' },
        { label: 'October', value: 'oct' },
        { label: 'November', value: 'nov' },
        { label: 'December', value: 'dec' },
    ];

    const [monthValue, setMonthValue] = useState(null);
    const [monthLabel, setMonthLabel] = useState(null);
    const [isMonthFocus, setIsMonthFocus] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={styles.layout}>
                <Text category='h5' style={styles.title}>
                    Add fee
                </Text>
                <Text style={styles.subtitle}>Add new fee to the record.</Text>

                <Text>Select Student</Text>
                <Dropdown
                    style={[
                        styles.dropdown,
                        isStuFocus && { borderColor: theme['color-primary-default'] }
                    ]}
                    placeholderStyle={styles.placeholder}
                    selectedTextStyle={styles.selected}
                    data={studentData}
                    searchPlaceholder="Search student"
                    search
                    labelField="label"
                    valueField="value"
                    placeholder={!isStuFocus ? 'Select student' : stuLabel}
                    onFocus={() => setIsStuFocus(true)}
                    onBlur={() => setIsStuFocus(false)}
                    onChange={item => {
                        setStuValue(item.value);
                        setStuLabel(item.label);
                    }}
                >
                </Dropdown>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>Month</Text>
                        <Dropdown
                            style={[
                                styles.dropdown,
                                isMonthFocus && { borderColor: theme['color-primary-default'] },
                                { width: 175, }
                            ]}
                            placeholderStyle={styles.placeholder}
                            selectedTextStyle={styles.selected}
                            data={monthData}
                            labelField="label"
                            valueField="value"
                            placeholder={!isMonthFocus ? 'Select month' : monthLabel}
                            onFocus={() => setIsMonthFocus(true)}
                            onBlur={() => setIsMonthFocus(false)}
                            onChange={item => {
                                setMonthValue(item.value);
                                setMonthLabel(item.label);
                            }}
                        >
                        </Dropdown>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>Year</Text>
                        <Input style={styles.dateTime} placeholder="Enter Year" />
                    </View>
                </View>

                <Text>Present Day No.</Text>
                <Input style={styles.input} placeholder="Enter Present Day No." />

                <Text>Total Fee (RM)</Text>
                <Input style={styles.input} placeholder="Enter Total Fee (RM)" />

                <Button style={styles.button}>
                    Add Fee
                </Button>
            </Layout>
        </SafeAreaView>
    )
}
