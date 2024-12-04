import React from "react";
import CustomButton from './CustomButton';

const BookUsFinal = () => {
  return (
    <>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
          Ready to Take Your Business to the Next Level?
          </h1>
          <p className="text-xl font-medium text-center">
          Don’t miss this chance to gain expert advice tailored to your business goals. Book your unique, no-obligation strategy session today and start your journey toward growth.
          </p>
          <CustomButton
          text="Book My 30-Minute Strategy Call"
          href="https://ankitbiswas0403.myinstamojo.com/checkout/v2/customer-info"
          className="text-yellow-400 bg-black shadow-blue-500 hover:shadow-yellow-500"
        />
        </div>
      </section>
    </>
  );
};

export default BookUsFinal;
