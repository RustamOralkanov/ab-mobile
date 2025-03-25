import { useRouter } from "expo-router";
import { AnimatePresence, MotiView, View } from "moti";
import { YStack, Image, Button, SizableText } from "tamagui";

const WelcomePage = () => {
    const router = useRouter();

    const navigateToAuth = () => {
        router.push({ pathname: "/(auth)/authPage" });
    };

    return (
        <YStack flex={1} justify={"space-between"} items={"center"} bg={"#D6ED17"}>
            <AnimatePresence>
                <View
                    from={{
                        top: "50%",
                        translateY: -60,
                    }}
                    animate={{
                        top: "5%",
                        translateY: 0,
                    }}
                    transition={{
                        duration: 2500,
                        delay: 1000,
                        type: "spring",
                    }}
                >
                    <YStack items={"center"}>
                        <View
                            from={{
                                scale: 0,
                            }}
                            animate={{
                                scale: [1, { value: 0.6 }],
                            }}
                            transition={{
                                duration: 1000,
                                type: "spring",
                            }}
                        >
                            <Image src={require("@/app/assets/icons/ab-logo.png")} width={120} height={120} />
                        </View>
                        <View
                            from={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 2200,
                            }}
                        >
                            <Image src={require("@/app/assets/icons/ab-text.png")} width={140} height={17} />
                        </View>
                    </YStack>
                </View>
            </AnimatePresence>
            <MotiView
                style={{ width: "100%" }}
                from={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 2300,
                }}
            >
                <YStack gap={24} width={"100%"} items={"center"}>
                    <SizableText>Тілді таңдаңыз / Выберите язык</SizableText>
                    <YStack gap={12} width={"100%"}>
                        <Button size={"$3"} onPress={navigateToAuth}>
                            Қазақша
                        </Button>
                        <Button size={"$3"} onPress={navigateToAuth}>
                            Русский
                        </Button>
                    </YStack>
                </YStack>
            </MotiView>
        </YStack>
    );
};

export default WelcomePage;
