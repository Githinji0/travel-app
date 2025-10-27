import axios from "axios";

const BASE_URL = "https://2ed74eecdcfc.ngrok-free.app/api/";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
   },
});

export const getDestinations = async () => {
  try {
    const response = await api.get("destinations/");
    console.log(response.data, "This Is destinations:");
    return response.data;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return [];
  }
};
export const getTours = async () => {
  try {
    const response = await api.get("tours/");
    console.log(response.data, "This Is tours:");
    return response.data;
  } catch (error) {
    console.error("Error fetching tours:", error);
    return [];
  }
};
export const submitContactForm = async (formData) => {
    try {
        const response = await api.post("contacts/", formData);
        console.log("Contact form submitted:", response.data);
        return {
            success: true,
            message: response.data.message || "Message sent successfully!",
            data: response.data
        };
    } catch (error) {
        console.error("Error submiting contact form:", error);
        return {
            success: false,
            message: error.response?.data?.message || "Failed to send message. Please try again.",
            errors: error.response?.data || {}
        };
    }
};


export default api;
