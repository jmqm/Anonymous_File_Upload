import TFileUpload from "src/types/TFileUpload";

type TFileUploadsContext = {
    fileUploads: TFileUpload[];

    onAdd(fileUpload: TFileUpload): void;
    onDelete(fileUpload: TFileUpload): void;
}

export default TFileUploadsContext;