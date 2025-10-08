import { motion } from "framer-motion";
import React from "react";

function SocialMedia({ icons }) {
  return (
    <div className="flex gap-1 md:gap-2 lg:gap-4 justify-start items-center">
      {icons.map(({ id, element, url }) => (
        <motion.a
          key={id}
          href={url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 5 }}
          className="relative p-[2px] rounded-full bg-gradient-to-tr  from-[#C381DB] to-[#4E92F9] transition-all duration-300"
        >
          <div className="flex items-center justify-center rounded-full w-8 h-8 lg:w-12 lg:h-12 bg-[#D8E0F2]/90 backdrop-blur-md  transition-all duration-300">
            {/* Clonar y modificar el fill del SVG */}
            {React.cloneElement(element, {
              className: `${element.props.className}`,
              fill: "url(#gradient)"
            })}
            
            {/* Definir el gradiente SVG */}
            <svg width="0" height="0">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C381DB" />
                  <stop offset="100%" stopColor="#4E92F9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export default SocialMedia;