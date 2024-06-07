import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleNameMapper: {
        "\\.module\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\*.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};

export default config;
