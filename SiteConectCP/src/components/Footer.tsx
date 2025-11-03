import React from 'react'
import {Mail, Phone, MapPin, Zap} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Conect CP</h3>
                <p className="text-sm text-gray-400">EREFEM Caio Pereira</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm">
              Conectando estudantes através da robótica e tecnologia, construindo o futuro com inovação e conhecimento.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>conectcp@erefemcaiopereira.edu.br</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>(85) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Fortaleza, Ceará</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="/sobre" className="block text-gray-400 hover:text-white transition-colors">
                Sobre o Clube
              </a>
              <a href="/projetos" className="block text-gray-400 hover:text-white transition-colors">
                Nossos Projetos
              </a>
              <a href="/conquistas" className="block text-gray-400 hover:text-white transition-colors">
                Conquistas
              </a>
              <a href="/contato" className="block text-gray-400 hover:text-white transition-colors">
                Entre em Contato
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Conect CP - EREFEM Caio Pereira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer