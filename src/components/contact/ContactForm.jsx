import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import HeaddingWithStar from "../common/HeaddingWithStar";
import { Link } from "react-router-dom";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { GiReturnArrow } from "react-icons/gi";
const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Validation Function
  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("");

    const formData = {
      user_name: formRef.current.user_name.value,
      company: formRef.current.company.value,
      user_email: formRef.current.user_email.value,
      phone: formRef.current.phone.value,
      message: formRef.current.message.value,
    };

    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    emailjs
      .sendForm(
        "service_nhxlgkn", // replace with your EmailJS Service ID
        "template_fgs6m5r", // replace with your EmailJS Template ID
        formRef.current,
        "DoUOBmJNLpDTKcSE4" // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          // console.log(result.text);
          setStatus("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          // console.log(error.text);
          setStatus("❌ Failed to send. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section className="relative">
      <form ref={formRef} onSubmit={sendEmail} noValidate>
        <div className="space-y-15">
          <div className="grid grid-cols-4 gap-10">
            {/* Name */}
            <div className="col-span-full md:col-span-2">
              <input
                name="user_name"
                placeholder="Your name*"
                type="text"
                className="block w-full border-b-2 py-5 text-2xl font-light text-white tracking-widest border-stone-500 outline-0 placeholder:text-stone-500 focus:border-[#04AA6D] hover:border-[#04AA6D]"
              />
              {errors.user_name && (
                <p className="text-red-500 text-lg tracking-wide mt-2">
                  {errors.user_name}
                </p>
              )}
            </div>

            {/* Company */}
            <div className="col-span-full md:col-span-2">
              <input
                name="company"
                placeholder="Company name*"
                type="text"
                className="block w-full border-b-2 py-5 text-2xl font-light text-white tracking-widest border-stone-500 outline-0 placeholder:text-stone-500 focus:border-[#04AA6D] hover:border-[#04AA6D]"
              />
              {errors.company && (
                <p className="text-red-500 text-lg tracking-wide mt-2">
                  {errors.company}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="col-span-full md:col-span-2">
              <input
                name="user_email"
                placeholder="Email*"
                type="email"
                className="block w-full border-b-2 py-5 text-2xl font-light text-white tracking-widest border-stone-500 outline-0 placeholder:text-stone-500 focus:border-[#04AA6D] hover:border-[#04AA6D]"
              />
              {errors.user_email && (
                <p className="text-red-500 text-lg tracking-wide mt-2">
                  {errors.user_email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="col-span-full md:col-span-2">
              <input
                name="phone"
                placeholder="Phone*"
                type="text"
                className="block w-full border-b-2 py-5 text-2xl font-light text-white tracking-widest border-stone-500 outline-0 placeholder:text-stone-500 focus:border-[#04AA6D] hover:border-[#04AA6D]"
              />
              {errors.phone && (
                <p className="text-red-500 text-lg tracking-wide mt-2">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="col-span-full">
              <textarea
                name="message"
                placeholder="A few words please*"
                rows={4}
                className="block w-full border-b-2 py-5 text-2xl font-light text-white tracking-widest border-stone-500 outline-0 placeholder:text-stone-500 focus:border-[#04AA6D] hover:border-[#04AA6D]"
              />
              {errors.message && (
                <p className="text-red-500 text-lg tracking-wide mt-2">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="col-span-full">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full px-10 py-5 text-3xl font-bold tracking-widest text-[#161616] bg-gray-300 hover:bg-white ring-1 ring-gray-300 hover:ring-white disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </div>
          {status && (
            <div className="fixed overflow-y-scroll inset-0 bg-white flex flex-col gap-10 py-12 px-8 md:px-12 items-center justify-center z-50 my-5 mx-5 sm:mx-6 :mmd:mx-10 rounded-4xl">
              <p className="w-full capitalize block text-center text-2xl font-medium leading-[1.7] tracking-widest text-black">
                {status}
              </p>
              <div className="">
                <HeaddingWithStar
                  title="✨ Thank You ✨"
                  className=" text-[#161616] text-5xl md:text-8xl font-bold tracking-wide text-pretty capitalize transition-colors"
                />
              </div>
              <p className="w-full md:w-[90%] flex justify-between items-center text-center text-xl font-normal leading-[1.7] tracking-widest text-black">
                Thank you for taking the time to visit my website! 🙏 <br />I
                truly appreciate your interest in my work and projects. Your
                visit means a lot—it inspires me to keep creating, learning, and
                sharing more. 🚀 I hope you found something useful, inspiring,
                or meaningful here. Stay tuned for upcoming projects, ideas, and
                creative work. 🌟
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  className="flex flex-col justify-start items-center font-bold leading-[1.2] tracking-wide text-pretty text-[#04AA6D] hover:underline mt-0"
                >
                  <span className="block">
                    <GiReturnArrow size={60} />{" "}
                  </span>{" "}
                  <span className="text-xl"> Back To Home</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
