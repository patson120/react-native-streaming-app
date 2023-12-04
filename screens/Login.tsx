import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { KeyboardAvoidingView, TouchableOpacity, Platform, SafeAreaView, Text, View } from 'react-native'
import InputForm from '../components/InputForm';
import { useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { themeColors } from '../themes';
import { PropsType } from '../types/navigation';
const backgroungImage = require("../assets/images/img1.png")


const LoginScreen = ({ navigation }: PropsType) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const route = useRoute();

    return (
        <SafeAreaView className="flex-1 bg-white" >
            <StatusBar style='dark' hidden />
            {/* <ImageBackground
                className="flex-1"
                source={backgroungImage} resizeMode="cover"> */}
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
                className="flex-1 justify-center items-center"
            >
                <View className="flex-1 py-8 space-y-4 justify-center items-center"
                    style={{ width: wp('80%') }}
                >
                    <Text className="text-3xl font-bold text-center my-5"> Log In </Text>
                    <View className="w-full">
                        <View className="my-5">
                            <InputForm
                                placeholder="Entrer your email"
                                value={email}
                                setValue={setEmail}
                                keyboardType='email-address'
                                textContentType='emailAddress'
                            />
                        </View>
                        <View className="mb-5">
                            <InputForm
                                placeholder="Entrer your password"
                                value={password}
                                setValue={setPassword}
                                keyboardType='default'
                                textContentType='none'
                                secureTextEntry
                            />
                        </View>
                        {/* Buttons */}
                        <View
                            className="mt-5 space-y-4"
                        >
                            <PrimaryButton
                                text="Log In"
                                classes='rounded-xl'
                                onPressButton={() => navigation.navigate("Tabs")}
                            />
                            <View className="my-2"></View>
                            <SecondaryButton
                                text="Login with Gmail"
                                classes='rounded-xl'
                                onPressButton={() => { console.log("Login with google");
                                 }}
                            />

                            <View className="mt-8"></View>

                            <View className="flex-row my-10 space-x-2 justify-center items-center">
                                <Text className="text-sm font-normal">Don't have an account ?</Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("SignUp")}
                                >
                                    <Text
                                        style={{ color: themeColors.primaryColor(1) }}
                                        className="text-sm font-bold">Signup</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
            {/* </ImageBackground> */}
        </SafeAreaView>
    );
}

export default LoginScreen;