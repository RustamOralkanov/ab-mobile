import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <Stack
            screenOptions={{
                contentStyle: { backgroundColor: "#ffffff" },
            }}
        >
            <Stack.Screen
                name="authPage"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="registerPage"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
};

export default AuthLayout;
