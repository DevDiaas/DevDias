export interface TranslationSchema {
  nav: {
    about: string;
    projects: string;
    skills: string;
    experience: string;
    services: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleAccent: string;
    titleLast: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    techSphereLabel: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    experienceCard: string;
    projectsCard: string;
    techCard: string;
    clientsCard: string;
    caption: string;
  };
  projects: {
    title: string;
    subtitle: string;
    demo: string;
    github: string;
    items: {
      id: string;
      title: string;
      desc: string;
      tech: string[];
      demoUrl: string;
      githubUrl: string;
      featured: boolean;
    }[];
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      database: string;
      cloudDevops: string;
      tools: string;
    };
  };
  timeline: {
    title: string;
    subtitle: string;
    items: {
      year: string;
      title: string;
      company: string;
      desc: string;
    }[];
  };
  experience: {
    title: string;
    subtitle: string;
    items: {
      role: string;
      company: string;
      period: string;
      desc: string;
      skills: string[];
    }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      features: string[];
    }[];
  };
  statistics: {
    title: string;
    subtitle: string;
    projects: string;
    technologies: string;
    experienceYears: string;
    commits: string;
  };
  contact: {
    title: string;
    titleFirst: string;
    titleAccent: string;
    titleLast: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    sending: string;
    successTitle: string;
    successDesc: string;
    errorTitle: string;
    errorDesc: string;
    requiredField: string;
    sendMessageLabel: string;
    connectLabel: string;
    availabilityLabel: string;
    availabilityText: string;
  };
  footer: {
    rights: string;
    quickLinks: string;
    socials: string;
    backToTop: string;
    caption: string;
  };
}

