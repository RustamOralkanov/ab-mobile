import { AuthForm } from "@/entities/auth";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { H2, SizableText, YStack } from "tamagui";

const AuthPage = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <YStack flex={1}>
                <YStack gap={24} flex={1}>
                    <YStack gap={12}>
                        <H2 fontSize={32} fontWeight={700} lineHeight={40} mt={40}>
                            Введите номер телефона и пароль
                        </H2>
                        <SizableText>Чтобы войти или зарегистрироваться</SizableText>
                    </YStack>
                    <AuthForm />
                </YStack>
            </YStack>
        </TouchableWithoutFeedback>
    );
};

export default AuthPage;
