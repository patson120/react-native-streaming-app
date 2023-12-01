import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { PrimaryButtonProps } from "../types";
import { themeColors } from "../themes";



const PrimaryButton: FC<PrimaryButtonProps> = ({ text, onPressButton, classes }) => {
    return (
        <TouchableOpacity
            onPress={() => onPressButton()}
            style={{ backgroundColor: themeColors.primaryColor(1) }}
            className={`${classes} p-3 items-center`}
        >
            <Text className="text-white text-lg font-semibold" >{text}</Text>
        </TouchableOpacity>
    );
}

export default PrimaryButton;