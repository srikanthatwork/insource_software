import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_ac5pwik", // Replace with your EmailJS service ID
        "template_gtdpqeu", // Replace with your EmailJS template ID
        formRef.current,
        "LPot8hBx5m35fJe_e" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSubmitted(true);
          formRef.current?.reset();
          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          console.error("Failed to send:", error.text);
        }
      );
  };

  return (
    <div className=" flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white p-8 rounded shadow">
        {/* <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2> */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-4 text-green-600 text-center font-medium">
            Message sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
