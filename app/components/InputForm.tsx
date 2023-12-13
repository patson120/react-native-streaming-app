
import React, { FC, useState } from "react";
import { KeyboardTypeOptions, TextInput, TouchableOpacity, View } from "react-native";
import { themeColors } from "../themes";
import * as Icon from "react-native-feather";

type InputFormProps = {
    placeholder: string,
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined,
    keyboardType?: KeyboardTypeOptions | undefined,
    textContentType?: "none" | "emailAddress" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "familyName" | "fullStreetAddress" | "givenName",
    autoFocus?: boolean,
    autoCorrect?: boolean,
    secureTextEntry?: boolean,
    value: string,
    setValue: (val: string) => void,
    children: JSX.Element
}


const InputForm: FC<InputFormProps> = ({
    placeholder,
    autoCapitalize,
    keyboardType,
    textContentType,
    autoFocus,
    secureTextEntry,
    autoCorrect,
    value,
    setValue,
    children
}) => {
    return (
        <View className="flex-row bg-[#f6f7fb] h-14 rounded-[10px] p-[12] justify-center items-center ">
            <TextInput
                placeholder={placeholder}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                textContentType={textContentType}
                autoFocus={autoFocus}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={(text) => setValue(text)}
                autoCorrect={autoCorrect}

                className="flex-1 pb-0 h-14 text-base"
            />
            {
                children
            }
        </View>
    );
}

export default InputForm;