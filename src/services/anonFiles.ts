import * as DocumentPicker from "expo-document-picker";
import TFileUploadResponse from "src/types/TFileUploadResponse";

const baseUrl = "https://api.anonfiles.com";

export const upload = async (file: DocumentPicker.DocumentResult): Promise<TFileUploadResponse> => {
    const url = `${baseUrl}/upload`

    // Required because of TypeScript.
    if (file.type === "cancel") {
        return { success: false } as TFileUploadResponse;
    }

    const formData = new FormData();
    formData.append("file", {
        uri: file.uri,
        name: file.name,
        type: file.mimeType!
    });

    const response = await sendXmlHttpRequest(formData, url);
    return response;
};

// #region Helper Functions

const sendXmlHttpRequest = async (data: any, url: string): Promise<TFileUploadResponse> => {
    // Using this instead of fetch because fetch doesnt work w/ FormData.
    // At least for Android maybe?

    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== xhr.DONE) {
                return;
            }
    
            if (xhr.status === 200) {
                resolve({
                    success: true,
                    message: JSON.parse(xhr.responseText).data.file.url.short
                } as TFileUploadResponse);
            } else {
                reject({
                    success: false,
                    message: `Request Failed: ${xhr.responseText}`
                } as TFileUploadResponse);
            }
        };

        xhr.open("POST", url);

        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "multipart/form-data");

        xhr.send(data);
    });
}

// #endregion
