

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <SafeAreaView >
            <View>
                <Text> Home Screen </Text>
                <StatusBar style='dark' />
            </View>
        </SafeAreaView>
    );
}
export default HomeScreen;