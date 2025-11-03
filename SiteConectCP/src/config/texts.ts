
// Configuração centralizada de todos os textos do site
// Modifique aqui para alterar qualquer texto presente no site

export const siteTexts = {
  // Informações gerais do clube
  club: {
    name: "Conect CP",
    fullName: "Clube de Robótica da EREFEM Caio Pereira",
    school: "EREFEM Caio Pereira",
    shortDescription: "Conectando estudantes através da robótica e tecnologia",
    longDescription: "construindo o futuro com inovação, conhecimento e paixão pela ciência"
  },

  // Navegação
  navigation: {
    home: "Início",
    about: "Sobre",
    achievements: "Conquistas", 
    projects: "Projetos",
    members: "Membros",
    contact: "Contato"
  },

  // Página Inicial (Home)
  home: {
    hero: {
      title: "Conect CP",
      subtitle: "Clube de Robótica da EREFEM Caio Pereira",
      description: "Conectando estudantes através da robótica e tecnologia, construindo o futuro com inovação, conhecimento e paixão pela ciência.",
      primaryButton: "Conheça Nossa História",
      secondaryButton: "Ver Projetos"
    },
    stats: [
      { label: "Membros Ativos", value: "25+" },
      { label: "Competições", value: "12" },
      { label: "Projetos", value: "18" },
      { label: "Anos de História", value: "3" }
    ],
    features: {
      title: "O Que Fazemos",
      subtitle: "Desenvolvemos projetos inovadores e participamos de competições que desafiam nossos conhecimentos",
      items: [
        {
          title: "Projetos Inovadores",
          description: "Desenvolvemos robôs e sistemas automatizados que solucionam problemas reais",
          icon: "🤖"
        },
        {
          title: "Competições", 
          description: "Participamos de competições regionais e nacionais, conquistando reconhecimento",
          icon: "🏆"
        },
        {
          title: "Aprendizado",
          description: "Promovemos workshops e cursos para compartilhar conhecimento com a comunidade", 
          icon: "📚"
        }
      ]
    },
    cta: {
      title: "Junte-se à Nossa Comunidade",
      description: "Faça parte do futuro da tecnologia. Venha construir, aprender e inovar conosco no Conect CP.",
      button: "Entre em Contato"
    }
  },

  // Página Sobre
  about: {
    hero: {
      title: "Nossa História",
      subtitle: "Conheça a jornada do Conect CP e como nos tornamos referência em robótica educacional"
    },
    story: {
      title: "Como Tudo Começou",
      paragraphs: [
        "O Conect CP nasceu em 2022 na EREFEM Caio Pereira, fruto da paixão de um grupo de estudantes por tecnologia e robótica. O que começou como encontros informais para discutir projetos rapidamente se transformou em um clube organizado e reconhecido.",
        "Nossa missão sempre foi clara: democratizar o acesso ao conhecimento em robótica e tecnologia, criando um ambiente colaborativo onde estudantes podem explorar, experimentar e inovar.",
        "Hoje, somos mais de 25 membros ativos, com projetos que vão desde robôs autônomos até sistemas de automação residencial, sempre focando no aprendizado prático e na solução de problemas reais."
      ]
    },
    mission: {
      title: "Missão",
      description: "Formar jovens inovadores através da robótica educacional, desenvolvendo habilidades técnicas e sociais essenciais para o futuro."
    },
    vision: {
      title: "Visão", 
      description: "Ser referência em robótica educacional no Ceará, inspirando uma nova geração de cientistas e engenheiros."
    },
    timeline: {
      title: "Nossa Jornada",
      subtitle: "Marcos importantes na história do Conect CP",
      milestones: [
        {
          year: "2022",
          title: "Fundação do Clube",
          description: "O Conect CP foi criado por um grupo de estudantes apaixonados por tecnologia e robótica na EREFEM Caio Pereira."
        },
        {
          year: "2022", 
          title: "Primeiro Projeto",
          description: "Desenvolvimento do nosso primeiro robô seguidor de linha, que participou da competição regional."
        },
        {
          year: "2023",
          title: "Expansão do Clube",
          description: "Crescimento para 25+ membros ativos e participação em múltiplas competições estaduais."
        },
        {
          year: "2024",
          title: "Reconhecimento Nacional", 
          description: "Conquista de prêmios em competições nacionais e estabelecimento de parcerias com universidades."
        }
      ]
    },
    values: {
      title: "Nossos Valores",
      subtitle: "Os princípios que guiam todas as nossas ações e decisões",
      items: [
        {
          title: "Inovação",
          description: "Buscamos sempre soluções criativas e inovadoras para os desafios tecnológicos."
        },
        {
          title: "Colaboração", 
          description: "Trabalhamos em equipe, compartilhando conhecimentos e experiências."
        },
        {
          title: "Excelência",
          description: "Comprometemo-nos com a qualidade em todos os nossos projetos e competições."
        },
        {
          title: "Paixão",
          description: "Nossa paixão pela tecnologia e educação move todos os nossos esforços."
        }
      ]
    }
  },

  // Página Conquistas
  achievements: {
    hero: {
      title: "Nossas Conquistas",
      subtitle: "Celebramos cada vitória, aprendizado e reconhecimento conquistado pelo Conect CP"
    },
    stats: [
      { label: "Primeiros Lugares", value: "3" },
      { label: "Pódios Conquistados", value: "8" },
      { label: "Reconhecimentos", value: "12" },
      { label: "Membros Premiados", value: "15" }
    ],
    competitions: {
      title: "Competições e Prêmios",
      subtitle: "Nosso histórico de participações e conquistas em competições de robótica"
    },
    individual: {
      title: "Reconhecimentos Individuais",
      subtitle: "Nossos membros também brilham individualmente"
    }
  },

  // Página Projetos
  projects: {
    hero: {
      title: "Nossos Projetos",
      subtitle: "Explore as inovações e criações desenvolvidas pelos membros do Conect CP"
    },
    categories: [
      { id: "todos", name: "Todos os Projetos" },
      { id: "autonomos", name: "Robôs Autônomos" },
      { id: "iot", name: "IoT & Automação" },
      { id: "competicao", name: "Competição" },
      { id: "educacional", name: "Educacional" }
    ],
    cta: {
      title: "Tem uma Ideia Inovadora?",
      description: "Junte-se ao Conect CP e transforme suas ideias em projetos reais que fazem a diferença.",
      button: "Participe do Clube"
    }
  },

  // Página Membros
  members: {
    hero: {
      title: "Nossa Equipe",
      subtitle: "Conheça os talentos que fazem o Conect CP acontecer"
    },
    leadership: {
      title: "Liderança",
      subtitle: "Os membros que guiam nossa visão e missão"
    },
    active: {
      title: "Membros Ativos", 
      subtitle: "Nossa comunidade de inovadores e criadores"
    },
    alumni: {
      title: "Ex-Membros",
      subtitle: "Aqueles que ajudaram a construir nossa história"
    }
  },

  // Página Contato
  contact: {
    hero: {
      title: "Entre em Contato",
      subtitle: "Estamos sempre prontos para conversar sobre robótica, tecnologia e inovação"
    },
    form: {
      title: "Envie uma Mensagem",
      subtitle: "Preencha o formulário abaixo e entraremos em contato",
      fields: {
        name: "Nome Completo",
        email: "E-mail",
        subject: "Assunto", 
        message: "Mensagem"
      },
      button: "Enviar Mensagem"
    },
    info: {
      title: "Informações de Contato",
      school: "EREFEM Caio Pereira",
      address: "Endereço da escola aqui",
      email: "contato@conectcp.edu.br",
      phone: "(85) 9999-9999"
    },
    social: {
      title: "Redes Sociais",
      subtitle: "Siga-nos para acompanhar nossas novidades"
    }
  },

  // Textos comuns
  common: {
    buttons: {
      viewMore: "Ver Mais",
      viewDetails: "Ver Detalhes", 
      contact: "Entre em Contato",
      joinClub: "Participe do Clube",
      send: "Enviar",
      close: "Fechar"
    },
    status: {
      completed: "Concluído",
      inProgress: "Em Desenvolvimento",
      prototype: "Protótipo"
    },
    loading: "Carregando...",
    error: "Erro ao carregar",
    noResults: "Nenhum resultado encontrado"
  }
}

export default siteTexts
