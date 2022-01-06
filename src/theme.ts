import { DarkTheme } from "react-native-paper";

const theme: ReactNativePaper.Theme = {
    ...DarkTheme,
    dark: true,

    roundness: 14,
    spacing: 12,

    colors: {
        ...DarkTheme.colors,
        
        primary: "#9fc6df",
        background: "#566168",
        background2: "#3c4347"
    }
}

declare global {
    namespace ReactNativePaper {
        // Used in theme.colors.
        interface ThemeColors {
            background2: string;
        }
  
        // Used in root of theme.
        interface Theme {
            spacing: number;
        }
    }
}

export default theme;