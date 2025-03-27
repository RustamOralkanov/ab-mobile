import { CustomInput } from "@/shared/ui";
import { useState } from "react";
import { Button, Form, Spinner, YStack, SizableText, XStack } from "tamagui";
import { usePostLoginMutation } from "../../../shared/api";
import { useApiError } from "@/shared/hooks/useApiError";
import { Link } from "expo-router";
import { usePhoneFormat } from "@/shared/hooks/usePhoneFormat";

const AuthForm = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [status, setStatus] = useState<"off" | "submitting" | "submitted">("off");
    const [postLogin] = usePostLoginMutation();

    const { handleError } = useApiError();

    const handlePhoneChange = (value: string) => {
        const formatted = usePhoneFormat(value);
        setPhone(formatted);
    };

    const onSubmit = async () => {
        if (phone.length !== 18) {
            setPhoneError("Заполните номер телефона!");
            return;
        }

        setStatus("submitting");
        try {
            const response = await postLogin({ phone: phone.replace(/[\s\-\(\)]/g, ""), password: password }).unwrap();
            console.log(response, "response");
            setStatus("submitted");
        } catch (error) {
            setPasswordError(handleError(error));
            setStatus("off");
        }
    };

    return (
        <Form justify={"space-between"} gap={24} flex={1} onSubmit={onSubmit}>
            <YStack gap={24} flex={1}>
                <YStack gap={8}>
                    <CustomInput
                        id="phone_number"
                        placeholder={`Номер телефона`}
                        keyboardType="numeric"
                        value={phone}
                        textContentType="telephoneNumber"
                        onChangeText={(value) => {
                            setPhoneError("");
                            handlePhoneChange(value);
                        }}
                    />
                    {phoneError && (
                        <SizableText fontSize={12} color={"#EF4444"}>
                            {phoneError}
                        </SizableText>
                    )}
                    <CustomInput
                        id="password"
                        value={password}
                        placeholder={`Пароль *`}
                        onChangeText={(value) => setPassword(value)}
                        textContentType="password"
                        secureTextEntry={true}
                    />
                    {passwordError && (
                        <SizableText fontSize={12} color={"#EF4444"}>
                            {passwordError}
                        </SizableText>
                    )}
                </YStack>
                <XStack justify={"space-between"} items={"center"}>
                    <Link href={"/"}>
                        <SizableText fontSize={14} color={"#3B82F6"}>
                            Забыли пароль?
                        </SizableText>
                    </Link>
                    <Link href={"/(auth)/registerPage"}>
                        <SizableText fontSize={14} color={"#3B82F6"}>
                            Регистрация
                        </SizableText>
                    </Link>
                </XStack>
            </YStack>
            <Form.Trigger asChild>
                <Button bg={"#D6ED17"} size={"$3"} icon={status === "submitting" ? () => <Spinner /> : undefined}>
                    Продолжить
                </Button>
            </Form.Trigger>
        </Form>
    );
};

export default AuthForm;
