import AsyncStorage from "@react-native-async-storage/async-storage";
import TFileUpload from "src/types/TFileUpload";

const key = "fileUploads";

export const loadFileUploads = async (): Promise<TFileUpload[]> => {
    const fileUploadsJson = await AsyncStorage.getItem(key);
    const fileUploads: TFileUpload[] = fileUploadsJson ? JSON.parse(fileUploadsJson) : [];

    return fileUploads;
};

export const saveFileUploads = async (fileUploads: TFileUpload[]) => {
    const fileUploadsJson = JSON.stringify(fileUploads);

    await AsyncStorage.setItem(key, fileUploadsJson);
};