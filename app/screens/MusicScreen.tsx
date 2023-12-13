import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const MusicScreen = () => {
    return (
        <SafeAreaView >
            <View>
                <Text> Music Screen </Text>
                <StatusBar style='dark' />
            </View>
        </SafeAreaView>
    );
}

export default MusicScreen;