const cloud_name = "dhtz19ebk";
const upload_preset = "socialmedia";

const uploadToCloud = async (pics, fileType) => {
  if (pics && fileType) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      return file.url;
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("Error : No file selected or file type not provided.");
    return null;
  }
};

export default uploadToCloud;
