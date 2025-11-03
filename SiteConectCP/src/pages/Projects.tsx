import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Code, Cpu, Zap, Eye, Github, Play, Calendar, Users, Tag} from 'lucide-react'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('todos')

  const categories = [
    { id: 'todos', name: 'Todos os Projetos' },
    { id: 'autonomos', name: 'Robôs Autônomos' },
    { id: 'iot', name: 'IoT & Automação' },
    { id: 'competicao', name: 'Competição' },
    { id: 'educacional', name: 'Educacional' }
  ]

  const projects = [
    {
      id: 1,
      title: 'RoboLine Pro',
      category: 'competicao',
      description: 'Robô seguidor de linha otimizado para competições da OBR com algoritmos avançados de navegação e detecção de obstáculos.',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg',
      technologies: ['Arduino', 'C++', 'Sensores Infravermelhos', 'PID Controller'],
      status: 'Concluído',
      year: '2024',
      team: ['João Silva', 'Maria Santos', 'Pedro Costa'],
      achievements: ['1º Lugar OBR Regional 2024'],
      features: [
        'Navegação autônoma com PID',
        'Detecção de obstáculos em tempo real',
        'Sistema de calibração automática',
        'Interface de monitoramento'
      ]
    },
    {
      id: 2,
      title: 'SmartHome CP',
      category: 'iot',
      description: 'Sistema completo de automação residencial com IoT, permitindo controle remoto de dispositivos e monitoramento ambiental.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      technologies: ['ESP32', 'Python', 'MQTT', 'React Native', 'Firebase'],
      status: 'Em Desenvolvimento',
      year: '2024',
      team: ['Ana Oliveira', 'Carlos Mendes', 'Lucia Ferreira'],
      achievements: ['2º Lugar Feira de Ciências CE 2023'],
      features: [
        'Controle via smartphone',
        'Sensores de temperatura e umidade',
        'Sistema de segurança integrado',
        'Análise de consumo energético'
      ]
    },
    {
      id: 3,
      title: 'RoboSoccer',
      category: 'competicao',
      description: 'Robô para futebol de robôs com visão computacional e estratégias de jogo adaptáveis para competições RoboCup Jr.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg',
      technologies: ['Raspberry Pi', 'OpenCV', 'Python', 'TensorFlow'],
      status: 'Concluído',
      year: '2024',
      team: ['Roberto Lima', 'Fernanda Rocha', 'Gabriel Santos'],
      achievements: ['3º Lugar RoboCup Jr. Brasil 2024'],
      features: [
        'Visão computacional avançada',
        'Detecção de bola e gol',
        'Estratégias adaptáveis',
        'Comunicação entre robôs'
      ]
    },
    {
      id: 4,
      title: 'AssistBot',
      category: 'autonomos',
      description: 'Robô assistivo para pessoas com mobilidade reduzida, capaz de buscar objetos e auxiliar em tarefas do dia a dia.',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
      technologies: ['ROS', 'Python', 'LIDAR', 'Manipulador Robótico'],
      status: 'Protótipo',
      year: '2023',
      team: ['Isabella Costa', 'Mateus Alves', 'Larissa Souza'],
      achievements: ['Menção Honrosa - Mostra Nacional de Robótica'],
      features: [
        'Navegação autônoma indoor',
        'Reconhecimento de objetos',
        'Controle por voz',
        'Interface acessível'
      ]
    },
    {
      id: 5,
      title: 'EduBot Kit',
      category: 'educacional',
      description: 'Kit educacional para ensino de robótica básica, desenvolvido para workshops e aulas introdutórias.',
      image: 'https://images.pexels.com/photos/8566532/pexels-photo-8566532.jpeg',
      technologies: ['Arduino Uno', 'Scratch', 'Blocos Educativos'],
      status: 'Concluído',
      year: '2023',
      team: ['Diego Martins', 'Amanda Silva', 'Thiago Pereira'],
      achievements: ['Implementado em 5 escolas parceiras'],
      features: [
        'Programação visual com blocos',
        'Sensores básicos inclusos',
        'Material didático completo',
        'Montagem simplificada'
      ]
    },
    {
      id: 6,
      title: 'DroneCP',
      category: 'autonomos',
      description: 'Drone autônomo para mapeamento e monitoramento ambiental com câmera e sensores especializados.',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg',
      technologies: ['Pixhawk', 'MAVLink', 'Python', 'GPS RTK'],
      status: 'Em Desenvolvimento',
      year: '2024',
      team: ['Rafael Oliveira', 'Carla Nascimento'],
      achievements: ['Em fase de testes'],
      features: [
        'Voo autônomo programável',
        'Câmera 4K estabilizada',
        'Sensores ambientais',
        'Transmissão em tempo real'
      ]
    }
  ]

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído':
        return 'bg-green-100 text-green-800'
      case 'Em Desenvolvimento':
        return 'bg-blue-100 text-blue-800'
      case 'Protótipo':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nossos Projetos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore as inovações e criações desenvolvidas pelos membros do Conect CP
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>

                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Team */}
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{project.team.slice(0, 2).join(', ')}</span>
                    {project.team.length > 2 && <span> +{project.team.length - 2}</span>}
                  </div>

                  {/* Achievements */}
                  {project.achievements.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center text-yellow-600 text-sm">
                        <Tag className="h-4 w-4 mr-2" />
                        <span className="font-medium">{project.achievements[0]}</span>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Detalhes
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Tem uma Ideia Inovadora?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Junte-se ao Conect CP e transforme suas ideias em projetos reais que fazem a diferença.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Participe do Clube
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects