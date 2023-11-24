import axiosInstance from "../utils";

const uploadImage = async (imageFormData) => {
  try {
    const response = await axiosInstance.post('/image', imageFormData);
    if (response.data.status === 'Success Upload') {
      console.log('Image uploaded successfully. Image URL:', response.data.description);
      return response.data.description;  // Return the image URL or handle it as needed
    } else {
      console.error('Failed to upload image:', response.data.description);
      // Handle the error as needed
    }
  } catch (error) {
    console.error('Error uploading image:', error.message);
    // Handle the error as needed
  }
};

export default uploadImage;
