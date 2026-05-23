export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LearningItem {
  id: string;
  title: string;
  description: string;
  count: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  city: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BENEFITS_DATA: Benefit[] = [
  {
    id: "time",
    title: "Economize seu tempo",
    description: "Chega de passar horas planejando aulas ou pesquisando na internet. Receba tudo pronto para aplicar em minutos.",
    iconName: "Clock"
  },
  {
    id: "ready",
    title: "Material pronto",
    description: "PDFs diagramados, ilustrações de jogos e planos de aula detalhados e estruturados de acordo com a BNCC.",
    iconName: "FileCheck"
  },
  {
    id: "dynamic",
    title: "Aulas mais dinâmicas",
    description: "Aumente o interesse e a participação ativa dos seus alunos com dinâmicas inovadoras que fogem do comum.",
    iconName: "Zap"
  },
  {
    id: "engagement",
    title: "Mais engajamento",
    description: "Jogos e gincanas testados e aprovados que vão fazer seus alunos pedirem 'quero mais' toda semana.",
    iconName: "Sparkles"
  },
  {
    id: "updated",
    title: "Conteúdo atualizado",
    description: "Acesso permanente a materiais modernos, com tendência de metodologias ativas e ludicidade aplicada.",
    iconName: "RefreshCw"
  },
  {
    id: "certificate",
    title: "Certificado válido",
    description: "Garante valorização do seu currículo com certificado de 80h ideal para horas complementares ou evolução de carreira.",
    iconName: "Award"
  }
];

export const LEARNING_DATA: LearningItem[] = [
  {
    id: "jogos",
    title: "Jogos Recreativos",
    description: "Atividades lúdicas de integração, estafetas divertidas e brincadeiras tradicionais adaptadas.",
    count: "+30 Atividades"
  },
  {
    id: "coordenacao",
    title: "Coordenação Motora",
    description: "Foco no desenvolvimento psicomotor: lateralidade, equilíbrio, ritmo e percepção espacial.",
    count: "+25 Planos"
  },
  {
    id: "futsal",
    title: "Futsal Escolar",
    description: "Iniciação esportiva, fundamentos, educativos em grupo, dinâmicas táticas simplificadas e jogos lúdicos de quadra.",
    count: "Completo"
  },
  {
    id: "voleibol",
    title: "Voleibol Escolar",
    description: "Exercícios divertidos de toque, manchete, saque por baixo e esquemas de cooperação para iniciantes.",
    count: "Completo"
  },
  {
    id: "dinamicas",
    title: "Dinâmicas de Grupo",
    description: "Atividades para quebrar o gelo no início de ano letivo, resolução de conflitos e socialização profunda.",
    count: "+15 Dinâmicas"
  },
  {
    id: "recreacao",
    title: "Recreação Infantil",
    description: "Práticas voltadas à educação infantil e ensino fundamental canais de energia, cooperação e ludicidade plena.",
    count: "+40 Opções"
  },
  {
    id: "inclusao",
    title: "Inclusão Escolar",
    description: "Metodologias adaptadas para garantir a participação ativa e integrada de todos os alunos, sem exceção.",
    count: "Especializado"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Camilo Santos",
    role: "Prof. de Educação Física",
    avatar: "CS",
    rating: 5,
    text: "O material salvou minhas sextas-feiras! Tudo pronto, só baixar e ir pra quadra. Os alunos adoraram os jogos de futsal adaptado e as gincanas. Pelo valor de R$19,90, o retorno foi gigantesco.",
    city: "São Paulo - SP"
  },
  {
    id: "t2",
    name: "Mariana Costa",
    role: "Professora de Ensino Infantil",
    avatar: "MC",
    rating: 5,
    text: "Excelente! Sou pedagoga e também dou aulas de recreação física, e me ajudou muito no desenvolvimento motor dos menores. O certificado de 80h foi aceito no meu plano de carreira da prefeitura.",
    city: "Belo Horizonte - MG"
  },
  {
    id: "t3",
    name: "Daniela Alencar",
    role: "Professora Ensino Fundamental",
    avatar: "DA",
    rating: 5,
    text: "Material de extrema qualidade e entrega imediata. Os PDFs são super organizados, fáceis de ler no celular e imprimir. Recomendo muito para quem quer aulas dinâmicas sem perder noites planejando.",
    city: "Curitiba - PR"
  },
  {
    id: "t4",
    name: "Rodrigo Mendes",
    role: "Coordenador Pedagógico",
    avatar: "RM",
    rating: 5,
    text: "Assinei para disponibilizar aos professores da nossa escola. Recomendo de olhos fechados. Conteúdo alinhado à proposta lúdica da BNCC, focado em inclusão e cooperação. Muito barato pelo valor que entrega.",
    city: "Salvador - BA"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq1",
    question: "Como recebo acesso?",
    answer: "Imediatamente após a confirmação do pagamento de R$19,90. Você receberá um e-mail com as credenciais exclusivas e link para baixar todo o material e e-books em nossa plataforma de membros totalmente segura."
  },
  {
    id: "faq2",
    question: "O certificado é válido?",
    answer: "Sim! Você terá acesso ao certificado de 80 horas de Capacitação Docente em Educação Física Escolar, contendo CNPJ e chave de autenticidade, perfeito para comprovar horas complementares, títulos em concursos públicos ou promoções internas."
  },
  {
    id: "faq3",
    question: "O acesso é vitalício?",
    answer: "Com certeza. Uma vez adquirido, o material é seu para sempre. Você poderá baixar os PDFs e acessar quando quiser, em qualquer ano letivo, incluindo todas as futuras atualizações gratuitamente."
  },
  {
    id: "faq4",
    question: "Funciona no celular?",
    answer: "Sim! Todo o material está estruturado em PDFs modernos e responsivos, ideais para ler diretamente do celular enquanto você está na quadra de esportes, facilitando a aplicação rápida."
  },
  {
    id: "faq5",
    question: "Como assistir as aulas e baixar os materiais?",
    answer: "Tudo é prático e digital. Você faz o login na plataforma, escolhe a aula ou módulo desejado, assiste aos vídeos explicativos e faz o download direto dos planos de aula prontos em PDF no seu computador ou celular."
  }
];
