import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-6 right-6 z-[100] flex items-center p-4 max-w-sm w-full bg-white rounded-lg shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="flex-shrink-0">
            <CheckCircle className="h-6 w-6 text-zinc-950" />
          </div>
          <div className="ml-3 mr-4">
            <p className="text-sm font-medium text-gray-800">{message}</p>
          </div>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-100 ml-auto">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};