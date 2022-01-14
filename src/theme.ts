import { DarkTheme } from "react-native-paper";

const theme: ReactNativePaper.Theme = {
    ...DarkTheme,
    dark: true,

    roundness: 14,
    spacing: 12,

    colors: {
        ...DarkTheme.colors,
        
        primary: "#9fc6df",
        background: "#566168", // Also used in app.json.
        background2: "#3c4347"
    }
}

export default theme;