import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import NewsLetter from "../../components/newsletter/NewsLetter";

const EnrolNow = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    zipcode: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <div className="bg-[#071430cc]">
        <div>
          <Navbar />
        </div>

        <div className="enrolbg flex justify-center items-center h-full">
          <div className="bg-white bg-gradient-to-b from-gray-500 via via-chocolate-200 via-black to-gray-800 bg-opacity-80 py-16 px-16 my-8 rounded-lg shadow-md grid justify-center">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">
              Registration Form
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="firstName" className="text-white font-semibold">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-3 py-2 border rounded outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lastName" className="text-white font-semibold">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-3 py-2 border rounded outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="text-white font-semibold"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full px-3 py-2 border rounded outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="text-white font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="country" className="text-white font-semibold">
                  Country:
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="w-full px-3 py-2 border rounded outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="zipcode" className="text-white font-semibold">
                  Zipcode:
                </label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  className="w-full px-3 py-2 border rounded outline-none"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 w-full rounded text-white font-bold py-2 px-5 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <NewsLetter />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

// #1a1831

export default EnrolNow;
