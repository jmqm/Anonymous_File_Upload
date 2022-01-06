import React from "react";
import { FlatList, View, StyleSheet, Share, Text } from "react-native"
import { IconButton, List } from "react-native-paper";
import TFileUpload from "src/types/TFileUpload";
import * as Clipboard from "expo-clipboard";

const PastUploadsComponent = () => {
    const fileUploads: TFileUpload[] = [];
    for (let index = 0; index < 10; index++) {
        const fileUpload = {
            filename: `The File ${index}`,
            url: `https://anonfiles.com/thefile${index}`
        } as TFileUpload;

        fileUploads.push(fileUpload);
    }

    const renderItem = (_item: any) => {
        const item = _item as TFileUpload;

        const copy = () => Clipboard.setString(item.url);
        const share = async () => await Share.share({ message: item.url })

        const buttons = () => (
            <View style={styles.buttons}>
                <IconButton onPress={share} icon="share" />
                <IconButton onPress={copy} icon="content-copy" />
            </View>
        )

        return (
            <List.Item
                key={item.url}
                title={item.filename}
                description={item.url}
                titleNumberOfLines={1}
                descriptionNumberOfLines={1}
                right={buttons}
            />
        )
    }
    
    return (
        <View style={styles.root}>
            <FlatList
                data={fileUploads}
                keyExtractor={(item) => item.url}
                renderItem={({ item }: any) => renderItem(item)}
                overScrollMode="never"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    buttons: {
        flexDirection: "row",
        alignSelf: "center",
        opacity: 0.25
    }
});

export default PastUploadsComponent;