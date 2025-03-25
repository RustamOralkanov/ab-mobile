import { CustomInput } from "@/shared/ui";
import { useState } from "react";
import { Button, Form, Spinner, YStack, SizableText } from "tamagui";
import { usePostCheckPhoneMutation } from "../api";

const formatPhoneNumber = (value: string) => {
    let cleaned = value.replace(/\D/g, "").slice(1);
    if (cleaned.length > 10) cleaned = cleaned.slice(0, 10);

    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    if (!match) return "+7";

    return `+7${match[1] ? ` (${match[1]}` : ""}${match[2] ? `) ${match[2]}` : ""}${match[3] ? `-${match[3]}` : ""}${match[4] ? `-${match[4]}` : ""}`;
};

const AuthForm = () => {
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [status, setStatus] = useState<"off" | "submitting" | "submitted">("off");
    const [postCheckPhone] = usePostCheckPhoneMutation();

    const handlePhoneChange = (value: string) => {
        const formatted = formatPhoneNumber(value);
        setPhone(formatted);
    };

    const onSubmit = async () => {
        if (phone.length !== 18) {
            setPhoneError("Неверный номер телефона!");
            return;
        }

        setStatus("submitting");
        try {
            const response = await postCheckPhone({ phone: phone.replace(/[\s\-\(\)]/g, "") }).unwrap();
            console.log(response, "response");
            setStatus("submitted");
        } catch (error) {
            setPhoneError("Произошла ошибка, попробуйте позже!");
            setStatus("off");
        }
    };

    return (
        <Form justify={"space-between"} gap={24} flex={1} onSubmit={onSubmit}>
            <YStack gap={8}>
                <CustomInput
                    id="phone_number"
                    placeholder={`Номер телефона`}
                    keyboardType="numeric"
                    value={phone}
                    onChangeText={(value) => {
                        setPhoneError("");
                        handlePhoneChange(value);
                    }}
                />
                <SizableText fontSize={12} color={"#EF4444"}>
                    {phoneError}
                </SizableText>
            </YStack>
            <YStack gap={24}>
                <Form.Trigger asChild>
                    <Button bg={"#D6ED17"} size={"$3"} icon={status === "submitting" ? () => <Spinner /> : undefined}>
                        Продолжить
                    </Button>
                </Form.Trigger>
                <SizableText fontSize={10} lineHeight={14} color={"#8F8F8F"} text={"center"}>
                    Используя приложение, вы подтверждаете своё согласие с нашей политикой конфиденциальности
                </SizableText>
            </YStack>
        </Form>
    );
};

export default AuthForm;
