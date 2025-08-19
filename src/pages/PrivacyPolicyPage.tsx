import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Cookie, Server, Mail } from 'lucide-react';

export const PrivacyPolicyPage: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {

    const sections = [
        {
            icon: <Shield size={24} className="text-blue-500" />,
            title: "Introdução",
            content: `A Elysium ("nós", "nosso") opera o site www.elysium.com.br (o "Serviço"). Esta página informa sobre nossas políticas relativas à coleta, uso e divulgação de dados pessoais quando você usa nosso Serviço e as escolhas que você associou a esses dados.`
        },
        {
            icon: <Lock size={24} className="text-green-500" />,
            title: "Coleta e Uso de Informações",
            content: `Coletamos vários tipos de informações para diversos fins, para fornecer e melhorar nosso Serviço para você. Os dados podem incluir, mas não se limitam a: Endereço de e-mail, Nome e sobrenome, Número de telefone e Cookies.`
        },
        {
            icon: <Server size={24} className="text-purple-500" />,
            title: "Uso de Dados",
            content: `A Elysium usa os dados coletados para diversos fins: Fornecer e manter nosso Serviço, notificá-lo sobre alterações, permitir que você participe de recursos interativos, fornecer suporte ao cliente, coletar análises para melhoria e monitorar o uso do nosso Serviço.`
        },
        {
            icon: <Cookie size={24} className="text-orange-500" />,
            title: "Cookies",
            content: `Utilizamos cookies e tecnologias de rastreamento semelhantes para rastrear a atividade em nosso Serviço e manter certas informações. Você pode instruir seu navegador a recusar todos os cookies ou a indicar quando um cookie está sendo enviado.`
        },
        {
            icon: <Mail size={24} className="text-red-500" />,
            title: "Contato",
            content: `Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: privacidade@elysium.com.br.`
        }
    ];

    return (
      <div className="pt-16 bg-gray-50 min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.button
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-black transition-colors mb-8"
                whileHover={{ x: -4 }}
              >
                <ArrowLeft size={16} />
                <span>Voltar ao Início</span>
              </motion.button>

              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">Política de Privacidade</h1>
                <p className="text-lg text-gray-600">Última atualização: 19 de Agosto de 2025</p>
              </div>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 mt-1">
                        {section.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-medium mb-3">{section.title}</h2>
                        <p className="text-gray-600 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    );
};