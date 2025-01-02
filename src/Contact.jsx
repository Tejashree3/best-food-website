import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Importing FontAwesome icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      <div className="dark:bg-slate-600  dark:text-white mx-auto max-w-[1640px] h-auto p-4 py-12">
        <div className="dark:bg-slate-800 dark:text-white bg-gray-100 rounded-lg h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
         



        <div className="py-6 px-20">
            <h1 className="text-3xl font-bold dark:text-white text-gray-800 pb-6">Location</h1>
            <p className="text-2xl dark:text-white text-gray-400 pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>
            
            {/* Icons and related text */}
            <div className="flex items-start space-y-4 flex-col md:flex-col  pb-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-2xl dark:text-white text-gray-800 mr-4" />
                <p className="text-gray-800 dark:text-white text-xl">1234 Main St, Springfield, USA</p>
              </div>
              <div className="flex items-center ml-0">
                <FaPhoneAlt className="text-2xl text-gray-800 mr-4 dark:text-white" />
                <p className="dark:text-white text-gray-800 text-xl ">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-2xl dark:text-white text-gray-800 mr-4" />
                <p className="dark:text-white text-gray-800 text-xl">contact@yourdomain.com</p>
              </div>
            </div>
            
            <iframe
              className="w-full h-40 mt-4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509382!2d144.95373521559338!3d-37.81627974276857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57707b9c77e8c22!2s1234+Main+St%2C+Springfield%2C+USA!5e0!3m2!1sen!2s!4v1614033224804!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>





          <div className="py-6 px-20">
            <div className="bg-gray-100 dark:bg-slate-600 text-center py-2 dark:text-white">
              <h1 className="text-3xl text-gray-800 dark:text-white font-bold">Contact us</h1>
            </div>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block dark:text-white text-gray-700 text-lg font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block dark:text-white text-gray-700 text-lg font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact"
                  className="block dark:text-white text-gray-700 text-lg font-bold mb-2"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block dark:text-white text-gray-700 text-lg font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
  type="submit"
  className="bg-primary text-white font-bold py-2 px-4 rounded border border-white focus:outline-none focus:ring-0"
>
  Submit
</button>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
