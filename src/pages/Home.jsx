import { motion } from "framer-motion";

function Home() {
    const logos = [
        "google.png",
        "netflix.png",
        "microsoft.png",
        "mailbuster.png",
        "themewagon.png",
    ];

    return (
        <div>
            <div className="flex justify-between">
                
                <motion.div
                    className="w-full md:w-80 lg:w-100 my-auto ml-auto flex flex-col items-center md:items-start"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="relative z-10 bg-gradient-to-r from-[#C381DB] to-[#4E92F9] text-3xl ms:text-[32px] lg:text-4xl font-bold bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Bootstrap 5 theme
                    </motion.h1>

                    <motion.h2
                        className="text-2xl ms:text-[26px] lg:text-[28px] text-gray-400 font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        crafted by <span className="text-gray-700">ThemeWagon</span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 text-[9px] ss:text-[10px] ms:text-[11px]   lg:text-xs"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                    >
                        ThemeWagon offers an wide array of category-oriented <br /> Free and
                        Premium Bootstrap HTML Templates and Themes.
                    </motion.p>

                    <motion.button
                        type="button"
                        className="mt-14 text-white bg-gradient-to-br from-[#C381DB] to-[#4E92F9] cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2, duration: 0.6, type: "spring", stiffness: 150 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Check Demo
                    </motion.button>
                </motion.div>

                <div className="hidden md:flex bg-[url(themewagon/home/illustration1.png)] bg-center bg-cover bg-no-repeat">
                    <div className="h-40 w-100 lg:h-80 lg:w-140 xl:h-120 xl:w-220"></div>
                </div>
            </div>



            <div className="my-10">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C381DB]/40 to-transparent" />

                <motion.div
                    className="flex flex-wrap gap-10 lg:gap-16 my-10 justify-center items-center"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                delayChildren: 2.5, 
                                staggerChildren: 0.35, 
                            },
                        },
                    }}
                >
                    {logos.map((logo, index) => (
                        <motion.img
                            key={index}
                            src={`themewagon/home/${logo}`}
                            alt={logo.replace(".png", "")}
                            className="h-4 md:h-6 lg:h-8 object-contain hover:scale-110 transition-transform"
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.5 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 3,
                                        ease: [0.16, 1, 0.3, 1]
                                    },
                                },
                            }}
                           
                        />
                    ))}
                </motion.div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C381DB]/40 to-transparent" />
            </div>

        </div>
    );
}

export default Home;
