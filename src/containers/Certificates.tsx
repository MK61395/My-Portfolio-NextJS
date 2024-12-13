'use client';
import { motion } from 'framer-motion';
import { certificates } from '@/lib/content/certificates';
import Image from 'next/image'; // Import Image from next/image

const Certificates = () => {
  return (
    <section id="certificates" className="section">
      <h2 className="heading-secondary text-center">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 shadow-lg transition-all duration-300"
          >
            {/* Replace <img> with <Image /> */}
            <Image
              src={cert.image}
              alt={cert.name}
              width={500}
              height={
                cert.name === 'Top 25th Percentile Score Across Pakistan'
                  ? 350
                  : 300
              }
              className="w-full object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105"
            />

            <h3 className="text-xl font-bold mb-2 transition-colors duration-300 hover:text-accent">
              {cert.name}
            </h3>
            <p className="text-primary mb-2">{cert.organization}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {cert.description}
            </p>
            <p className="text-sm text-gray-500">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
