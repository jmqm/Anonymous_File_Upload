import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Caption } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";

const InputComponent = () => {
    const [file, setFile] = useState<DocumentPicker.DocumentResult>();

    const uploadFile = async () => {
        const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: false });

        if (result.type === "success") {
            setFile(result);
        }
    }

    return (
        <View style={styles.root}>
            <Button
                mode="outlined"
                uppercase={false}
                onPress={uploadFile}
            >
                {file?.type === "success" ? file.name : "Tap here to upload a file"}
            </Button>

            <Caption style={styles.caption}>{file && "Tap again to change file"}</Caption>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 24,
        alignItems: "center"
    },
    caption: {
        marginTop: 8
    }
});

export default InputComponent;
