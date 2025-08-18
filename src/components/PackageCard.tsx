import React from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import type { TravelPackage } from '../data';
import { Clock } from './Clock';

export const PackageCard: React.FC<{ 
    package: TravelPackage; 
    index: number;
    setSelectedPackage: (pkg: TravelPackage) => void;
}> = ({ package: pkg, index, setSelectedPackage }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        onClick={() => setSelectedPackage(pkg)}
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Price Badge */}
          <motion.div
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <span className="text-sm font-medium text-black">R$ {pkg.price.toLocaleString()}</span>
          </motion.div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs font-medium text-white uppercase tracking-wide">{pkg.category}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-medium text-black mb-1 group-hover:text-gray-700 transition-colors">
                {pkg.title}
              </h3>
              <p className="text-sm text-gray-600 flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {pkg.location}, {pkg.country}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {pkg.duration}
              </span>
              <span className="flex items-center">
                <Star className="h-3 w-3 mr-1 fill-current text-yellow-400" />
                {pkg.rating} ({pkg.reviews})
              </span>
            </div>

            <motion.button
              className="text-xs font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-wide"
              whileHover={{ x: 4 }}
            >
              Ver detalhes →
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
};
