# Diner Right Now - Client project

## Local development setup
**1.** Run Backend project: [Backend service README.md](..%2Fdrn-service%2FREADME.md)

**2.** Run codegen command: `npm run codegen`

**3.** Install dependencies: `npm install`

## Development Server

**1.** Start the development server: `npm run dev`

**2.** Open the application in your browser at: http://localhost:5173/

## Generating Codegen types for drn-service

Any change in backend schema should be fetched by our Codegen to update generated types. To do that, you can simply run script from package.json by running following command:
`npm run codegen`

Codegen is configured to download schema from dev instance of `drn-service`, so please make sure that your PR with schema changes is merged, otherwise schema will be not updated.

When types are generated, you can import whatever you need from `src/generated/graphql.types.ts` file.

## Starting of storybook for drn-client

**1.** Start the storybook: `npm run storybook`

**2.** Open the storybook in your browser at: http://localhost:6006/
