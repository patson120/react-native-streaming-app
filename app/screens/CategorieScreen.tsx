import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from "react-native-feather";

const CategorieScreen = () => {
    const [search, setSearch] = useState("")
    return (
        <SafeAreaView className="flex-1 bg-white">
        <StatusBar hidden />
        <ScrollView className="flex-1 px-[20px]">

            <View className="mt-5"></View>

            <View
                className="flex-1 flex-row justify-between items-center"
            >
                <TouchableOpacity
                    className=""
                    onPress={() => {
                        console.log("Menu");
                    }}
                >
                    {
                        <Icon.AlignLeft stroke="#213" strokeWidth={2} fill="#213" height={30} width={30} />
                    }
                </TouchableOpacity>
                <Text className="text-xl font-bold">Categories</Text>
                <TouchableOpacity
                    className=""
                    onPress={() => {
                        console.log("Notifications");
                    }}
                >
                    {
                        <Icon.Bell stroke="#cfdfcf" strokeWidth={0} fill="#013" height={28} width={28} />
                    }
                </TouchableOpacity>
            </View>

            <View className="flex-1 flex-row justify-center items-center mt-5 bg-[#f6f7fb] h-12 rounded-full border-2 border-gray-200 space-x-3">
                <TextInput
                    placeholder="Search category"
                    autoCapitalize='sentences'
                    keyboardType='default'
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    autoCorrect={true}

                    className="flex-1 text-base pl-6"
                />
                <TouchableOpacity
                    className="pr-4"
                    onPress={() => {
                        console.log("Search");
                    }}
                >
                    {
                        <Icon.Search stroke="#cfdfcf" strokeWidth={2} fill="#f6f7fb" height={25} width={25} />
                    }
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
}

export default CategorieScreen;