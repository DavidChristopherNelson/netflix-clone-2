import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable warnings for <img> elements
      "@next/next/no-img-element": "off",

      // Disable errors for unused variables
      "@typescript-eslint/no-unused-vars": "off",

      // Allow use of 'any' type
      "@typescript-eslint/no-explicit-any": "off",
    }
  }
];

export default eslintConfig;
