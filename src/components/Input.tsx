import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";
import theme from "src/theme";

const InputComponent = () => {
    const [file, setFile] = useState<DocumentPicker.DocumentResult>();

    const clearFile = () => setFile(undefined);

    const selectFile = async () => {
        const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: false });

        if (result.type === "success") {
            setFile(result)
        }
    }

    const uploadFile = async () => {
        alert("upload button pressed.");
    }

    return (
        <View style={styles.root}>
            {file && (
                <Button
                    style={styles.clear}
                    mode="outlined"
                    uppercase={false}
                    onPress={clearFile}
                    icon="close"
                    compact={true}
                >
                </Button>
            )}

            <Button
                style={styles.select}
                mode="outlined"
                uppercase={false}
                onPress={selectFile}
            >
                {/* TypeScript - Have to do '=== "success"' check or else linter complains like a baby. */}
                {file?.type === "success" ? file.name : "Tap here to upload a file"}
            </Button>

            {file && (
                <Button
                    style={styles.upload}
                    mode="contained"
                    uppercase={false}
                    onPress={uploadFile}
                    icon="upload"
                    compact={true}
                >
                </Button>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        marginVertical: 36,
        marginHorizontal: 24,
        flexDirection: "row",
        alignItems: "center"
    },
    clear: {
        marginRight: theme.spacing
    },
    select: {
        flex: 1
    },
    upload: {
        marginLeft: theme.spacing
    }
});

export default InputComponent;