export const ptBR: TranslationSchema = {
  nav: {
    about: "Sobre",
    projects: "Projetos",
    skills: "Habilidades",
    experience: "Trajetória",
    services: "Serviços",
    contact: "Contato",
    cta: "Fale Comigo",
  },
  hero: {
    badge: "Portfolio em constante evolução",
    titleFirst: "Desenvolvedor",
    titleAccent: "Full Stack",
    titleLast: "",
    subtitle: "Desenvolvedor Full Stack com experiência na criação de aplicações web completas, utilizando tecnologias modernas para construir interfaces intuitivas, APIs robustas e soluções escaláveis.",
    ctaPrimary: "Ver Projetos",
    ctaSecondary: "Sobre Mim",
    techSphereLabel: "Dispositivo de Partículas Interativo 3D",
  },
  about: {
    title: "Sobre Mim",
    subtitle: "A intersecção entre design pixel-perfect, engenharia robusta e performance extrema.",
    paragraph1: "Olá! Meu nome é Janderson Vidal. Desenvolvedor e UI/UX Designer focado em criar experiências digitais de altíssimo valor de produção. Minha filosofia de trabalho gira em torno de simplicidade, tipografia primorosa, interações fluidas e código limpo.",
    paragraph2: "Trabalho construindo soluções ponta a ponta. No front-end, crio animações responsivas e performáticas com React, Framer Motion e GSAP, garantindo pontuações Lighthouse perfeitas. No back-end, piloto arquiteturas escaláveis com Node.js, Express, NestJS e Python, conectando a bancos relacionais e não-relacionais como PostgreSQL e MongoDB.",
    paragraph3: "Sempre busco evoluir aprendendo novas tecnologias e aplicando as melhores práticas do mercado, como SOLID, clean code e arquitetura limpa, para entregar produtos digitais que parecem e funcionam como softwares de classe mundial.",
    experienceCard: "Anos de Experiência",
    projectsCard: "Projetos Concluídos",
    techCard: "Tecnologias Dominadas",
    clientsCard: "Clientes Globais",
    caption: "Janderson Vidal — Sênior Full Stack Engineer & Designer",
  },
  projects: {
    title: "Projetos em Destaque",
    subtitle: "Alguns dos meus trabalhos mais refinados, criados para resolver problemas reais com design excepcional.",
    demo: "Visualizar",
    github: "Código Fonte",
    items: [
      {
        id: "p1",
        title: "Painel de Operações Logísticas",
        desc: "Uma plataforma de rastreio e analytics de frotas em tempo real. Dashboard com mapas interativos, roteamento inteligente e visualizações com D3/Recharts com performance de renderização impecável.",
        tech: ["React 18", "Vite", "TypeScript", "Tailwind CSS", "Motion", "Lucide React", "Recharts", "HTML5 Web Storage"],
        demoUrl: "https://painel-operacoes-logisticas.vercel.app/",
        githubUrl: "https://github.com/DevDiaas/painel-operacoes-logisticas",
        featured: true,
      },
      {
        id: "p2",
        title: "Landing Page Elite - Vitor Couto",
        desc: "Uma solução digital premium sob medida para personal trainers e consultorias esportivas de elite que desejam escalar seus negócios online e atrair clientes de alto valor.",
        tech: ["React", "TypeScript", "Framer Motion", "TailwindCSS", "Lucide Icons"],
        demoUrl: "https://vitor-couto-personal.vercel.app/",
        githubUrl: "https://github.com/DevDiaas/VitorCouto-Personal",
        featured: true,
      },
      {
        id: "p3",
        title: "J&L BANK",
        desc: "Uma plataforma de simulação financeira inteligente e de alto desempenho, desenvolvida com tecnologias web modernas e focada em velocidade máxima, segurança de tipos e gerenciamento de dados em tempo real. (CRIADO PARA USO PRÓPRIO)",
        tech: ["Bun", "TanStack Start", "Supabase", "Tailwind CSS", "TypeScript"],
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
      },
      {
        id: "p4",
        title: "BackFire Agency",
        desc: "Repositório oficial da BackFire, uma agência de desenvolvimento web premium especializada na criação de experiências digitais modernas, ultrarrápidas e focadas em conversão. Unimos código limpo e escalável a estratégias de marketing de alta conversão.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SCSS"],
        demoUrl: "https://backfireagency.devvidal.workers.dev/",
        githubUrl: "https://github.com/DevDiaas/BACKFIREAGENCY",
        featured: false,
      }
    ],
  },
  skills: {
    title: "Habilidades Técnicas",
    subtitle: "Minha caixa de ferramentas tecnológicas categorizada de forma clara. Foco na maestria de cada ferramenta.",
    categories: {
      frontend: "Frontend & UI",
      backend: "Backend & APIs",
      database: "Bancos de Dados",
      cloudDevops: "Nuvem & DevOps",
      tools: "Ferramentas & Design",
    },
  },
  timeline: {
    title: "Minha Trajetória",
    subtitle: "Uma jornada de constante aprendizado, superação de desafios e entrega de valor consistente ao longo dos anos.",
    items: [
      {
        year: "2024 - Presente",
        title: "Engenheiro Full Stack Sênior",
        company: "DevDias Enterprise",
        desc: "Liderando o desenvolvimento de arquiteturas modernas em nuvem, migração de microsserviços e otimização de interfaces web para clientes nacionais e internacionais.",
      },
      {
        year: "2022 - 2024",
        title: "Desenvolvedor Front-end Especialista",
        company: "Digital Studio Corp",
        desc: "Criação de aplicativos interativos com alto foco em UX/UI, microranimações fluidas, acessibilidade e otimização de performance WebGL e SEO.",
      },
      {
        year: "2020 - 2022",
        title: "Desenvolvedor Full Stack Júnior / Pleno",
        company: "Vortex Tech",
        desc: "Desenvolvimento de APIs RESTful robustas usando Node.js, Express e Python, integração com bancos PostgreSQL e criação de painéis analíticos complexos.",
      },
      {
        year: "2018 - 2020",
        title: "Estudos de Engenharia & Projetos Freelance",
        company: "Autônomo",
        desc: "Início na programação web, explorando profundamente a base da web (HTML/CSS/JS), dominando conceitos de bancos de dados e desenvolvendo as primeiras aplicações comerciais.",
      }
    ],
  },
  experience: {
    title: "Experiência Profissional",
    subtitle: "Histórico de atuação focado em resolver problemas de negócios por meio de engenharia refinada.",
    items: [
      {
        role: "CEO / Desenvolvedor",
        company: "BackFire Agency",
        period: "2023 - Presente",
        desc: "Proprietário e desenvolvedor principal da empresa, focado na entrega ponta a ponta de websites e landing pages para clientes corporativos. Construção de interfaces dinâmicas e otimizadas para SEO e performance utilizando React e Next.js. Foco na criação de layouts responsivos e acessíveis, garantindo a melhor experiência do usuário em múltiplos dispositivos.",
        skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
      },
      {
        role: "Tutor de Programação",
        company: "Kodland",
        period: "Fev 2025 - Ago 2025",
        desc: "Ministrei aulas remotas de lógica de programação e POO. Destaque na comunicação técnica clara e mentoria sobre boas práticas de codificação de software.",
        skills: ["Python", "JavaScript", "POO", "Lógica de Programação", "Mentoria"],
      },
      {
        role: "Analista de Dados",
        company: "SMF - Serviços Metroferroviários",
        period: "Feb 2026 - Atual",
        desc: "Construção de dashboards interativos e relatórios visuais, aplicando conceitos de usabilidade e interface para traduzir dados complexos em painéis amigáveis que apoiam a tomada de decisão.",
        skills: ["Power BI", "SQL", "Dashboards", "Data Analytics", "UI/UX"],
      }
    ],
  },
  services: {
    title: "Serviços Especializados",
    subtitle: "Como posso ajudar seu produto a atingir o próximo nível técnico, estético e de conversão.",
    items: [
      {
        title: "Desenvolvimento Front-end Premium",
        desc: "Criação de interfaces web responsivas, extremamente otimizadas, focadas em acessibilidade e interações fluidas utilizando as ferramentas mais modernas.",
        features: ["Arquitetura de Componentes React", "Animações Ultra-Fluidas (Framer/GSAP)", "Lighthouse Score Próximo a 100", "Acessibilidade Completa (WAI-ARIA)"],
      },
      {
        title: "Engenharia Back-end & APIs",
        desc: "Desenvolvimento de sistemas servidores robustos, escaláveis e seguros, preparados para lidar com alto tráfego e integrações complexas.",
        features: ["APIs RESTful e GraphQL Rápidas", "Modelagem de Bancos PostgreSQL/MongoDB", "Segurança e Autenticação Robusta (JWT/OAuth)", "Arquitetura Clean & SOLID"],
      },
      {
        title: "Aplicações Full Stack & Dashboards",
        desc: "Criação de soluções de software completas, do banco de dados ao painel analítico interativo, ideais para SaaS e ferramentas internas de empresas.",
        features: ["Painéis e Dashboards de Dados Ricos", "Sincronização em Tempo Real", "Gráficos Interativos e Relatórios D3", "Painéis de Controle Administrativos"],
      },
      {
        title: "Landing Pages de Alta Conversão",
        desc: "Desenvolvimento de páginas de marketing e vendas refinadas, com design que atrai, conta histórias e converte visitantes em clientes.",
        features: ["Estética Ultra-Premium (Visual Stripe)", "Copywriting Visual e Storytelling", "SEO Técnico On-Page Avançado", "Tempo de Carregamento Instantâneo"],
      },
      {
        title: "Automação & Integrações",
        desc: "Conexão inteligente entre diferentes serviços, automação de tarefas repetitivas e pipelines de dados eficientes para poupar tempo de equipe.",
        features: ["Integração com Stripe, Twilio e mais", "Automação de Webhooks", "Agendamento de Tarefas Inteligente", "Consumo de APIs de IA (Gemini, etc.)"],
      },
      {
        title: "UI/UX & Design de Produto",
        desc: "Desenho conceitual de fluxos, protótipos interativos e guias de estilo focados no usuário, garantindo usabilidade intuitiva e visual arrebatador.",
        features: ["Design de Alta Fidelidade", "Sistemas de Design Sistemáticos", "Estudo de Usabilidade e Jornadas", "Microinterações de Feedback"],
      }
    ],
  },
  statistics: {
    title: "Métricas de Impacto",
    subtitle: "Números reais que ilustram meu comprometimento com a excelência técnica e consistência profissional.",
    projects: "Projetos Ativos",
    technologies: "Tecnologias",
    experienceYears: "Anos de Engenharia",
    commits: "Commits Anuais",
  },
  contact: {
    title: "Contato",
    titleFirst: "O que você faria se um",
    titleAccent: "desenvolvedor em software",
    titleLast: "estivesse a apenas um clique de distância?",
    subtitle: "Seja para iniciar um novo projeto ou apenas para dizer olá, adoraria ouvir de você.",
    nameLabel: "Nome",
    namePlaceholder: "Seu nome",
    emailLabel: "E-mail",
    emailPlaceholder: "seu@email.com",
    subjectLabel: "Assunto",
    subjectPlaceholder: "Como posso ajudar você?",
    messageLabel: "Mensagem",
    messagePlaceholder: "Fale-me sobre o seu projeto...",
    submitBtn: "Enviar Mensagem",
    sending: "Enviando...",
    successTitle: "Mensagem Enviada!",
    successDesc: "Muito obrigado por entrar em contato. Responderei seu e-mail pessoalmente em menos de 24 horas.",
    errorTitle: "Ocorreu um Erro",
    errorDesc: "Não foi possível enviar sua mensagem no momento. Por favor, envie diretamente para o e-mail: jandersonvidalvidal14@gmail.com",
    requiredField: "Este campo é obrigatório",
    sendMessageLabel: "Enviar uma Mensagem",
    connectLabel: "Conectar",
    availabilityLabel: "Disponibilidade",
    availabilityText: "Atualmente disponível para novas oportunidades e projetos freelance.",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    quickLinks: "Links Rápidos",
    socials: "Redes Sociais",
    backToTop: "Voltar ao topo",
    caption: "Janderson Vidal - Desenvolvedor e UI/UX Designer. Desenvolvendo o amanhã com código limpo, interfaces fluidas.",
  },
};

