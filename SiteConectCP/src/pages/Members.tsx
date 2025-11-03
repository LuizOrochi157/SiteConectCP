import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Users, Crown, Star, Code, Cpu, Zap, Award, Github, Linkedin, Mail} from 'lucide-react'

const Members = () => {
  const [activeRole, setActiveRole] = useState('todos')

  const roles = [
    { id: 'todos', name: 'Todos os Membros' },
    { id: 'lideranca', name: 'Liderança' },
    { id: 'veteranos', name: 'Veteranos' },
    { id: 'novatos', name: 'Novatos' }
  ]

  const members = [
    {
      id: 1,
      name: 'João Silva',
      role: 'lideranca',
      position: 'Presidente',
      year: '3º Ano',
      specialties: ['Programação', 'IA', 'Visão Computacional'],
      projects: ['RoboLine Pro', 'RoboSoccer'],
      achievements: ['Melhor Programador Junior - OBR 2024'],
      description: 'Apaixonado por inteligência artificial e visão computacional. Lidera o desenvolvimento de algoritmos avançados para nossos robôs.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      joinDate: '2022',
      social: {
        github: 'joaosilva',
        linkedin: 'joaosilva-dev',
        email: 'joao.silva@exemplo.com'
      }
    },
    {
      id: 2,
      name: 'Maria Santos',
      role: 'lideranca',
      position: 'Vice-Presidente',
      year: '3º Ano',
      specialties: ['Eletrônica', 'Hardware', 'PCB Design'],
      projects: ['SmartHome CP', 'RoboLine Pro'],
      achievements: ['Inovação em Robótica - Feira de Ciências CE'],
      description: 'Especialista em eletrônica e design de hardware. Responsável pela infraestrutura técnica dos projetos do clube.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
      joinDate: '2022',
      social: {
        github: 'mariasantos',
        linkedin: 'maria-santos-eng',
        email: 'maria.santos@exemplo.com'
      }
    },
    {
      id: 3,
      name: 'Pedro Costa',
      role: 'lideranca',
      position: 'Coordenador de Projetos',
      year: '2º Ano',
      specialties: ['Gestão', 'Mecânica', 'CAD'],
      projects: ['AssistBot', 'EduBot Kit'],
      achievements: ['Liderança Jovem - RoboCup Jr.'],
      description: 'Excelente organizador e especialista em design mecânico. Coordena o desenvolvimento de todos os projetos do clube.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      joinDate: '2022',
      social: {
        github: 'pedrocosta',
        linkedin: 'pedro-costa-robotics',
        email: 'pedro.costa@exemplo.com'
      }
    },
    {
      id: 4,
      name: 'Ana Oliveira',
      role: 'veteranos',
      position: 'Desenvolvedora Senior',
      year: '2º Ano',
      specialties: ['IoT', 'Mobile', 'Backend'],
      projects: ['SmartHome CP', 'DroneCP'],
      achievements: ['2º Lugar Feira de Ciências CE 2023'],
      description: 'Especialista em IoT e desenvolvimento mobile. Lidera projetos de automação e sistemas conectados.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      joinDate: '2022',
      social: {
        github: 'anaoliveira',
        linkedin: 'ana-oliveira-iot',
        email: 'ana.oliveira@exemplo.com'
      }
    },
    {
      id: 5,
      name: 'Carlos Mendes',
      role: 'veteranos',
      position: 'Especialista em IA',
      year: '2º Ano',
      specialties: ['Machine Learning', 'Python', 'TensorFlow'],
      projects: ['RoboSoccer', 'AssistBot'],
      achievements: ['3º Lugar RoboCup Jr. Brasil 2024'],
      description: 'Focado em machine learning e inteligência artificial aplicada à robótica. Desenvolve algoritmos de aprendizado.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      joinDate: '2023',
      social: {
        github: 'carlosmendes',
        linkedin: 'carlos-mendes-ai',
        email: 'carlos.mendes@exemplo.com'
      }
    },
    {
      id: 6,
      name: 'Lucia Ferreira',
      role: 'veteranos',
      position: 'Designer UX/UI',
      year: '1º Ano',
      specialties: ['Design', 'Prototipagem', '3D Modeling'],
      projects: ['EduBot Kit', 'SmartHome CP'],
      achievements: ['Melhor Design - Torneio FLL'],
      description: 'Responsável pelo design e experiência do usuário em nossos projetos. Cria interfaces intuitivas e protótipos.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      joinDate: '2023',
      social: {
        github: 'luciaferreira',
        linkedin: 'lucia-ferreira-design',
        email: 'lucia.ferreira@exemplo.com'
      }
    },
    {
      id: 7,
      name: 'Gabriel Santos',
      role: 'novatos',
      position: 'Desenvolvedor Junior',
      year: '1º Ano',
      specialties: ['Arduino', 'C++', 'Sensores'],
      projects: ['EduBot Kit'],
      achievements: ['Melhor Novato 2024'],
      description: 'Novo membro com grande potencial. Está aprendendo os fundamentos da programação de microcontroladores.',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg',
      joinDate: '2024',
      social: {
        github: 'gabrielsantos',
        email: 'gabriel.santos@exemplo.com'
      }
    },
    {
      id: 8,
      name: 'Isabella Costa',
      role: 'novatos',
      position: 'Estagiária de Pesquisa',
      year: '1º Ano',
      specialties: ['Pesquisa', 'Documentação', 'Testes'],
      projects: ['AssistBot'],
      achievements: ['Projeto de Impacto Social'],
      description: 'Interessada em robótica assistiva e impacto social. Contribui com pesquisa e documentação dos projetos.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      joinDate: '2024',
      social: {
        github: 'isabellacosta',
        email: 'isabella.costa@exemplo.com'
      }
    },
    {
      id: 9,
      name: 'Mateus Alves',
      role: 'novatos',
      position: 'Aprendiz de Hardware',
      year: '1º Ano',
      specialties: ['Eletrônica Básica', 'Soldagem', 'Montagem'],
      projects: ['EduBot Kit', 'DroneCP'],
      achievements: ['Certificação em Soldagem'],
      description: 'Aprendendo os fundamentos de eletrônica e hardware. Responsável pela montagem e manutenção dos equipamentos.',
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg',
      joinDate: '2024',
      social: {
        github: 'mateusalves',
        email: 'mateus.alves@exemplo.com'
      }
    }
  ]

  const filteredMembers = activeRole === 'todos' 
    ? members 
    : members.filter(member => member.role === activeRole)

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'lideranca':
        return 'from-yellow-400 to-orange-500'
      case 'veteranos':
        return 'from-blue-400 to-purple-500'
      case 'novatos':
        return 'from-green-400 to-blue-500'
      default:
        return 'from-gray-400 to-gray-600'
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'lideranca':
        return Crown
      case 'veteranos':
        return Star
      case 'novatos':
        return Zap
      default:
        return Users
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
              Nossa Equipe
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça os talentos que fazem do Conect CP um clube de excelência em robótica
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Crown, label: 'Líderes', value: '3', color: 'from-yellow-400 to-orange-500' },
              { icon: Star, label: 'Veteranos', value: '3', color: 'from-blue-400 to-purple-500' },
              { icon: Zap, label: 'Novatos', value: '3', color: 'from-green-400 to-blue-500' },
              { icon: Users, label: 'Total de Membros', value: '25+', color: 'from-pink-400 to-red-500' },
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

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeRole === role.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {role.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMembers.map((member, index) => {
              const RoleIcon = getRoleIcon(member.role)
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                >
                  {/* Member Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Role Badge */}
                    <div className={`absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${getRoleColor(member.role)}`}>
                      <RoleIcon className="h-3 w-3 mr-1" />
                      {member.position}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Member Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-gray-600 text-sm">{member.year} • Membro desde {member.joinDate}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
                      {member.description}
                    </p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Especialidades</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.slice(0, 3).map((specialty) => (
                          <span
                            key={specialty}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Projetos</h4>
                      <p className="text-gray-600 text-sm">
                        {member.projects.slice(0, 2).join(', ')}
                        {member.projects.length > 2 && ` +${member.projects.length - 2}`}
                      </p>
                    </div>

                    {/* Achievements */}
                    {member.achievements.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center text-yellow-600 text-sm">
                          <Award className="h-4 w-4 mr-2" />
                          <span className="font-medium">{member.achievements[0]}</span>
                        </div>
                      </div>
                    )}

                    {/* Social Links */}
                    <div className="flex space-x-2">
                      {member.social.github && (
                        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                          <Github className="h-4 w-4 text-gray-700" />
                        </button>
                      )}
                      {member.social.linkedin && (
                        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                          <Linkedin className="h-4 w-4 text-gray-700" />
                        </button>
                      )}
                      <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                        <Mail className="h-4 w-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Quer Fazer Parte da Nossa Equipe?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              O Conect CP está sempre procurando por novos talentos apaixonados por tecnologia e inovação.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Candidate-se Agora
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Members