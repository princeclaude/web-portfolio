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
            I have a strong academic foundation, a Bsc in Computer Science and an Msc in Software engineering, additionally, a certified project manager professional(PMP). My journey began with curiosity and led to a B.Sc. degree, where I explored data structures, algorithms, web technologies, and problem-solving at scale.
            Furthermore, going indepth with full focus on Software engineering and Artificial intelligence(Msc), a decision that has expanded my knowledge in software development throughtout its lifecycle.
            <br />
            <br />
            This backgroud helps me blend solid theory with practical web development — writing clean, efficient, and scalable code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicHighlight;