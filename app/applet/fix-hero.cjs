const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.tsx', 'utf8');

c = c.replace(
  'className="flex flex-col items-start text-left space-y-8 relative z-10 w-full max-w-2xl pt-6 md:pt-12 lg:pt-16"',
  'className="flex flex-col items-start text-left space-y-6 md:space-y-8 relative z-10 w-full max-w-2xl pt-2 md:pt-6 lg:pt-8"'
);

c = c.replace(
  `            {/* Right Content - Visual/Image */}
            <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] hidden md:flex justify-center md:justify-end items-end mt-4 md:mt-0 pt-10">
              {/* Image of smiling woman */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                className="absolute inset-0 flex justify-center md:justify-end items-end overflow-visible origin-bottom"
              >
                 <motion.img 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    src={heroImage} 
                    alt="Professional Indian Woman Filing Taxes"
                    className="object-contain h-full w-auto max-w-full mix-blend-darken scale-125 sm:scale-125 md:scale-150 lg:scale-[1.8] origin-bottom right-0 absolute drop-shadow-2xl"
                 />
              </motion.div>
            </div>`,
  `            {/* Right Content - Visual/Image */}
            <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] hidden md:flex justify-center md:justify-end items-end mt-4 lg:mt-0">
              {/* Image of smiling woman */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 flex justify-center lg:justify-end items-end overflow-visible"
              >
                 <img 
                    src={heroImage} 
                    alt="Professional Indian Woman Filing Taxes"
                    className="object-contain h-full w-auto max-w-full mix-blend-darken scale-110 sm:scale-125 lg:scale-150 origin-bottom right-0 absolute"
                 />
              </motion.div>
            </div>`
);

fs.writeFileSync('src/pages/Home.tsx', c, 'utf8');
