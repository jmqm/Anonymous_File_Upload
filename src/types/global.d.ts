declare global {

    // #region Theme

    namespace ReactNativePaper {
        // root
        interface Theme {
            spacing: number;
        }

        // theme.colors
        interface ThemeColors {
            background2: string;
        }
    }

    // #endregion

    // #region FormData

    interface FormDataValue {
        uri: string;
        name: string;
        type: string;
    }

    interface FormData {
        append(name: string, value: FormDataValue, fileName?: string): void;
        set(name: string, value: FormDataValue, fileName?: string): void;
    }

    // #endregion

}

export {};