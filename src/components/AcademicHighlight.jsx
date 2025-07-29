// src/components/AcademicHighlight.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  "/assets/pic1.jpg",
  "/assets/pic2.jpg",
  "/assets/pic3.jpg",
];

const AcademicHighlight = () => {
  return (
    <section className="px-4  max-w-6xl mx-auto">
      <div className="custom-cursor flex flex-col md:flex-row gap-8 items-center">
        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="rounded-xl shadow-lg"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            It might interest you!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I hold a B.Sc. in Computer Science, which provided a strong academic
            foundation in data structures, algorithms, web technologies, and
            scalable problem-solving. Driven by curiosity, my journey evolved
            into a focused pursuit of software engineering—deepening my
            understanding of the entire software development lifecycle and
            strengthening my ability to build efficient, maintainable systems.
            <br />
            <br />
            This backgroud helps me blend solid theory with practical web
            development — writing clean, efficient, and scalable code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicHighlight;