import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import InputForm from '../components/InputForm';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log("Email", email);
    
    return (
        <SafeAreaView className="flex-1 bg-white" >
            <StatusBar style='dark' hidden />
            <View
                className="p-6"
            >
                <Text> Login Screen </Text>
                <View className="mt-8 space-y-4">
                    <View>
                        <InputForm
                            placeholder="Entrer your email"
                            value={email}
                            setValue={setEmail}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                        />
                    </View>
                    <View>
                        <InputForm
                            placeholder="Entrer your password"
                            value={password}
                            setValue={setPassword}
                            keyboardType='default'
                            textContentType='none'
                            secureTextEntry
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;