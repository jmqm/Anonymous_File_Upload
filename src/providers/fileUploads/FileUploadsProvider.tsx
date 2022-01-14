import { useEffect, useState } from "react";
import FileUploadsContext from "./FileUploadsContext";
import { loadFileUploads, saveFileUploads } from "./FileUploadsStorage";
import TFileUpload from "src/types/TFileUpload";

const FileUploadsProvider: React.FunctionComponent = (props) => {
    const [fileUploads, setFileUploads] = useState<TFileUpload[]>([]);

    const handleAdd = (fileUpload: TFileUpload) => {
        const updated = [fileUpload, ...fileUploads];

        saveFileUploads(updated);
        setFileUploads(updated);
    };
    
    const handleDelete = (fileUpload: TFileUpload) => {
        const updated = [...fileUploads.filter((f: TFileUpload) => (
            fileUpload.filename !== f.filename &&
            fileUpload.url !== f.url
        ))];

        saveFileUploads(updated);
        setFileUploads(updated);
    };

    useEffect(() => {
        const load = async () => {
            setFileUploads(await loadFileUploads());
        }

        load();
    }, [])

    return (
        <FileUploadsContext.Provider
            value={{
                fileUploads: fileUploads,

                onAdd: handleAdd,
                onDelete: handleDelete
            }}
        >
            {props.children}
        </FileUploadsContext.Provider>
    );
};

export default FileUploadsProvider;