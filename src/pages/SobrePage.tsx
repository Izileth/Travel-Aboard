import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../data';

export const SobrePage: React.FC = () => {
    return (
      <div className="pt-16">
        <motion.section
          className="py-16 bg-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-light mb-6 tracking-wide"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Sobre a Voyager
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Há mais de 15 anos, criamos experiências de viagem extraordinárias que conectam pessoas a culturas,
              paisagens e momentos inesquecíveis ao redor do mundo.
            </motion.p>
          </div>
        </motion.section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-light mb-6 tracking-wide">Nossa Missão</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Acreditamos que viajar é mais do que visitar lugares - é sobre transformar perspectivas,
                  criar conexões autênticas e colecionar memórias que duram para sempre.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Cada roteiro é cuidadosamente planejado por especialistas locais, garantindo experiências
                  autênticas e sustentáveis que beneficiam as comunidades que visitamos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Nossa equipe"
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-light text-center mb-12 tracking-wide"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nossos Valores
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Autenticidade",
                  description: "Experiências genuínas que respeitam a cultura local e criam conexões verdadeiras."
                },
                {
                  title: "Sustentabilidade",
                  description: "Turismo responsável que preserva destinos para as futuras gerações."
                },
                {
                  title: "Excelência",
                  description: "Atenção aos detalhes e serviço personalizado em cada etapa da jornada."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-6"
                >
                  <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    );
};
