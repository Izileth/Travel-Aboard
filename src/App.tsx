import React, { useState, useMemo, type JSX, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PackageModal } from './components/PackageModal';
import { HomePage } from './pages/HomePage';
import { DestinosPage } from './pages/DestinosPage';
import { SobrePage } from './pages/SobrePage';
import { ContatoPage } from './pages/ContatoPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import type { TravelPackage, SearchData, FilterOptions } from './data';
import { travelPackages } from './data';
import { LoadingScreen } from './components/LoadingScreen';
import { Toast } from './components/Toast';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [privacySidebarOpen, setPrivacySidebarOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; show: boolean }>({ message: '', show: false });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const [searchData, setSearchData] = useState<SearchData>({
    destination: '',
    checkin: '',
    checkout: '',
    passengers: 1,
    category: '',
    priceRange: [0, 10000],
    duration: ''
  });

  const [filters, setFilters] = useState<FilterOptions>({
    showFilters: false,
    category: '',
    priceRange: [0, 10000],
    duration: '',
    rating: 0,
    difficulty: ''
  });

  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10]);

  const showToast = (message: string) => {
    setToast({ message, show: true });
    setTimeout(() => {
      setToast({ message: '', show: false });
    }, 4000);
  };

  const filteredPackages = useMemo(() => {
    return travelPackages.filter(pkg => {
      const matchesCategory = !filters.category || pkg.category === filters.category;
      const matchesPrice = pkg.price >= filters.priceRange[0] && pkg.price <= filters.priceRange[1];
      const matchesRating = pkg.rating >= filters.rating;
      const matchesDifficulty = !filters.difficulty || pkg.difficulty === filters.difficulty;
      const matchesSearch = !searchData.destination ||
        pkg.location.toLowerCase().includes(searchData.destination.toLowerCase()) ||
        pkg.country.toLowerCase().includes(searchData.destination.toLowerCase());

      return matchesCategory && matchesPrice && matchesRating && matchesDifficulty && matchesSearch;
    });
  }, [filters, searchData]);

  const renderPage = (): JSX.Element => {
    const pageVariants = {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 }
    };

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          {(() => {
            switch (currentPage) {
              case 'destinos':
                return <DestinosPage 
                    filteredPackages={filteredPackages}
                    filters={filters}
                    setFilters={setFilters}
                    searchData={searchData}
                    setSearchData={setSearchData}
                    setSelectedPackage={setSelectedPackage}
                />;
              case 'sobre':
                return <SobrePage />;
              case 'contato':
                return <ContatoPage showToast={showToast} />;
              case 'privacy':
                return <PrivacyPolicyPage setCurrentPage={setCurrentPage} />;
              default:
                return <HomePage 
                    setCurrentPage={setCurrentPage} 
                    searchData={searchData} 
                    setSearchData={setSearchData} 
                    setSelectedPackage={setSelectedPackage} 
                />;
            }
          })()}
        </motion.div>
      </AnimatePresence>
    );
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Toast 
        message={toast.message} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        headerOpacity={headerOpacity}
        headerBlur={headerBlur}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        privacySidebarOpen={privacySidebarOpen}
        setPrivacySidebarOpen={setPrivacySidebarOpen}
      />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} setPrivacySidebarOpen={setPrivacySidebarOpen} />

      {/* Enhanced Package Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <PackageModal
            package={selectedPackage}
            onClose={() => setSelectedPackage(null)}
            showToast={showToast}
          />
        )}
      </AnimatePresence>

      {/* Enhanced WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <motion.button
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 4px 20px rgba(34, 197, 94, 0.3)",
              "0 4px 30px rgba(34, 197, 94, 0.5)",
              "0 4px 20px rgba(34, 197, 94, 0.3)"
            ]
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity }
          }}
        >
          <Phone className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default App;