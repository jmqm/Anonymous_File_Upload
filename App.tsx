// Normally this would not exist, but EAS build does not support
// 'entrypoint' key as of 2022-01-04.
// https://docs.expo.dev/build-reference/migrating/#custom--main--entry-point-in

import { registerRootComponent } from 'expo';
import App from "src/App";

registerRootComponent(App);