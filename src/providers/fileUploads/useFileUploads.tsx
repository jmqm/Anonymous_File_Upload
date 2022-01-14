import { useContext } from "react";
import FileUploadsContext from "./FileUploadsContext";

const useFileUploads = () => useContext(FileUploadsContext);

export default useFileUploads;