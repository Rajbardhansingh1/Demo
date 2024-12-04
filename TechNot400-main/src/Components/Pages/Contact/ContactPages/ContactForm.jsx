import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="overflow-hidden font-poppins">
        <div className="h-0.5 sm:mx-32 mx-10 bg-slate-200"></div>
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 sm:px-8 sm:py-32 py-12 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
          <div className="flex flex-col justify-between">
            <div className="space-y-2 px-10">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-yellow-600">
                Let's talk!
              </h2>
              <div className="dark:text-gray-600">
                Send you Queries..We're definitely gonna solve them & want to
                see you happy.
              </div>
            </div>
            <img
              src="https://media.istockphoto.com/id/1153820595/vector/pretty-woman-is-sitting-at-her-laptop-and-chatting-with-handsome-man-with-huge-phone-and.jpg?s=612x612&w=0&k=20&c=1LFTLb-Lw84oG4czAokP1vtFwj_G_z5xBpuZkHlzjAA="
              alt=""
              className="p-6"
            />
          </div>
          <form noValidate="" className="space-y-6 px-3">
            <div>
              <label htmlFor="name" className="text-sm font-bold">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full sm:p-3 p-1.5 mt-2 rounded dark:bg-gray-100 border-2 border-yellow-700"
                fdprocessedid="d6385f"
              />
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-bold">
                Company name
              </label>
              <input
                id="company"
                type="text"
                placeholder=""
                className="w-full sm:p-3 p-1.5 mt-2 rounded dark:bg-gray-100 border-2 border-yellow-700"
                fdprocessedid="d6385f"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-bold">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full sm:p-3 p-1.5 mt-2 rounded dark:bg-gray-100 border-2 border-yellow-700"
                fdprocessedid="c36y4m"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-bold">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full sm:p-3 p-1.5 mt-2 rounded dark:bg-gray-100 border-2 border-yellow-700"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full sm:p-3 p-1.5 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50 bg-blue-300"
              fdprocessedid="9n75he"
            >
              Send Message
            </button>
          </form>
        </div>
      <div className="h-0.5 sm:mx-32 mx-10 bg-slate-200"></div>
      </div>
    </>
  );
};

export default ContactForm;
