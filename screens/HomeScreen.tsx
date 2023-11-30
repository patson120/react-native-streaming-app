

import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white px-4 pt-8">
            <StatusBar style='dark' />
            <View>
                <Text className="text-lg font-medium"> Home Screen </Text>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;
