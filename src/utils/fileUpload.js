import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const a = "dwny8ltbu";
cloudinary.config({
  //   cloud_name: process.env.cloudinary_CLOUD_NAME,
  //   api_key: process.env.cloudinary_API_KEY,
  //   api_secret: process.env.cloudinary_SECRET_KEY,

  cloud_name: a,
  api_key: "744539778327439",
  api_secret: "mUZImI5g8RPNMyCuwC17Yb3f5XY",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfull
    //console.log("file is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
