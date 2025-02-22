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
      "semi": ["error", "always"],
      "no-duplicate-imports": ["error", { "includeExports": true }],
      "no-trailing-spaces": "warn",
      "no-var": "error",
      "prefer-const": "error",
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          "selector": "default",
          "format": ["camelCase"],
          "leadingUnderscore": "forbid",
          "trailingUnderscore": "forbid",
          "filter": {
            "regex": "^(GET|POST|PUT|DELETE)$",
            "match": false
          }
        },
        {
          // for non-exported functions
          "selector": "function",
          "modifiers": ["global"],
          "format": ["camelCase","PascalCase"],
          "leadingUnderscore": "allow",
        },
        {
          "selector": "function",
          "modifiers": ["exported", "global"],
          "format": ["camelCase", "PascalCase"],
          "leadingUnderscore": "forbid",
        },
        {
          "selector": "typeLike",
          "format": ["PascalCase"]
        },
        {
          "selector": "property",
          "format": ["camelCase", "snake_case"]
        },
        {
          "selector": "parameter",
          "modifiers": ["unused"],
          "leadingUnderscore": "require",
          "format": ["camelCase"]
        },
        {
          "selector": "import",
          "format": ["camelCase", "PascalCase"]
        }
      ],
      "import/order": [
        "warn",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type"
          ],
          "pathGroupsExcludedImportTypes": ["builtin"],
          "pathGroups": [
            {
              "pattern": "@src/**",
              "group": "parent",
              "position": "before"
            }
          ],
          "alphabetize": { "order": "asc", "caseInsensitive": true },
          "newlines-between": "always"
        }
      ]
    }
  }
];

export default eslintConfig;