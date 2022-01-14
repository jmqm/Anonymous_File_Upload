import { registerRootComponent } from "expo";
import Main from "src/screens/Main";
import Providers from "src/providers/Providers";

const App = () => {
    return (
        <Providers>
            <Main />
        </Providers>
    );
};

export default registerRootComponent(App);
