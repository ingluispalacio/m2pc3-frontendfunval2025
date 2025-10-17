import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Service() {
  const services = [
    {
      pachIcon: "themewagon/services/icon1.png",
      title: "Send Texts Instantly",
      description:
        "Financial planning, forecasting and adjusting rapidly with customer demands and budgets.",
    },
    {
      pachIcon: "themewagon/services/icon2.png",
      title: "Better Organized",
      description:
        "Latest technology and experienced guidance, trained HR specialists to keep updated.",
    },
    {
      pachIcon: "themewagon/services/icon3.png",
      title: "Analytical Statistics",
      description:
        "Messages, real-time reminders, memos, and many more will keep your team in sync.",
    },
  ];

  return (
    <div className="bg-[url('/themewagon/background_elements.svg')] bg-cover bg-no-repeat bg-[position:center_8%]">
      <div
        className="flex flex-col justify-center items-center w-full py-8 gap-8 lg:px-50
        bg-[url('/themewagon/services/illustration1.png')] bg-no-repeat bg-[length:15%] bg-[position:15%_15%]"
      >
        
        <motion.div
          className="flex flex-col text-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-gray-700 text-lg md:text-4xl">Service</h1>
          <p className="w-full md:w-140 px-4 text-gray-400 text-xs">
            We offer youth with chances for career development in their
            practice. We also support a wide range of services to ensure client
            satisfaction
          </p>
        </motion.div>

       
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col justify-center items-center gap-6 border border-white rounded-xl px-6 py-14 h-50  
              md:h-80 lg:h-90 ${
                index % 2 === 0
                  ? "bg-white/10 backdrop-blur-md"
                  : "bg-white/40 backdrop-blur-md"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(78,146,249,0.3)",
              }}
            >
              <motion.img
                src={service.pachIcon}
                alt={service.title}
                className="w-10 h-16 md:w-14 md:h-20 lg:w-18 lg:h-24 object-contain"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              />

              <div className="flex flex-col gap-5 text-center md:text-left">
                <h1 className="text-gray-600">{service.title}</h1>
                <p className="text-gray-400 text-xs">{service.description}</p>
              </div>

              <motion.a
                className="text-[#4E92F9] w-full text-left text-xs flex items-center gap-2 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                Learn More
                <ArrowRightIcon className="w-5 h-5" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
