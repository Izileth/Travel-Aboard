import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import type { FilterOptions } from '../data';

export const FilterBar: React.FC<{ 
    filters: FilterOptions, 
    setFilters: (filters: FilterOptions) => void,
    filteredPackages: any[]
}> = ({ filters, setFilters, filteredPackages }) => {
    return (
      <motion.div
        className="bg-white border-b border-gray-100 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => setFilters({...filters, showFilters: !filters.showFilters})}
              className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filtros</span>
            </motion.button>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>{filteredPackages.length} pacotes encontrados</span>
            </div>
          </div>

          <AnimatePresence>
            {filters.showFilters && (
              <motion.div
                className="mt-4 pt-4 border-t border-gray-100"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide">Categoria</label>
                    <select
                      value={filters.category}
                      onChange={(e) => setFilters({...filters, category: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-1 focus:ring-black focus:border-black transition-all"
                    >
                      <option value="">Todas</option>
                      <option value="romance">Romance</option>
                      <option value="adventure">Aventura</option>
                      <option value="cultural">Cultural</option>
                      <option value="beach">Praia</option>
                      <option value="nature">Natureza</option>
                      <option value="family">Família</option>
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide">
                      Preço até R$ {filters.priceRange[1].toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="10000"
                      step="500"
                      value={filters.priceRange[1]}
                      onChange={(e) => setFilters({...filters, priceRange: [0, parseInt(e.target.value)]})}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide">Avaliação mínima</label>
                    <select
                      value={filters.rating}
                      onChange={(e) => setFilters({...filters, rating: parseFloat(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-1 focus:ring-black focus:border-black transition-all"
                    >
                      <option value="0">Qualquer</option>
                      <option value="4.0">4.0+</option>
                      <option value="4.5">4.5+</option>
                      <option value="4.8">4.8+</option>
                    </select>
                  </div>

                  {/* Difficulty Filter */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide">Dificuldade</label>
                    <select
                      value={filters.difficulty}
                      onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-1 focus:ring-black focus:border-black transition-all"
                    >
                      <option value="">Qualquer</option>
                      <option value="easy">Fácil</option>
                      <option value="medium">Médio</option>
                      <option value="hard">Difícil</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
};
