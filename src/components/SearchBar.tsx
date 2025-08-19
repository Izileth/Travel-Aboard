import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import type{ SearchData } from '../data';

export const SearchBar: React.FC<{ 
    searchData: SearchData, 
    setSearchData: (data: SearchData) => void,
    setCurrentPage?: (page: string) => void
}> = ({ searchData, setSearchData, setCurrentPage }) => {
    const today = new Date().toISOString().split('T')[0];

    const handleCheckinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newCheckin = e.target.value;
      const newSearchData = { ...searchData, checkin: newCheckin };
      if (searchData.checkout && newCheckin > searchData.checkout) {
        newSearchData.checkout = '';
      }
      setSearchData(newSearchData);
    };

    return (
      <motion.div
        className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 max-w-6xl mx-auto z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Destination */}
          <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
            <label className="text-xs font-medium text-gray-600 uppercase tracking-wide">Destino</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Para onde?"
                value={searchData.destination}
                onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 text-sm"
              />
            </div>
          </motion.div>

          {/* Check-in */}
          <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
            <label className="text-xs font-medium text-gray-600 uppercase tracking-wide">Check-in</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="date"
                value={searchData.checkin}
                min={today}
                onChange={handleCheckinChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 text-sm"
              />
            </div>
          </motion.div>

          {/* Check-out */}
          <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
            <label className="text-xs font-medium text-gray-600 uppercase tracking-wide">Check-out</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="date"
                value={searchData.checkout}
                min={searchData.checkin || today}
                onChange={(e) => setSearchData({...searchData, checkout: e.target.value})}
                disabled={!searchData.checkin}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 text-sm disabled:bg-gray-100"
              />
            </div>
          </motion.div>

          {/* Passengers */}
          <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
            <label className="text-xs font-medium text-gray-600 uppercase tracking-wide">Passageiros</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select
                value={searchData.passengers}
                onChange={(e) => setSearchData({...searchData, passengers: parseInt(e.target.value)})}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 text-sm appearance-none"
              >
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'pessoa' : 'pessoas'}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Search Button */}
          <motion.div className="flex items-end">
            <motion.button
              onClick={() => setCurrentPage && setCurrentPage('destinos')}
              className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Search className="h-4 w-4" />
              <span>Buscar</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    );
};
