import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, Plane } from 'lucide-react';

export const Footer: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
    const currentYear = new Date().getFullYear();

    return (
      <motion.footer
        className="bg-black text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <Plane className="h-4 w-4 text-black" />
                </div>
                <span className="text-xl  uppercase font-light tracking-wide">Elysium</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Criando experiências de viagem extraordinárias há mais de 15 anos.
                Conectamos pessoas a culturas, paisagens e momentos inesquecíveis.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {['Inicio', 'Destinos', 'Sobre', 'Contato'].map((link) => (
                  <li key={link}>
                    <motion.button
                      onClick={() => setCurrentPage(link.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-medium mb-4">Contato</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +55 (11) 9999-9999
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  elysium@voyager.com.br
                </p>
                <p className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  www.elysium.com.br
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Elysium. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <motion.a href="#" className="hover:text-white transition-colors" whileHover={{ y: -2 }}>
                Política de Privacidade
              </motion.a>
              <motion.a href="#" className="hover:text-white transition-colors" whileHover={{ y: -2 }}>
                Termos de Uso
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    );
};
