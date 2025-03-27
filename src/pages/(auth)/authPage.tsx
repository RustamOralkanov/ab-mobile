import { AuthForm } from "@/entities/auth";
import { Keyboard, Pressable } from "react-native";
import { H2, SizableText, YStack } from "tamagui";

const AuthPage = () => {
    return (
        <Pressable onPress={Keyboard.dismiss} accessible={false} style={{ flex: 1 }}>
            <YStack flex={1} px={20}>
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
        </Pressable>
    );
};

export default AuthPage;
