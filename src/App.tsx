import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { registerRootComponent } from "expo";
import { setBackgroundColorAsync, setButtonStyleAsync } from "expo-navigation-bar";
import Header from "src/components/Header";
import Input from "src/components/Input";
import theme from "./theme";
import PastUploads from "src/components/PastUploads";

const App = () => {
    const alternateColor = () => theme.dark ? "light" : "dark";

    useEffect(() => {
        const changeNavigationBarColors = async () => {
            await setBackgroundColorAsync(theme.colors.background);
            await setButtonStyleAsync(alternateColor());
        };

        changeNavigationBarColors();
    }, []);

    return (
        <PaperProvider theme={theme}>
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
        </PaperProvider>
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

export default registerRootComponent(App);
