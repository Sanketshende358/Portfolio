import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Contact() {
  const [result, setResult] = React.useState("");
  const [nameError, setNameError] = React.useState(null);

  const validateName = (event) => {
    const nameRegex = /^[a-zA-Z ]+$/;
    if (!nameRegex.test(event.target.value)) {
      setNameError("Please enter a valid name (only characters allowed)");
    } else {
      setNameError(null);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3fa9ee43-3a71-4f0a-b5a5-d2dbb278d737");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="container m-auto mt-16">
<div 
      data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-300 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-300 font-medium w-[100%]">
          Here you can contact me.
        </p>
      </div>
    
    <div>
      <form  onSubmit={onSubmit} data-aos="zoom-in" className="flex justify-center text-black items-center flex-col mt-16 gap-10 w-[50%] md:w-[80%] sm:w-[75%] mx-auto">
        <input className="px-3 h-14 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
        type="text"
        name="name"
        placeholder="Your Name"
        required
        onChange={validateName}
/>
{nameError && <span className="text-red-500">{nameError}</span>}


        <input className="px-3 h-14 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
        type="email"
        name="email"
        placeholder="example@email.com"
        required/>

        <textarea className="px-3 h-24 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
        name="message"
        placeholder="Write your message"
        required>
        </textarea>

        <button  className="bg-yellow-500 text-white font-semibold text-xl px-5 py-3 hover:scale-110 rounded-lg flex items-center justify-center space-x-1"
        type="submit">
          Submit Form
          <RiSendPlaneFill/>
          </button>

      </form>
      <span>{result}</span>

    </div>
    </div>
  );
}
