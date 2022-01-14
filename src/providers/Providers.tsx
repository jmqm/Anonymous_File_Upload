import theme from "src/theme";
import { Provider as PaperProvider } from "react-native-paper";
import FileUploadsProvider from "src/providers/fileUploads/FileUploadsProvider";

const ProvidersComponent: React.FunctionComponent = (props) => (
    <PaperProvider theme={theme}>
        <FileUploadsProvider>
            {props.children}
        </FileUploadsProvider>
    </PaperProvider>
);

export default ProvidersComponent;