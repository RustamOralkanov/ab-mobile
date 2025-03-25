import { AuthForm } from "@/entities/auth";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { H2, YStack } from "tamagui";

const AuthPage = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <YStack flex={1}>
                <YStack gap={24} flex={1}>
                    <H2 fontSize={32} fontWeight={700} lineHeight={40} mt={40}>
                        Введите ваш номер телефона
                    </H2>
                    <AuthForm />
                </YStack>
            </YStack>
        </TouchableWithoutFeedback>
    );
};

export default AuthPage;
