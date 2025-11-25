import ScrollFade from "../components/ScrollFade";
import { FaPhoneAlt, FaEnvelopeOpenText, FaMapMarkedAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 sm:px-10 lg:px-24 bg-stone-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">

        <ScrollFade>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400">
            Contact
          </h2>
        </ScrollFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE — INFO */}
          <ScrollFade>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkedAlt className="text-3xl text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">Accra, Ghana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-3xl text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-700 dark:text-gray-300">+233 540 340 066</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelopeOpenText className="text-3xl text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">ggakpetor21@gmail.com</p>
                </div>
              </div>
            </div>
          </ScrollFade>

          {/* RIGHT SIDE — CONTACT FORM */}
          <ScrollFade>
            <form
              className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                shadow-md hover:shadow-[0_0_25px_#3b82f6] transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 sm:p-4 rounded-lg bg-gray-100 dark:bg-gray-700 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 sm:p-4 rounded-lg bg-gray-100 dark:bg-gray-700 outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="mt-4 p-3 sm:p-4 rounded-lg bg-gray-100 dark:bg-gray-700 w-full outline-none"
              />

              <textarea
                placeholder="Message"
                rows="6"
                className="mt-4 p-3 sm:p-4 rounded-lg bg-gray-100 dark:bg-gray-700 w-full outline-none"
              ></textarea>

              <button
                type="submit"
                className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg 
                  shadow-[0_0_12px_#3b82f6] hover:shadow-[0_0_22px_#3b82f6] transition"
              >
                Send Message
              </button>
            </form>
          </ScrollFade>

        </div>

      </div>
    </section>
  );
}
