

import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Icon from "react-native-feather";
import { themeColors } from '../themes';
import PrimaryButton from '../components/PrimaryButton';


const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1">
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                hidden={true}
            />
            <View className="bg-indigo-50 px-4 pt-8 items-center"
                style={{
                    height: hp('100%'),
                    width: wp('100%'),
                }}
            >
                <View style={{
                    height: hp('55%'),
                    width: wp('80%'),
                }}
                    className="overflow-visible bg-transparent shadow-sm"
                >
                    {/* Image  */}
                    <Image
                        source={require("../assets/images/img3.jpg")}
                        className="w-full h-full object-cover rounded-3xl rounded-br-[60px]"
                    />

                    <View
                        style={{ backgroundColor: themeColors.primaryColor(1) }}
                        className="absolute bottom-0 right-0 h-12 w-12 rounded-full justify-center items-center p-1 pl-2"
                    >
                        <Icon.Play
                            fill="#fff" width={24} height={24}
                        />
                    </View>

                </View>
                <View
                    style={{ width: wp('80%'), }}
                    className="space-y-3"
                >

                    {/* Title */}
                    <Text
                        className="text-xl font-extrabold text-center mt-8"
                    >Music Player</Text>


                    {/* Description */}
                    <Text
                        className="text-sm text-black text-center mb-3"
                    >Listen to your favorite music whenever and wherever you want</Text>

                    {/* Buttons */}
                    <PrimaryButton
                        text="Log In"
                        classes='rounded-xl'
                        onPressButton={() => {
                            console.log("Press login !");
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            console.log("Press signup");
                        }}
                        className="bg-t p-3 items-center"
                    >
                        <Text
                            style={{ color: themeColors.primaryColor(1) }}
                            className="text-lg font-extrabold">Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen;


