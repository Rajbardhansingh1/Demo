import React from "react";
import CustomButton from './CustomButton';

const bonuses = [
    {
      title: "Personalized Business Growth Action Plan",
      description:
        "Receive a tailored action plan with key steps and recommended tools, based on the insights from our consultation. This roadmap will guide you through your next moves toward scaling your business.",
      iconPath:
        "M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z",
    },
    {
      title: "Marketing Checklist for Small Businesses",
      description:
        "A comprehensive checklist covering the essential marketing actions that can boost your visibility, attract new customers, and drive sales. Perfect for business owners looking to optimize their marketing efforts.",
      iconPath:
        "M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Z M41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Z",
    },
    {
      title: "Customer Engagement Toolkit",
      description:
        "This toolkit provides practical tips and proven techniques to connect with your customers, build loyalty, and create a memorable brand experience.",
      iconPath:
        "M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z",
    },
    {
      title: "Quarterly Business Health Assessment Template",
      description:
        "Use this template to evaluate your business’s growth metrics each quarter, ensuring you’re always on track to meet your goals.",
      iconPath:
        "M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Z M41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Z",
    },
    {
      title: "Access to an Exclusive Webinar Series on Business Growth",
      description:
        "Gain access to our upcoming webinar series featuring industry experts on topics like digital marketing, customer retention, and sales strategies.",
      iconPath:
        "M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z",
    },
    {
      title: "Discount on Future Services",
      description:
        "If you decide to continue working with us, enjoy an exclusive discount on any of our paid services – our way of saying thank you!",
      iconPath:
        "M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Z M41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Z",
    },
  ];

  const BookUsBonus = () => {
    return (
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col p-6 mx-4 md:mx-20 lg:mx-60">
          <h2 className="py-4 pt-10 md:pt-20 pb-6 text-3xl md:text-5xl font-bold text-center text-yellow-600">
            <span className="text-emerald-600">Exclusive Bonuses </span> – Free After Your Consultation
          </h2>
          <div className="divide-y dark:divide-gray-300">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 md:p-8 mx-auto space-y-4 md:space-y-0"
              >
                <div className="flex items-center justify-center md:col-span-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
                    <path d={bonus.iconPath}></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center md:col-span-3 md:text-left">
                  <span className="text-xs tracking-wider uppercase dark:text-violet-600">Bonus {index + 1}</span>
                  <span className="text-lg font-bold md:text-2xl">{bonus.title}</span>
                  <span className="mt-2 md:mt-4 dark:text-gray-600">{bonus.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-10">
          <CustomButton
            text="Book My Consultation + Bonuses"
            href="https://ankitbiswas0403.myinstamojo.com/checkout/v2/customer-info"
            className="px-4 md:px-6 py-2 md:py-3 text-yellow-400 bg-black shadow-lg shadow-blue-500 rounded-xl hover:shadow-yellow-500"
          />
        </div>
      </section>
    );
  };
  

export default BookUsBonus;
