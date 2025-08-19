import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Plane, Shield } from 'lucide-react';



export const Header: React.FC<{ 
    currentPage: string, 
    setCurrentPage: (page: string) => void, 
    headerOpacity: any, 
    headerBlur: any,
    mobileMenuOpen: boolean,
    setMobileMenuOpen: (open: boolean) => void,
    privacySidebarOpen: boolean,
    setPrivacySidebarOpen: (open: boolean) => void
}> = ({ currentPage, setCurrentPage, headerOpacity, headerBlur, mobileMenuOpen, setMobileMenuOpen, privacySidebarOpen, setPrivacySidebarOpen }) => {
    const ref = React.useRef(null);

    

    return (
      <>
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
                onClick={() => {setCurrentPage('home')}}
              >
                <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                  <Plane className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-light tracking-wide text-black">ELYSIUM</span>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {['inicio', 'destinos', 'sobre', 'contato'].map((page, index) => (
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
                <motion.button
                  onClick={() => setPrivacySidebarOpen(true)}
                  className="text-gray-600 hover:text-black"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Shield className="h-5 w-5" />
                </motion.button>
              </nav>

              {/* Mobile Menu Button */}
              <div className="flex items-center md:hidden space-x-2">
                <motion.button
                  onClick={() => setPrivacySidebarOpen(true)}
                  className="p-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <Shield className="h-5 w-5" />
                </motion.button>
                <motion.button
                  className="p-2"
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
          </div>
        </motion.header>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                className="fixed top-0 left-0 bottom-0 w-64 bg-white z-50 shadow-xl md:hidden"
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="h-16 flex items-center px-4 border-b border-gray-100">
                  <div onClick={() => {setCurrentPage('home')}} className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                      <Plane className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xl font-light tracking-wide text-black">ELYSIUM</span>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  {['inicio', 'destinos', 'sobre', 'contato'].map((page, index) => (
                    <motion.button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        setMobileMenuOpen(false);
                      }}
                      className={`block  w-full text-left py-3 px-4 rounded-lg text-2xl transition-colors ${
                        currentPage === page ? 'bg-gray-100 text-black text-3xl' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Privacy Sidebar */}
        <AnimatePresence>
          {privacySidebarOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setPrivacySidebarOpen(false)}
              />
              <motion.div
                className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-xl p-6 overflow-y-auto"
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Privacidade e Segurança</span>
                  </h2>
                  <button 
                    onClick={() => setPrivacySidebarOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="space-y-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">Proteção de Dados</h3>
                    <p>
                      Nós levamos a privacidade a sério. Todas as suas informações pessoais são criptografadas e protegidas conforme as regulamentações internacionais.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">Cookies</h3>
                    <p>
                      Utilizamos cookies essenciais para o funcionamento do site e cookies de análise para melhorar sua experiência. Você pode gerenciar suas preferências a qualquer momento.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">Pagamentos Seguros</h3>
                    <p>
                      Todas as transações são processadas por gateways de pagamento certificados PCI DSS. Nunca armazenamos dados completos de cartão de crédito.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <button onClick={() => { setCurrentPage('privacy'); setPrivacySidebarOpen(false); }} className="text-blue-600 hover:underline text-sm">
                      Ler política de privacidade completa
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
};