import { CustomInput } from "@/shared/ui";
import { Spinner } from "tamagui";
import { Button, Form, SizableText, XStack, YStack } from "tamagui";
import { useRegisterForm } from "../model/useRegisterForm";

const RegisterForm = () => {
    const { status, phone, handlePhoneChange, onSubmit, phoneError } = useRegisterForm();
    return (
        <YStack justify={"space-between"} flex={1}>
            <Form justify={"space-between"} gap={24} flex={1} onSubmit={onSubmit}>
                <YStack gap={24}>
                    <YStack gap={8}>
                        <CustomInput placeholder={`Номер телефона`} keyboardType="numeric" value={phone} onChangeText={handlePhoneChange} />
                        {phoneError && (
                            <SizableText fontSize={12} color={"#EF4444"}>
                                {phoneError}
                            </SizableText>
                        )}
                    </YStack>
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
        </YStack>
    );
};

export default RegisterForm;
