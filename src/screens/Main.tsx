import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { setBackgroundColorAsync, setButtonStyleAsync } from "expo-navigation-bar";
import Header from "src/components/main/Header";
import Input from "src/components/main/Input";
import theme from "src/theme";
import PastUploads from "src/components/main/PastUploads";

const MainScreen = () => {
    const alternateColor = () => theme.dark ? "light" : "dark";

    useEffect(() => {
        const changeNavigationBarColors = async () => {
            await setBackgroundColorAsync(theme.colors.background);
            await setButtonStyleAsync(alternateColor());
        };

        changeNavigationBarColors();
    }, []);

    return (
        <SafeAreaView style={styles.root}>
            <StatusBar
                translucent={false}
                style={alternateColor()}
                backgroundColor={theme.colors.background}
            />

            <Header />

            <View style={styles.bottom}>
                <Input />
                <PastUploads />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
        backgroundColor: theme.colors.background2
    },
    bottom: {
        flexGrow: 1
    }
});

export default MainScreen;