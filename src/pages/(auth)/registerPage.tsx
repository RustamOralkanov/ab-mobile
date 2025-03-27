import { Keyboard, Pressable } from "react-native";
import { H2, YStack } from "tamagui";
import { RegisterForm } from "@/entities/register";

const RegisterPage = () => {
    return (
        <Pressable onPress={Keyboard.dismiss} accessible={false}>
            <YStack flex={1} px={20}>
                <YStack gap={24} flex={1}>
                    <YStack gap={12}>
                        <H2 fontSize={32} fontWeight={700} lineHeight={40} mt={40}>
                            Введите ваш номер телефона
                        </H2>
                    </YStack>
                    <RegisterForm />
                </YStack>
            </YStack>
        </Pressable>
    );
};

export default RegisterPage;
