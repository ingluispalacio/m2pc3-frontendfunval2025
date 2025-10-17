import { motion } from "framer-motion";

function OursProjects() {
  const projects = [
    { pachImg1: "themewagon/projects/image1.png", pachImg2: "themewagon/projects/image2.png" },
    { pachImg1: "themewagon/projects/image3.png", pachImg2: "themewagon/projects/image4.png" },
    { pachImg1: "themewagon/projects/image5.png", pachImg2: "themewagon/projects/image6.png" },
  ];

  return (
    <div className="relative bg-[url('/themewagon/background_elements.svg')] bg-cover bg-no-repeat bg-[position:center_40%] overflow-hidden">

      <motion.div
        className="absolute z-0 bg-[radial-gradient(circle_at_center,_#0766FF5D_0%,_transparent_70%)] 
                   blur-3xl rounded-full w-[600px] h-[600px] -top-20 right-20"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute z-0 bg-[radial-gradient(circle_at_center,_#FFB0075D_0%,_transparent_70%)] 
                   blur-3xl rounded-full w-[600px] h-[600px] -bottom-30 left-12"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.img
        src="themewagon/projects/worm2.png"
        alt="worm"
        className="w-10 md:w-12 lg:w-14 absolute right-23 top-1/2 -translate-y-1/2 z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col justify-center items-center w-full py-8 gap-8 lg:px-50">
        
        <motion.div
          className="flex flex-col text-center gap-4 text-[#0766ff5d]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-gray-700 text-2xl md:text-4xl">Ours Projects</h1>
          <p className="w-full md:w-140 px-4 text-gray-400 text-sm">
            A project is a single or team activity, combining research and design with best effort.
            Here are some of our team's projects.
          </p>
        </motion.div>

        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-250 rounded-xl border border-white p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((feature, index) => {
            const insert = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className="flex md:flex-col justify-center items-center gap-4"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className={`w-full ${insert ? "h-full md:h-[30%]" : "h-full md:h-[70%]"}`}>
                  <motion.img
                    src={feature.pachImg1}
                    alt={`img-${index}-1`}
                    className="w-full h-full object-cover rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  />
                </div>
                <div className={`w-full ${insert ? "h-full md:h-[70%]" : "h-full md:h-[30%]"}`}>
                  <motion.img
                    src={feature.pachImg2}
                    alt={`img-${index}-2`}
                    className="w-full h-full object-cover rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        
        <motion.button
          className="relative p-[1px] rounded-2xl bg-white cursor-pointer group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C381DB] to-[#4E92F9] p-[2px]" />
          <div className="relative bg-white rounded-2xl py-2 px-4">
            <span className="bg-gradient-to-r from-[#C381DB] to-[#4E92F9] bg-clip-text text-transparent font-semibold">
              View More
            </span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}

export default OursProjects;
