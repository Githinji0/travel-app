import gridImage1 from "../assets/images/grid-pic-1.jpeg";
import gridImage2 from "../assets/images/slider-image-2.jpeg";
import gridImage3 from "../assets/images/grid-pic-7.jpeg";
import gridImage4 from "../assets/images/grid-pic-2.jpeg";
import { Button } from "./Button";
import { motion } from "framer-motion";

export const GridBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1200px] p-2  lg:w-full"
    >

      <div className="grid grid-rows-2 gap-3 w-full">

        <div
          className="relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 shadow-md bg-cover bg-center h-56 sm:h-64 md:h-72 lg:h-96"
          style={{
            backgroundImage: `url(${gridImage2})`,
          }}
        >
          <Button text="Tokyo" link="/destinations/tokyo" />
        </div>


        <div className="grid grid-cols-2 gap-3 w-full">
          <div
            className="relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 shadow-md bg-cover bg-center h-44 sm:h-52 md:h-56 lg:h-full"
            style={{
              backgroundImage: `url(${gridImage3})`,
            }}
          >
            <Button text="London" link="/destinations/london" />
          </div>

          <div
            className="relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 shadow-md bg-cover bg-center h-44 sm:h-52 md:h-56 lg:h-full"
            style={{
              backgroundImage: `url(${gridImage4})`,
            }}
          >
            <Button text="Brazil" link="/destinations/brazil" />
          </div>
        </div>
      </div>


      <div className="w-full h-full">
        <div
          className="relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 shadow-md bg-cover bg-center h-72 sm:h-80 md:h-full lg:h-full"
          style={{
            backgroundImage: `url(${gridImage1})`,
          }}
        >
          <Button text="Africa" link="/destinations/africa" />
        </div>
      </div>
    </motion.div>
  );
};
