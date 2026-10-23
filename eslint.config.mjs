import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: ["node_modules/", "dist/", "taskJS/"],
  },
  {
    files: ["**/*.js", "**/*.mjs"],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        console: "readonly",
        fetch: "readonly",
        document: "readonly",
        window: "readonly",
        alert: "readonly",
        prompt: "readonly",
        confirm: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
      },
    },
  },
  {
    files: ["src/**/*.ts"],
    extends: [...tseslint.configs.recommended],
  },
  eslintConfigPrettier,
);
