import React, { useState } from "react";
import { TextInputProps, StyleSheet } from "react-native";
import { Input } from "tamagui";

const CustomInput = (props: TextInputProps) => {
    const [isFocus, setIsFocus] = useState(false);

    const handleFocus = () => setIsFocus(!isFocus);
    const handleBlur = () => setIsFocus(false);

    return (
        <Input
            {...props}
            size={"$3"}
            style={{
                ...styles.input,
                borderRightColor: isFocus ? "#D6ED17" : "#F5F5F5",
                borderLeftColor: isFocus ? "#D6ED17" : "#F5F5F5",
                borderBlockColor: isFocus ? "#D6ED17" : "#F5F5F5",
            }}
            placeholderTextColor={"#1D1D1D"}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#F5F5F5",
        borderWidth: 4,
        color: "#1D1D1D",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
});
