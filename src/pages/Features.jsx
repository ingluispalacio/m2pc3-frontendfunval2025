import { motion } from "framer-motion";

function Features() {
  const features = [
    { pachIcon: "themewagon/features/icon1.png", title: "Encrypted Mail", description: "A process of encrypting email communications" },
    { pachIcon: "themewagon/features/icon2.png", title: "Display Sharing", description: "With other participants, you may share your screen" },
    { pachIcon: "themewagon/features/icon3.png", title: "Private Notebook", description: "Private Notebook is an application that is protected" },
    { pachIcon: "themewagon/features/icon4.png", title: "App Assistance", description: "App Assistant runs the system quickly and effectively" },
    { pachIcon: "themewagon/features/icon5.png", title: "Multiple Printing", description: "Our canvas prints are crafted on top-notch canvas." },
    { pachIcon: "themewagon/features/icon6.png", title: "Free Sketch", description: "Create and save sketches freely with your team." },
  ];

  return (
    <div className="relative bg-[url('/themewagon/background_elements.svg')] bg-cover bg-no-repeat bg-[position:center_22%] overflow-hidden">
      
      
      <motion.div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#073EFF] to-transparent blur-3xl opacity-60"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex flex-col justify-center items-center w-full py-16 gap-8 lg:px-40">
        <div className="flex flex-col text-center gap-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 text-2xl md:text-4xl font-bold"
          >
            Features
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full md:w-140 px-4 text-gray-400 text-sm"
          >
            We provide a number of excellent features that will undoubtedly improve the user experience. We also provide a better support system.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-14">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center gap-4 rounded-xl "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={feature.pachIcon}
                alt={feature.title}
                className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="flex flex-col text-center">
                <h1 className="w-full text-gray-700 font-semibold">{feature.title}</h1>
                <p className="w-52 text-gray-500 text-xs">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
