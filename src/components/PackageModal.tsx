import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Star } from 'lucide-react';
import type { TravelPackage } from '../data';

export const PackageModal: React.FC<{ package: TravelPackage; onClose: () => void }> = ({ package: pkg, onClose }) => {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-5 w-5" />
            </motion.button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Hero Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <motion.h2
                    className="text-3xl font-light mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {pkg.title}
                  </motion.h2>
                  <motion.p
                    className="text-lg opacity-90 flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    {pkg.location}, {pkg.country}
                  </motion.p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-lg font-medium mb-3">Sobre esta viagem</h3>
                      <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-lg font-medium mb-3">Destaques</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {pkg.highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                          >
                            <div className="w-1 h-1 bg-black rounded-full mr-3" />
                            {highlight}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-lg font-medium mb-3">Incluído no pacote</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {pkg.included.map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                          >
                            <div className="w-1 h-1 bg-green-500 rounded-full mr-3" />
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Sidebar */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {/* Price Card */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-light text-black mb-1">
                          R$ {pkg.price.toLocaleString()}
                        </div>
                        {pkg.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            R$ {pkg.originalPrice.toLocaleString()}
                          </div>
                        )}
                        <div className="text-sm text-gray-600">por pessoa</div>
                      </div>

                      <motion.button
                        className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Reservar Agora
                      </motion.button>
                    </div>

                    {/* Trip Details */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Duração</span>
                        <span className="text-sm font-medium">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Dificuldade</span>
                        <span className="text-sm font-medium capitalize">{pkg.difficulty}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Melhor época</span>
                        <span className="text-sm font-medium">{pkg.bestTime}</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-sm text-gray-600">Avaliação</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{pkg.rating} ({pkg.reviews} avaliações)</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
};
