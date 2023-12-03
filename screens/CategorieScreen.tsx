import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const CategorieScreen = () => {
    return (
        <SafeAreaView >
            <View>
                <Text> Cotegories Screen </Text>
                <StatusBar style='dark' />
            </View>
        </SafeAreaView>
    );
}

export default CategorieScreen;