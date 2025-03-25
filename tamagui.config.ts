import { defaultConfig } from "@tamagui/config/v4";
import { createFont, createTamagui } from "tamagui";

export const config = createTamagui({
    ...defaultConfig,
    tokens: {
        ...defaultConfig.tokens,
        size: {
            ...defaultConfig.tokens.size,
            $3: 55,
            $full: "100%",
        },
        radius: {
            ...defaultConfig.tokens.radius,
            $sm: 5,
            $xl: 30,
        },
    },
});

type CustomConfig = typeof config;

// ensure types work
declare module "tamagui" {
    interface TamaguiCustomConfig extends CustomConfig {}
}

// import { config } from "@tamagui/config/v3";
// import { createFont, createTamagui } from "tamagui";

// export const tamaguiConfig = createTamagui({
//     ...config,
//     tokens: {
//         ...config.tokens,
//         size: {
//             ...config.tokens.size,
//             $3: 55,
//         },
//         radius: {
//             ...config.tokens.radius,
//             $sm: 5,
//             $xl: 30,
//         },
//         color: {
//             ...config.tokens.color,
//             $primary500: "#D6ED17",
//             $gray100: "#F5F5F5",
//             $gray300: "#B8B8B8",
//             $gray500: "#6C6C6C",
//             $gray900: "#1D1D1D",
//             $info500: "#3B82F6",
//             $error500: "#EF4444",
//             $warning500: "#F59E0B",
//             $success500: "#34C85A",
//         },
//     },
//     fonts: {
//         body: createFont({
//             family: "Inter-Light, sans-serif",
//             size: {
//                 2: 16,
//                 3: 14,
//             },
//         }),
//     },
// });

// export default tamaguiConfig;

// export type Conf = typeof tamaguiConfig;

// declare module "tamagui" {
//     interface TamaguiCustomConfig extends Conf {}
// }
