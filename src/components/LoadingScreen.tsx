import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[100]">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center space-x-4"
      >
        <div className="w-16 h-16 bg-black rounded-md flex items-center justify-center">
          <Plane className="h-8 w-8 text-white" />
        </div>
        <span className="text-4xl font-light tracking-wider text-black">ELYSIUM</span>
      </motion.div>
      <div className="absolute bottom-10 w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-black"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};
