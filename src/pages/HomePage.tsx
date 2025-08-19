import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SearchBar } from '../components/SearchBar';
import { PackageCard } from '../components/PackageCard';
import { travelPackages, staggerContainer, fadeInUp } from '../data';
import type { SearchData, TravelPackage } from '../data';

export const HomePage: React.FC<{ 
    setCurrentPage: (page: string) => void,
    searchData: SearchData,
    setSearchData: (data: SearchData) => void,
    setSelectedPackage: (pkg: TravelPackage) => void
}> = ({ setCurrentPage, searchData, setSearchData, setSelectedPackage }) => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
      <div className="pt-16">
        {/* Hero Section */}
        <motion.section
          ref={ref}
          className="relative h-screen flex items-center justify-center overflow-hidden z-10"
          style={{ y }}
        >
          <div className="absolute inset-0 z-0">
            {!isMobile ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover -z-10"
                poster="/hero-poster.jpg"
              >
                <source src="https://v1.pinimg.com/videos/mc/720p/2e/42/a4/2e42a453866e96007e5cbff08a0f631c.mp4" type="video/mp4" />
                <source src="https://v1.pinimg.com/videos/mc/720p/2e/42/a4/2e42a453866e96007e5cbff08a0f631c.mp4" type="video/webm" />
                <img src="/hero-fallback.jpg" alt="Hero Background" />
              </video>
            ) : (
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover -z-10"
                poster="/hero-poster.jpg"
              >
                <source src="https://v1.pinimg.com/videos/mc/720p/2e/42/a4/2e42a453866e96007e5cbff08a0f631c.mp4" type="video/mp4" />
                <source src="https://v1.pinimg.com/videos/mc/720p/2e/42/a4/2e42a453866e96007e5cbff08a0f631c.mp4" type="video/webm" />
                <img src="/hero-fallback.jpg" alt="Hero Background" />
              </video>
            )}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <motion.h1
              className="text-5xl md:text-7xl font-light mb-6 tracking-wide"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              EXPLORE
              <br />
              <span className="text-3xl md:text-5xl">O EXTRAORDINÁRIO</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-8 opacity-90 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Descubra destinos únicos e viva experiências inesquecíveis com nossos roteiros cuidadosamente planejados
            </motion.p>

            <motion.button
              className="bg-white text-black px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-medium tracking-wide"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('destinos')}
            >
              DESCOBRIR DESTINOS
            </motion.button>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-px h-16 bg-white/50"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.section>

        {/* Search Section */}
        <motion.section className="py-16 bg-gray-50 mt-96">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">Planeje sua próxima aventura</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Use nossa busca inteligente para encontrar o destino perfeito para você
              </p>
            </motion.div>
            <SearchBar searchData={searchData} setSearchData={setSearchData} setCurrentPage={setCurrentPage} />
          </div>
        </motion.section>

        {/* Featured Packages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">Destinos em destaque</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Selecionamos os melhores destinos para você viver experiências únicas
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {travelPackages.slice(0, 6).map((pkg, index) => (
                <PackageCard key={pkg.id} package={pkg} index={index} setSelectedPackage={setSelectedPackage} />
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('destinos')}
              >
                VER TODOS OS DESTINOS
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { number: "50+", label: "Destinos únicos" },
                { number: "10k+", label: "Viajantes felizes" },
                { number: "15", label: "Anos de experiência" },
                { number: "4.9", label: "Avaliação média" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="space-y-2"
                >
                  <div className="text-4xl md:text-5xl font-light">{stat.number}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    );
};