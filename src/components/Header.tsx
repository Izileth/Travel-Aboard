import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Plane } from 'lucide-react';

export const Header: React.FC<{ 
    currentPage: string, 
    setCurrentPage: (page: string) => void, 
    headerOpacity: any, 
    headerBlur: any,
    mobileMenuOpen: boolean,
    setMobileMenuOpen: (open: boolean) => void
}> = ({ currentPage, setCurrentPage, headerOpacity, headerBlur, mobileMenuOpen, setMobileMenuOpen }) => {
    const ref = React.useRef(null);

    return (
      <motion.header
        ref={ref}
        style={{ opacity: headerOpacity, backdropFilter: `blur(${headerBlur}px)` }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <Plane className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-light tracking-wide text-black">VOYAGER</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['home', 'destinos', 'sobre', 'contato'].map((page, index) => (
                <motion.button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`relative text-sm font-light tracking-wide transition-colors duration-300 ${
                    currentPage === page ? 'text-black' : 'text-gray-600 hover:text-black'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                  {currentPage === page && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-black"
                      layoutId="activeTab"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-4">
                {['home', 'destinos', 'sobre', 'contato'].map((page, index) => (
                  <motion.button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left py-2 text-sm font-light tracking-wide transition-colors ${
                      currentPage === page ? 'text-black' : 'text-gray-600'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    );
};
