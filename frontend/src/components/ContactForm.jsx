import { FaPhone, FaAddressBook, FaMailBulk, FaUser } from "react-icons/fa";
import { useState } from "react";
import ContactInput from "./ContactInput";
import { submitContactForm } from "../services/apiServices";
const ContactForm = () => {
    const[showSuccessMessage, setShowSuccessMessage] = useState("");
    const[showErrorMessage, setShowErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const inputDetails = [
    { text: "Full name..", icon: <FaUser size={20} className="text-pink-600" />, type: "text", name: "name" },
    { text: "Email address..", icon: <FaMailBulk size={20} className="text-pink-600" />, type: "email", name: "email" },
    { text: "Phone number..", icon: <FaPhone size={20} className="text-pink-600" />, type: "number", name: "phone" },
    { text: "Address..", icon: <FaAddressBook size={20} className="text-pink-600" />, type: "text", name: "address" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    submitContactForm(formData)
      .then((response) => {
        if (response.success) {
          setShowSuccessMessage("Message submitted successfully!");
        } else {
          setShowErrorMessage("Error submitting message.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 place-items-center">
        {
            showSuccessMessage && (<p className="text-green-600">{showSuccessMessage}</p>)  
            
        }
        {
            showErrorMessage && (<p className="text-red-600">{showErrorMessage}</p>)
        }
        {inputDetails.map((item, index) => (
          <ContactInput
            key={index}
            text={item.text}
            icon={item.icon}
            type={item.type}
            name={item.name}
            value={formData[item.name]}
            onChange={handleChange}
          />
        ))}
      </div>

      <div className="py-2 my-4 flex items-center border-b-2 border-gray-300 justify-center">
        <textarea
          placeholder="Your Message.."
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="focus:outline-none border-[1px] rounded w-[60%] h-[150px] p-2"
        />
      </div>

      <div className="flex items-center justify-center w-full">
        <button
          type="submit"
          onAbort={()=>handleSubmit()}
          className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition duration-300 ease-in-out h-[50px]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
