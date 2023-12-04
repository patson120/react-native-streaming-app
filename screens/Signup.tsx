import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { KeyboardAvoidingView, TouchableOpacity, Platform, SafeAreaView, Text, View } from 'react-native'
import InputForm from '../components/InputForm';
import { useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Icon from "react-native-feather";
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { themeColors } from '../themes';
import { PropsType } from '../types/navigation';
const backgroungImage = require("../assets/images/img1.png");





const SignUpScreen = ({ navigation }: PropsType) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showPassword, setShowPassword] = useState(false);


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
                    <Text className="text-3xl font-bold text-center my-4"> Sign Up </Text>
                    <View className="w-full">
                        <View className="my-5 mt-2">
                            <InputForm
                                placeholder="Entrer your email adress"
                                value={email}
                                setValue={setEmail}
                                keyboardType='email-address'
                                textContentType='emailAddress'
                            >
                                <Icon.Mail stroke="#0c000e" strokeWidth={1} fill="#f6f7fb" height={25} width={25} />
                            </InputForm>
                        </View>
                        <View className="mb-5">
                            <InputForm
                                placeholder="Entrer your full name"
                                value={fullName}
                                setValue={setFullName}
                                keyboardType='default'
                                textContentType='familyName'
                            >
                                <Icon.Edit stroke="#0c000e" strokeWidth={1} fill="#f6f7fb" height={25} width={25} />
                            </InputForm>
                        </View>
                        <View className="mb-5">
                            <InputForm
                                placeholder="Entrer your full number"
                                value={phoneNumber}
                                setValue={setPhoneNumber}
                                keyboardType='number-pad'
                                textContentType='creditCardNumber'
                            >
                                <Icon.Phone stroke="#0c000e" strokeWidth={1} fill="#f6f7fb" height={25} width={25} />
                            </InputForm>
                        </View>
                        <View className="mb-3">
                            <InputForm
                                placeholder="Entrer your password"
                                value={password}
                                setValue={setPassword}
                                keyboardType='default'
                                textContentType='none'
                                secureTextEntry={showPassword}
                            >
                                <TouchableOpacity
                                    onPress={() => { setShowPassword(prev => !prev)}}
                                >
                                    {
                                        showPassword ? 
                                        <Icon.Eye stroke="#0c000e" strokeWidth={1} fill="#f6f7fb" height={25} width={25} />  
                                        : <Icon.EyeOff stroke="#0c000e" strokeWidth={1} fill="#f6f7fb" height={25} width={25} />  
                                    }
                                </TouchableOpacity>
                            </InputForm>
                        </View>
                        {/* Buttons */}
                        <View
                            className="mt-5 space-y-4"
                        >
                            <PrimaryButton
                                text="Sign Up"
                                classes='rounded-xl'
                                onPressButton={() => {
                                    navigation.navigate("Login")
                                }}
                            />
                            <View className="my-2"></View>
                            <SecondaryButton
                                text="Signup with Gmail"
                                classes='rounded-xl'
                                onPressButton={() => {
                                    console.log("Signup with google");
                                }}
                            />

                            <View className="mt-8"></View>

                            <View className="flex-row my-10 space-x-2 justify-center items-center">
                                <Text className="text-sm font-normal">Already have an account ?</Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("Login")}
                                >
                                    <Text
                                        style={{ color: themeColors.primaryColor(1) }}
                                        className="text-sm font-bold">Login</Text>
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

export default SignUpScreen;