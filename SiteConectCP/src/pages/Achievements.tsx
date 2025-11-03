import React from 'react'
import { motion } from 'framer-motion'
import {Trophy, Medal, Star, Award, Users, Calendar, MapPin} from 'lucide-react'

const Achievements = () => {
  const competitions = [
    {
      name: 'Olimpíada Brasileira de Robótica - OBR',
      year: '2024',
      position: '1º Lugar Regional',
      category: 'Modalidade Prática - Nível 2',
      description: 'Primeira colocação na competição regional com nosso robô seguidor de linha otimizado.',
      type: 'nacional',
      members: ['João Silva', 'Maria Santos', 'Pedro Costa']
    },
    {
      name: 'RoboCup Jr. Brasil',
      year: '2024',
      position: '3º Lugar',
      category: 'Soccer Lightweight',
      description: 'Terceiro lugar na categoria futebol de robôs com estratégia inovadora.',
      type: 'nacional',
      members: ['Ana Oliveira', 'Carlos Mendes', 'Lucia Ferreira']
    },
    {
      name: 'Feira de Ciências do Ceará',
      year: '2023',
      position: '2º Lugar',
      category: 'Ciências Exatas',
      description: 'Projeto de automação residencial com IoT conquistou segundo lugar estadual.',
      type: 'estadual',
      members: ['Roberto Lima', 'Fernanda Rocha']
    },
    {
      name: 'Torneio de Robótica FLL',
      year: '2023',
      position: '1º Lugar Regional',
      category: 'Design do Robô',
      description: 'Melhor design de robô na competição FIRST LEGO League regional.',
      type: 'regional',
      members: ['Gabriel Santos', 'Isabella Costa', 'Mateus Alves']
    },
    {
      name: 'Mostra Nacional de Robótica',
      year: '2023',
      position: 'Menção Honrosa',
      category: 'Categoria Teórica',
      description: 'Reconhecimento nacional pelo projeto de robô assistivo para pessoas com mobilidade reduzida.',
      type: 'nacional',
      members: ['Larissa Souza', 'Diego Martins']
    },
    {
      name: 'Winter Challenge CE',
      year: '2022',
      position: '2º Lugar',
      category: 'Robô Sumô',
      description: 'Segunda colocação na primeira competição oficial do clube.',
      type: 'estadual',
      members: ['Thiago Pereira', 'Amanda Silva', 'Rafael Oliveira']
    }
  ]

  const individualAchievements = [
    {
      name: 'João Silva',
      achievement: 'Melhor Programador Junior - OBR 2024',
      description: 'Reconhecido pela excelência em programação de sistemas autônomos.'
    },
    {
      name: 'Maria Santos',
      achievement: 'Inovação em Robótica - Feira de Ciências CE',
      description: 'Prêmio individual por solução criativa em automação.'
    },
    {
      name: 'Pedro Costa',
      achievement: 'Liderança Jovem - RoboCup Jr.',
      description: 'Reconhecimento pela liderança e trabalho em equipe.'
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'nacional':
        return 'from-yellow-400 to-orange-500'
      case 'estadual':
        return 'from-blue-400 to-purple-500'
      case 'regional':
        return 'from-green-400 to-blue-500'
      default:
        return 'from-gray-400 to-gray-600'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'nacional':
        return Trophy
      case 'estadual':
        return Medal
      case 'regional':
        return Award
      default:
        return Star
    }
  }

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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Nossas Conquistas
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Celebramos cada vitória, aprendizado e reconhecimento conquistado pelo Conect CP
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Trophy, label: 'Primeiros Lugares', value: '3', color: 'from-yellow-400 to-orange-500' },
              { icon: Medal, label: 'Pódios Conquistados', value: '8', color: 'from-blue-400 to-purple-500' },
              { icon: Star, label: 'Reconhecimentos', value: '12', color: 'from-green-400 to-blue-500' },
              { icon: Users, label: 'Membros Premiados', value: '15', color: 'from-pink-400 to-red-500' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions Section */}
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
              Competições e Prêmios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso histórico de participações e conquistas em competições de robótica
            </p>
          </motion.div>

          <div className="space-y-8">
            {competitions.map((competition, index) => {
              const IconComponent = getTypeIcon(competition.type)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex items-center mb-4 lg:mb-0">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${getTypeColor(competition.type)} rounded-full mr-4`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{competition.name}</h3>
                          <div className="flex items-center text-gray-600 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="mr-4">{competition.year}</span>
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="capitalize">{competition.type}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`inline-block bg-gradient-to-r ${getTypeColor(competition.type)} text-white px-4 py-2 rounded-full font-semibold mb-2`}>
                          {competition.position}
                        </div>
                        <div className="text-gray-600 font-medium">{competition.category}</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{competition.description}</p>

                    <div className="border-t pt-4">
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="font-medium mr-2">Equipe:</span>
                        <span>{competition.members.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Individual Achievements */}
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
              Reconhecimentos Individuais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos membros também brilham individualmente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {individualAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{achievement.name}</h3>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-blue-600 mb-3">
                  {achievement.achievement}
                </h4>
                
                <p className="text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Achievements