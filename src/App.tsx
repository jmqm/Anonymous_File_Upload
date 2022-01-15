// Normally this would be root component, but EAS build does not support
// 'entrypoint' key as of 2022-01-04.
// https://docs.expo.dev/build-reference/migrating/#custom--main--entry-point-in

// import { registerRootComponent } from "expo";
import Main from "src/screens/Main";
import Providers from "src/providers/Providers";

const App = () => {
    return (
        <Providers>
            <Main />
        </Providers>
    );
};

// registerRootComponent(App);
export default App;
