/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/App` | `/_sitemap` | `/pages` | `/pages/dashboard/Dashboard` | `/routes` | `/shared/components` | `/shared/contents` | `/shared/hooks` | `/shared/services`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
