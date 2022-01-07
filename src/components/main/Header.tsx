import { View } from "react-native";
import { Caption, Title } from "react-native-paper";

const HeaderComponent = () => {
    return (
        <View style={styles.root}>
            <Title>Anonymous File Upload</Title>
            <Caption>Created by jmqm · Using AnonFiles.com</Caption>
        </View>
    )
}

import { StyleSheet } from "react-native";
import theme from "src/theme";

const styles = StyleSheet.create({
    root: {
        paddingVertical: 48,
        alignItems: "center",
        backgroundColor: theme.colors.background
    }
});

export default HeaderComponent;