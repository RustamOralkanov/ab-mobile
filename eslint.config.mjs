// eslint.config.mjs
import { defineConfig } from "eslint/config"; // Предполагается, что это правильный импорт
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native"; // Добавляем плагин для React Native

export default defineConfig([
    {
        // Применяется ко всем файлам
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            globals: {
                ...globals.browser, // Браузерные глобали (можно оставить для совместимости)
                ...globals.node, // Глобали Node.js, если используете их
                ...globals["react-native"], // Глобали React Native
            },
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true, // Поддержка JSX
                },
            },
        },
        plugins: {
            react: pluginReact, // Плагин React
            "react-native": pluginReactNative, // Плагин React Native
            "@typescript-eslint": tseslint, // TypeScript
        },
        rules: {
            ...js.configs.recommended.rules, // Базовые правила JS
            ...pluginReact.configs.recommended.rules, // Рекомендуемые правила React
            ...tseslint.configs.recommended.rules, // Рекомендуемые правила TypeScript
            "react-native/no-raw-text": "error", // Запрещает текст вне <Text>
            "react-native/no-unused-styles": "warn", // Предупреждение о неиспользуемых стилях
            "react-native/no-inline-styles": "warn", // Предупреждение об инлайн-стилях
            "react/prop-types": "off", // Отключаем PropTypes, если не используете
            "no-console": "warn", // Предупреждение на console.log
        },
        settings: {
            react: {
                version: "detect", // Автоопределение версии React
            },
        },
    },
]);
