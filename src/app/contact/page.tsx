"use client";
import { Linkedin } from "@/assets/icons/icons";
import { EncryptButton } from "@/components/encrypt";
import Layout from "@/layout";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/toast";
import { Check, MailWarning, X } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    surname: "",
    message: "",
    company: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) {
      addToast({
        msg: "Please enter your email",
        icon: <MailWarning className="w-4 h-4 text-yellow-600" />,
      });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      addToast({
        msg: "Please enter a valid email",
        icon: <MailWarning className="w-4 h-4 text-yellow-600" />,
      });
      return;
    }
    if (!form.message) {
      addToast({
        msg: "Please enter your message",
        icon: <MailWarning className="w-4 h-4 text-yellow-600" />,
      });
      return;
    }
    if (!form.name) {
      addToast({
        msg: "Please enter your name",
        icon: <MailWarning className="w-4 h-4 text-yellow-600" />,
      });
      return;
    }

    const templateParams = {
      name: form.name,
      surname: form.surname,
      email: form.email,
      message: form.message,
      company: form.company,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      )
      .then(
        (result) => {
          console.log(result.text);
          addToast({
            msg: "Message sent successfully!",
            icon: <Check className="w-4 h-4 text-green-600" />,
          });
          setForm({
            email: "",
            name: "",
            surname: "",
            message: "",
            company: "",
          });
        },
        (error) => {
          console.log(error.text);
          addToast({
            msg: "Failed to send message. Please try again later.",
            icon: <X className="w-4 h-4 text-red-600" />,
          });
        }
      );
  };

  const { addToast } = useToast();
  return (
    <Layout>
      <div className="bg-white py-4 font-kode">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-between items-center">
          <div className="flex flex-col gap-4 md:gap-10 md:w-[45%] md:h-[500px]">
            <section className="w-full">
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                Contact Furkan
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Whether it’s a job offer, a project, or anything that helps me
                grow.
              </p>
            </section>
            <Link href="mailto:furkanilhanresmi@gmail.com">
              <motion.section
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 1.5, delay: 1.6, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                className="relative p-4 rounded-lg bg-white border md:p-6 w-full overflow-hidden"
              >
                <motion.div
                  initial={{ translateX: "-1000px" }}
                  animate={{ translateX: "1000px" }}
                  transition={{ duration: 2.8, delay: 0.9, ease: "easeInOut" }}
                  className="absolute h-[1000px] border opacity-50 rotate-45 bg-white w-1 shadow-[10px_10px_16px_5px_rgba(147,_51,_234,_0.5)] top-[-440px]"
                ></motion.div>
                <span className="inline-block p-3 text-white rounded-lg bg-black ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Email Me Directly
                </h2>
                {/* <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Speak to our friendly team.
            </p> */}
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  furkanilhanresmi@gmail.com
                </p>
              </motion.section>
            </Link>

            <Link href="https://www.linkedin.com/in/furkan-ilhan/">
              <motion.section
                whileHover={{ scale: 1.05 }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
                className="relative p-4 rounded-lg bg-white border md:p-6 w-full overflow-hidden"
              >
                <motion.div
                  initial={{ translateX: "-1000px", scale: 1 }}
                  animate={{ translateX: "1000px", scale: 1.02 }}
                  transition={{ duration: 2.8, delay: 1.1, ease: "easeInOut" }}
                  className="absolute h-[1000px] border opacity-50 rotate-45 bg-white w-1 shadow-[10px_10px_16px_5px_rgba(147,_51,_234,_0.5)] top-[-440px]"
                ></motion.div>
                <span className="inline-block p-3 text-white rounded-lg bg-black ">
                  <Linkedin />
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Message on LinkedIn
                </h2>
                {/* <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Speak to our friendly team.
                </p> */}
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  linkedin.com/in/furkan-ilhan/
                </p>
              </motion.section>
            </Link>
          </div>
          <motion.div
            // animate={{ scale: [1, 1.2, 1] }}
            // transition={{ ease: "linear", duration: 1, repeat: Infinity }}
            className="w-[5%] text-center justify-center items-center flex"
          >
            <div className="h-[500px] border-r w-0 hidden md:flex"></div>
            <div className="h-10 w-10 pb-12 pt-10 flex md:hidden">Or</div>
          </motion.div>
          <form
            // onSubmit={(e) => handleSubmit(e)}
            action="#"
            method="POST"
            className="w-full md:w-[45%] md:h-[500px]"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  First name<span className="text-red-500">*</span>
                </label>
                <div className="mt-1.5">
                  <input
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    value={form.name}
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-1.5">
                  <input
                    onChange={(e) =>
                      setForm({ ...form, surname: e.target.value })
                    }
                    value={form.surname}
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              {/* sm:col-span-2 */}
              <div className="">
                <label
                  htmlFor="company"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Company
                </label>
                <div className="mt-1.5">
                  <input
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    value={form.company}
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              {/* sm:col-span-2 */}
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <div className="mt-1.5">
                  <input
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    value={form.email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Subject
                </label>
                <div className="mt-1.5">
                  <input
                    // onChange={(e) =>
                    //   setForm({ ...form, email: e.target.value })
                    // }
                    // value={form.email}
                    id="subject"
                    name="subject"
                    type="subject"
                    autoComplete="subject"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Message<span className="text-red-500">*</span>
                </label>
                <div className="mt-1.5">
                  <textarea
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    value={form.message}
                    id="message"
                    name="message"
                    rows={5}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              {/* <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                    <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                    <input
                      id="agree-to-policies"
                      name="agree-to-policies"
                      type="checkbox"
                      aria-label="Agree to policies"
                      className="absolute inset-0 appearance-none focus:outline-hidden"
                    />
                  </div>
                </div>
                <label
                  htmlFor="agree-to-policies"
                  className="text-sm/6 text-gray-600"
                >
                  By selecting this, you agree to our{" "}
                  <a
                    href="#"
                    className="font-semibold whitespace-nowrap text-indigo-600"
                  >
                    privacy policy
                  </a>
                  .
                </label>
              </div> */}
            </div>
            <div className="mt-8" onClick={(e) => handleSubmit(e)}>
              <EncryptButton target="Let's talk" className="w-full h-12" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
