import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { PrimaryButtonProps } from "../types";



const SecondaryButton: FC<PrimaryButtonProps> = ({ text, onPressButton, classes }) => {
    return (
        <TouchableOpacity
            onPress={() => onPressButton()}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.90)' }}
            className={`${classes} p-3 items-center`}
        >
            <View className="flex-row justify-center pla space-x-4">
                <Text className="text-white text-lg font-semibold" >{text}</Text>
                <View className="mt-1">
                    <Image
                        source={require("../../assets/images/logos_google-gmail.png")}
                        width={20} height={20}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default SecondaryButton;