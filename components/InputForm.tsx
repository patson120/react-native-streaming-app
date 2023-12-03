
import React, { FC, useState } from "react";
import { KeyboardTypeOptions, TextInput } from "react-native";
import { themeColors } from "../themes";


type InputFormProps = {
    placeholder: string,
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined,
    keyboardType?: KeyboardTypeOptions | undefined,
    textContentType?: "none" | "emailAddress" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "familyName" | "fullStreetAddress" | "givenName",
    autoFocus?: boolean,
    autoCorrect?: boolean,
    secureTextEntry?: boolean,
    value: string,
    setValue: (val: string) => void
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
    setValue
}) => {
    return (
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

            className="bg-[#f6f7fb] h-12 mb- text-[16px] rounded-[10px] p-[12]"
        />
    );
}

export default InputForm;