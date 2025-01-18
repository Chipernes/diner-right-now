import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: import.meta.env.VITE_API_URI,
  documents: "src/basics/graphql/**/*.ts",
  generates: {
    "src/generated/graphql.types.ts": {
      plugins: ["typescript"]
    }
  }
};

export default config;
