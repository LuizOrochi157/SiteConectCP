import React from 'react'
import { motion } from 'framer-motion'
import {Calendar, Users, Target, Heart, Lightbulb, Zap} from 'lucide-react'

const About = () => {
  const milestones = [
    {
      year: '2022',
      title: 'Fundação do Clube',
      description: 'O Conect CP foi criado por um grupo de estudantes apaixonados por tecnologia e robótica na EREFEM Caio Pereira.'
    },
    {
      year: '2022',
      title: 'Primeiro Projeto',
      description: 'Desenvolvimento do nosso primeiro robô seguidor de linha, que participou da competição regional.'
    },
    {
      year: '2023',
      title: 'Expansão do Clube',
      description: 'Crescimento para 25+ membros ativos e participação em múltiplas competições estaduais.'
    },
    {
      year: '2024',
      title: 'Reconhecimento Nacional',
      description: 'Conquista de prêmios em competições nacionais e estabelecimento de parcerias com universidades.'
    }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Buscamos sempre soluções criativas e inovadoras para os desafios tecnológicos.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalhamos em equipe, compartilhando conhecimentos e experiências.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Target,
      title: 'Excelência',
      description: 'Comprometemo-nos com a qualidade em todos os nossos projetos e competições.',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Nossa paixão pela tecnologia e educação move todos os nossos esforços.',
      color: 'from-pink-400 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nossa História
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça a jornada do Conect CP e como nos tornamos referência em robótica educacional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Como Tudo Começou
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  O <strong>Conect CP</strong> nasceu em 2022 na EREFEM Caio Pereira, fruto da paixão de um grupo de estudantes por tecnologia e robótica. O que começou como encontros informais para discutir projetos rapidamente se transformou em um clube organizado e reconhecido.
                </p>
                <p>
                  Nossa missão sempre foi clara: democratizar o acesso ao conhecimento em robótica e tecnologia, criando um ambiente colaborativo onde estudantes podem explorar, experimentar e inovar.
                </p>
                <p>
                  Hoje, somos mais de 25 membros ativos, com projetos que vão desde robôs autônomos até sistemas de automação residencial, sempre focando no aprendizado prático e na solução de problemas reais.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Zap className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-bold">Missão</h3>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  Formar jovens inovadores através da robótica educacional, desenvolvendo habilidades técnicas e sociais essenciais para o futuro.
                </p>
                
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 mr-3" />
                  <h4 className="text-xl font-semibold">Visão</h4>
                </div>
                <p className="leading-relaxed">
                  Ser referência em robótica educacional no Ceará, inspirando uma nova geração de cientistas e engenheiros.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Marcos importantes na história do Conect CP
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-blue-600 font-semibold">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam todas as nossas ações e decisões
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About