export const en: TranslationSchema = {
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Journey",
    services: "Services",
    contact: "Contact",
    cta: "Let's Talk",
  },
  hero: {
    badge: "Portfolio constantly evolving",
    titleFirst: "Full Stack",
    titleAccent: "Developer",
    titleLast: "",
    subtitle: "Full Stack Developer experienced in creating complete web applications, using modern technologies to build intuitive interfaces, robust APIs, and scalable solutions.",
    ctaPrimary: "View Projects",
    ctaSecondary: "About Me",
    techSphereLabel: "3D Interactive Particle Canvas",
  },
  about: {
    title: "About Me",
    subtitle: "The intersection of pixel-perfect design, robust engineering, and extreme performance.",
    paragraph1: "Hello! My name is Janderson Vidal. Developer and UI/UX Designer dedicated to crafting digital experiences with high production value. My design philosophy centers on simplicity, fine typography, fluid interactions, and clean code.",
    paragraph2: "I work by building end-to-end solutions. On the frontend, I craft highly responsive, buttery-smooth animations using React, Framer Motion, and GSAP, achieving top-tier Lighthouse scores. On the backend, I pilot scalable architectures using Node.js, Express, NestJS, and Python, interfacing with relational and non-relational databases such as PostgreSQL and MongoDB.",
    paragraph3: "I am constantly evolving by learning new technologies and applying solid software craftsmanship principles, including SOLID, clean code, and clean architecture, to deliver digital products that look and feel world-class.",
    experienceCard: "Years of Experience",
    projectsCard: "Completed Projects",
    techCard: "Mastered Techs",
    clientsCard: "Global Clients",
    caption: "Janderson Vidal — Senior Full Stack Engineer & Designer",
  },
  projects: {
    title: "Featured Projects",
    subtitle: "A handpicked selection of my finest work, built to solve real-world problems with exceptional design.",
    demo: "View",
    github: "Source Code",
    items: [
      {
        id: "p1",
        title: "Logistics Operations Dashboard",
        desc: "A real-time fleet analytics and tracking engine. High-performance dashboard featuring interactive map rendering, intelligent path routing, and advanced chart visualizations with D3/Recharts.",
        tech: ["React 18", "Vite", "TypeScript", "Tailwind CSS", "Motion", "Lucide React", "Recharts", "HTML5 Web Storage"],
        demoUrl: "https://painel-operacoes-logisticas.vercel.app/",
        githubUrl: "https://github.com/DevDiaas/painel-operacoes-logisticas",
        featured: true,
      },
      {
        id: "p2",
        title: "Elite Landing Page - Vitor Couto",
        desc: "A bespoke premium digital solution designed for personal trainers and elite sports consultancies looking to scale their online presence and attract high-ticket clients.",
        tech: ["React", "TypeScript", "Framer Motion", "TailwindCSS", "Lucide Icons"],
        demoUrl: "https://vitor-couto-personal.vercel.app/",
        githubUrl: "#",
        featured: true,
      },
      {
        id: "p3",
        title: "J&L BANK",
        desc: "An intelligent and high-performance financial simulation platform built with modern web technologies, focusing on maximum speed, type safety, and real-time data management. (CREATED FOR PERSONAL USE)",
        tech: ["Bun", "TanStack Start", "Supabase", "Tailwind CSS", "TypeScript"],
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
      },
      {
        id: "p4",
        title: "BackFire Agency",
        desc: "Official repository of BackFire, a premium web development agency specializing in the creation of modern, ultra-fast, and conversion-focused digital experiences. We combine clean and scalable code with high-conversion marketing strategies.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SCSS"],
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
      }
    ],
  },
  skills: {
    title: "Technical Expertise",
    subtitle: "My technical toolkit clearly structured by category. Focusing on mastery over tool volume.",
    categories: {
      frontend: "Frontend & UI",
      backend: "Backend & APIs",
      database: "Databases",
      cloudDevops: "Cloud & DevOps",
      tools: "Tools & Design",
    },
  },
  timeline: {
    title: "My Journey",
    subtitle: "A story of constant learning, overcoming complex technical challenges, and delivering consistent value.",
    items: [
      {
        year: "2024 - Present",
        title: "Senior Full Stack Engineer",
        company: "DevDias Enterprise",
        desc: "Leading modern cloud architecture designs, microservices migration, and high-performance user interface optimizations for domestic and international clients.",
      },
      {
        year: "2022 - 2024",
        title: "Frontend Software Specialist",
        company: "Digital Studio Corp",
        desc: "Building highly interactive applications with a deep focus on UX/UI, fluid micro-interactions, complete accessibility, and optimized WebGL/SEO performance.",
      },
      {
        year: "2020 - 2022",
        title: "Full Stack Developer (Jr / Mid)",
        company: "Vortex Tech",
        desc: "Building robust RESTful APIs with Node.js, Express, and Python, interfacing with PostgreSQL, and developing complex analytics dashboards.",
      },
      {
        year: "2018 - 2020",
        title: "Engineering Studies & Freelance",
        company: "Self-employed",
        desc: "Getting started in web programming, diving deep into core web engineering (HTML/CSS/JS), mastering databases, and launching my first commercial applications.",
      }
    ],
  },
  experience: {
    title: "Work Experience",
    subtitle: "A professional record focused on solving real-world business problems through fine software engineering.",
    items: [
      {
        role: "CEO / Developer",
        company: "BackFire Agency",
        period: "2023 - Present",
        desc: "Owner and lead developer of the company, focused on end-to-end delivery of websites and landing pages for corporate clients. Building dynamic interfaces optimized for SEO and performance using React and Next.js. Focus on creating responsive and accessible layouts, ensuring the best user experience across multiple devices.",
        skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
      },
      {
        role: "Programming Tutor",
        company: "Kodland",
        period: "Feb 2025 - Aug 2025",
        desc: "Taught programming logic and OOP classes remotely. Highlighting clear technical communication and mentoring on software coding best practices.",
        skills: ["Python", "JavaScript", "OOP", "Programming Logic", "Mentorship"],
      },
      {
        role: "Data Analyst",
        company: "SMF - Serviços Metroferroviários",
        period: "Feb 2026 - Present",
        desc: "Building interactive dashboards and visual reports, applying usability and interface design concepts to translate complex data into user-friendly dashboards that support decision making.",
        skills: ["Power BI", "SQL", "Dashboards", "Data Analytics", "UI/UX"],
      }
    ],
  },
  services: {
    title: "Core Services",
    subtitle: "How I can help your product reach the next level of technical mastery, visual luxury, and high conversion.",
    items: [
      {
        title: "Premium Frontend Development",
        desc: "Crafting extremely fast, fully accessible, responsive user interfaces enriched with fluid, hardware-accelerated animations using modern standards.",
        features: ["Component-driven React Architecture", "Buttery-smooth Animations (Framer/GSAP)", "Lighthouse score near 100", "Strict WAI-ARIA Accessibility Standards"],
      },
      {
        title: "Backend Engineering & APIs",
        desc: "Architecting secure, bulletproof, highly scalable server networks ready to process massive data flow and support third-party integrations.",
        features: ["Super-fast REST & GraphQL APIs", "Optimized PostgreSQL & MongoDB Systems", "Advanced JSON/JWT Auth Security", "Clean & SOLID Software Principles"],
      },
      {
        title: "Full Stack Web Apps",
        desc: "Engineering complete web applications from database modeling to rich visual management panels, ideal for SaaS and complex business software.",
        features: ["Rich Interactive Dashboards", "Real-Time Data Sincronization", "D3/Recharts Analytics Visualizations", "Fully Configurable Admin Panels"],
      },
      {
        title: "High-Converting Landing Pages",
        desc: "Designing and code-producing stunning marketing pages with premium Stripe-like visual aesthetic that captivates and turns traffic into paying customers.",
        features: ["Stripe-like Minimal Tech Aesthetic", "Visual Copywriting & Storytelling", "Advanced Technical On-page SEO", "Sub-second Page Load Times"],
      },
      {
        title: "Automation & Integrations",
        desc: "Seamlessly connecting apps to third-party providers, writing webhook routers, and developing automated batch engines to optimize workflows.",
        features: ["Stripe, Twilio, and CRM Integrations", "Secure Webhook Routers", "Smart Scheduled Tasks", "Gemini & LLM Core Integrations"],
      },
      {
        title: "UI/UX & Product Design",
        desc: "Drafting sleek interactive design mockups, defining elegant style systems, and designing intuitive user pathways that maximize product usability.",
        features: ["High-Fidelity UI Prototyping", "Consistent Design Systems", "UX Research & User Journey Maps", "Micro-interactions & Interactive Feedback"],
      }
    ],
  },
  statistics: {
    title: "Impact Metrics",
    subtitle: "Real numbers that represent my commitment to engineering excellence and professional consistency.",
    projects: "Active Projects",
    technologies: "Technologies",
    experienceYears: "Years of Engineering",
    commits: "Annual Commits",
  },
  contact: {
    title: "Contact",
    titleFirst: "What would you do if a",
    titleAccent: "software developer",
    titleLast: "was just a single click away?",
    subtitle: "Whether it's to start a new project or just to say hello, I'd love to hear from you.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "How can I help you?",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project...",
    submitBtn: "Send Message",
    sending: "Sending...",
    successTitle: "Message Sent!",
    successDesc: "Thank you for reaching out. I'll personally review your request and reply via email in less than 24 hours.",
    errorTitle: "An Error Occurred",
    errorDesc: "Could not send your message at this time. Please send it directly to my email: jandersonvidalvidal14@gmail.com",
    requiredField: "This field is required",
    sendMessageLabel: "Send a Message",
    connectLabel: "Connect",
    availabilityLabel: "Availability",
    availabilityText: "Currently open to new opportunities and freelance projects.",
  },
  footer: {
    rights: "All rights reserved.",
    quickLinks: "Quick Links",
    socials: "Social Connect",
    backToTop: "Back to top",
    caption: "Janderson Vidal - Developer & UI/UX Designer. Developing tomorrow with clean code, fluid interfaces.",
  },
};
