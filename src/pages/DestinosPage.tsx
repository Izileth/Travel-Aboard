import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { PackageCard } from '../components/PackageCard';
import type { TravelPackage, SearchData, FilterOptions } from '../data';
import { staggerContainer } from '../data';

export const DestinosPage: React.FC<{ 
    filteredPackages: TravelPackage[],
    filters: FilterOptions,
    setFilters: (filters: FilterOptions) => void,
    searchData: SearchData,
    setSearchData: (data: SearchData) => void,
    setSelectedPackage: (pkg: TravelPackage) => void
}> = ({ filteredPackages, filters, setFilters, searchData, setSearchData, setSelectedPackage }) => {

    return (
      <div className="pt-16">
        <motion.section
          className="py-16 bg-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">Nossos Destinos</h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Explore nossa coleção cuidadosamente selecionada de destinos extraordinários
              </p>
            </motion.div>
            <SearchBar searchData={searchData} setSearchData={setSearchData} />
          </div>
        </motion.section>

        <FilterBar filters={filters} setFilters={setFilters} filteredPackages={filteredPackages} />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={filteredPackages.length}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {filteredPackages.map((pkg, index) => (
                  <PackageCard key={pkg.id} package={pkg} index={index} setSelectedPackage={setSelectedPackage} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredPackages.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-medium text-gray-600 mb-2">Nenhum destino encontrado</h3>
                <p className="text-gray-500">Tente ajustar seus filtros de busca</p>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    );
};