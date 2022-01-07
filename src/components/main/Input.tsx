import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";
import theme from "src/theme";
import { upload } from "src/services/anonFiles";

const InputComponent = () => {
    const [file, setFile] = useState<DocumentPicker.DocumentResult>();
    const [uploading, setUploading] = useState<boolean>(false);

    const clearFile = () => setFile(undefined);

    const selectFile = async () => {
        const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: false });

        if (result.type === "success") {
            setFile(result)
        }
    }

    const uploadFile = async () => {
        // TypeScript thing.
        if (file?.type !== "success") {
            return;
        }

        setUploading(true);

        const response = await upload(file);

        setUploading(false);
        setFile(undefined);
    }

    return (
        <View style={styles.root}>
            {/* Visible if there is a file and not uploading. */}
            {(file && !uploading) && (
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

            {/* Disabled if uploading. */}
            <Button
                style={styles.select}
                mode="outlined"
                uppercase={false}
                onPress={selectFile}
                disabled={uploading}
            >
                {/* TypeScript - Have to do '=== "success"' check or else linter complains like a baby. */}
                {file?.type === "success" ? file.name : "Tap here to upload a file"}
            </Button>

            {/* Visible if there is a file.
                Uploading - disabled, make loading. */}
            {file && (
                <Button
                    style={styles.upload}
                    mode="contained"
                    uppercase={false}
                    onPress={uploadFile}
                    icon="upload"
                    compact={true}
                    disabled={uploading}
                    loading={uploading}
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
