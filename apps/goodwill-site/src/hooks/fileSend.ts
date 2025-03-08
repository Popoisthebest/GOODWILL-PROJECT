import { storage } from "../firebase/firebaseConfig.ts";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadFileToStorage = async (
  file: File,
  path: string,
): Promise<string> => {
  if (!file) return "";
  const fileRef = ref(storage, path);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};

export const fileSend = async (
  file: File,
  fileType: string,
  applicationId: string,
) => {
  const fileUrl = file
    ? await uploadFileToStorage(
        file,
        `/${applicationId}/${fileType}/${file.name}`,
      )
    : "";
  return {
    fileUrl,
  };
};


