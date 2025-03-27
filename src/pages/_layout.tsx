import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { TamaguiProvider } from "tamagui";
import { config } from "../../tamagui.config";
import { Stack, usePathname } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/app/store";

export default function RootLayout() {
    const insets = useSafeAreaInsets();
    const pathname = usePathname();

    console.log(pathname);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: pathname === "/" ? "#D6ED17" : "#ffffff",
            }}
        >
            <Provider store={store}>
                <TamaguiProvider config={config}>
                    <Stack
                        screenOptions={{
                            contentStyle: { backgroundColor: "#ffffff" },
                        }}
                    >
                        <Stack.Screen
                            name="(welcome)"
                            options={{
                                headerShown: false,
                                contentStyle: {
                                    backgroundColor: "#D6ED17",
                                },
                            }}
                        />
                        <Stack.Screen
                            name="(auth)"
                            options={{
                                headerShown: false,
                                contentStyle: { backgroundColor: "#ffffff" },
                            }}
                        />
                    </Stack>
                </TamaguiProvider>
            </Provider>
        </SafeAreaView>
    );
}
