import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const AboutScreen = () => {
    return (
        <SafeAreaView >
            <View>
                <Text> About Screen </Text>
                <StatusBar style='dark' />
            </View>
        </SafeAreaView>
    );
}

export default AboutScreen;