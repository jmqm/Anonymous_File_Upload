import { createContext } from "react";
import TFileUploadsContext from "./TFileUploadsContext";
import TFileUpload from "src/types/TFileUpload";

const FileUploadsContext = {
    fileUploads: new Array<TFileUpload>(),

    onAdd: () => { },
    onDelete: () => { },
} as TFileUploadsContext;

export default createContext<TFileUploadsContext>(FileUploadsContext);
