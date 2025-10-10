/// <reference types="vite/client" />
/// <reference types="@shopify/oxygen-workers-types" />

// Enhance TypeScript's built-in typings.
import '@total-typescript/ts-reset';

import type { HydrogenEnv, HydrogenRouterContextProvider } from '@shopify/hydrogen';

declare module 'react-router' {
  interface RouterContextProvider extends HydrogenRouterContextProvider {}
  interface AppLoadContext extends HydrogenRouterContextProvider {}
}

declare global {
  interface Env extends HydrogenEnv {
    // Add custom environment variables here
  }
}
