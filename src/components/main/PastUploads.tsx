import { memo, useState } from "react";
import { FlatList, View, StyleSheet, Share, Vibration, Alert } from "react-native"
import { IconButton, List } from "react-native-paper";
import TFileUpload from "src/types/TFileUpload";
import * as Clipboard from "expo-clipboard";
import useFileUploads from "src/providers/fileUploads/useFileUploads";

const PastUploadsComponent = () => {
    const { fileUploads, onDelete } = useFileUploads();

    const renderItem = (_item: any) => {
        const item = _item as TFileUpload;
        const timeout = 1250;

        const vibrate = () => {
            Vibration.vibrate(25)
        };

        //#region Buttons
        
        const DeleteIcon = () => {
            const handleOnPress = () => {
                vibrate();

                const filename = item.filename.length > 27
                    ? `${item.filename.substring(0, 24)}...`
                    : item.filename;

                Alert.alert(
                    "Remove Confirmation",
                    `Are you sure you want to remove ${filename}?` +
                        "\n\nThe file will not be deleted, only removed from this list.",
                    [
                        {
                            text: "Cancel",
                            style: "cancel",
                        },
                        {
                            text: "Remove",
                            style: "default",
                            onPress: () => {
                                onDelete(item);
                            }
                        }
                    ]
                )

            };

            return (<IconButton onPress={handleOnPress} icon="delete" />);
        };
        
        const ShareIcon = () => {
            const defaultIcon = "share";
            const [icon, setIcon] = useState<string>(defaultIcon);

            const handleOnPress = async () => {
                vibrate();
                await Share.share({ message: item.url });

                setTimeout(() => setIcon(defaultIcon), timeout);
                setIcon("check");
            };

            return (<IconButton onPress={handleOnPress} icon={icon} />);
        };

        const CopyIcon = () => {
            const defaultIcon = "content-copy";
            const [icon, setIcon] = useState<string>(defaultIcon);

            const handleOnPress = () => {
                vibrate();
                Clipboard.setString(item.url);

                setTimeout(() => setIcon(defaultIcon), timeout)
                setIcon("check");
            };

            return (<IconButton onPress={handleOnPress} icon={icon} />);
        };

        const buttons = () => (
            <View style={styles.buttons}>
                <DeleteIcon />
                <ShareIcon />
                <CopyIcon />
            </View>
        );

        //#endregion

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

export default memo(PastUploadsComponent);