import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process_params.env.cloud_name,
    api_key: process_params.env.api_key,
    api_secret: process_params.env.api_secret, // Click 'View API Keys' above to copy your API secret
  });

  const uploadOnCloudinary = async (localFilePath) => {
    try {
      if (!localFilePath) return null;
      //upload the file on cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
      //file has been uploaded successfully
      console.log("File is uploaded on cloudinary", response.url);
      return response;
    } catch (error) {
      fs.unlinkSync(localFilePath); // remove the locally saved temp files as the uplaod operation failed
      console.log("file upload failed !!", error);
    }
  };
});

export { uploadOnCloudinary };
