import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const ProfilScreen = () => {
    return (
        <SafeAreaView >
            <View>
                <Text> Profil Screen</Text>
                <StatusBar style='dark' />
            </View>
        </SafeAreaView>
    );
}

export default ProfilScreen;