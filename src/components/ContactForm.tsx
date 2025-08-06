// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";

// const ContactForm = () => {
//   const formRef = useRef<HTMLFormElement | null>(null);
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formRef.current) return;

//     emailjs
//       .sendForm(
//         "service_1zosj8s", // Replace with your EmailJS service ID
//         "template_gtdpqeu", // Replace with your EmailJS template ID
//         formRef.current,
//         "LPot8hBx5m35fJe_e" // Replace with your EmailJS public key
//       )
//       .then(
//         () => {
//           setSubmitted(true);
//           formRef.current?.reset();
//           setTimeout(() => setSubmitted(false), 3000);
//         },
//         (error) => {
//           console.error("Failed to send:", error.text);
//         }
//       );
//   };

//   return (
//     <div className=" flex flex-col items-center justify-center px-4 py-8">
//       <div className="w-full max-w-2xl bg-white p-8 rounded ">
//         {/* <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2> */}
//         <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//           <div className="flex flex-col">
//             <label
//               htmlFor="name"

//               className="text-sm font-medium text-gray-700 mb-1"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               required
//               className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label
//               htmlFor="email"
//               className="text-sm font-medium text-gray-700 mb-1"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               required
//               className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label
//               htmlFor="message"
//               className="text-sm font-medium text-gray-700 mb-1"
//             >
//               Message
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               rows={5}
//               required
//               className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
//           >
//             Send Message
//           </button>
//         </form>

//         {submitted && (
//           <div className="mt-4 text-green-600 text-center font-medium">
//             Message sent successfully!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

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
        "service_1zosj8s", // your service ID
        "template_gtdpqeu", // your template ID
        formRef.current,
        "LPot8hBx5m35fJe_e" // your public key
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
    <section className="flex justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="w-full max-w-3xl bg-white  rounded-lg p-8 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="demo">Request a Demo</option>
              <option value="sales">Sales Inquiry</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-6 text-green-600 text-center font-medium">
            Message sent successfully!
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;

