// Fonte única dos dados do negócio. Para mudar preço, telefone, endereço,
// fotos ou depoimentos, edite só este arquivo.

export const business = {
  name: "Barbearia DoGago",
  tagline: "Seu estilo. Nosso trabalho.",
  phone: "(11) XXXXX-XXXX", // número oculto de propósito (projeto de portfólio)
  address: {
    street: "R. Conselheiro Moreira de Barros, 2511 - Loja 7",
    district: "Santana",
    city: "São Paulo",
    state: "SP",
    postalCode: "02430-001",
  },
  instagram: { handle: "@abarbeariadogago", url: "https://www.instagram.com/abarbeariadogago/" },
};

// Horário de funcionamento (perfil da barbearia no Google, out/2026).
// Ordem de exibição: segunda a domingo. "day" segue o getDay() do JavaScript
// (0 = domingo). hours: null = fechado.
export const openingHours = [
  { day: 1, label: "Segunda", hours: ["10:00", "20:00"] },
  { day: 2, label: "Terça", hours: ["10:00", "20:00"] },
  { day: 3, label: "Quarta", hours: ["10:00", "20:00"] },
  { day: 4, label: "Quinta", hours: ["10:00", "20:00"] },
  { day: 5, label: "Sexta", hours: ["10:00", "20:00"] },
  { day: 6, label: "Sábado", hours: ["08:00", "17:00"] },
  { day: 0, label: "Domingo", hours: null },
];

const mapsQuery = encodeURIComponent(
  `Barbearia DoGago, ${business.address.street}, ${business.address.district}, ${business.address.city} - ${business.address.state}, ${business.address.postalCode}`,
);

// Projeto de portfólio: os botões de ação (agendar, assinar, rota)
// abrem o aviso de demonstração em vez de levar aos canais da barbearia.
// Só o Instagram oficial continua com link real.
export const links = {
  demo: "/sobre-este-site",
  mapsEmbed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  instagram: business.instagram.url,
};

// Conteúdo do Clube, transcrito dos posts oficiais da barbearia no Instagram.
const clubDiscount = "10%"; // desconto do membro em produtos e serviços extras

export const club = {
  name: "Clube DoGago",
  discount: clubDiscount,
  pitch: "Uma mensalidade e você corta quantas vezes quiser, em qualquer cadeira da casa.",
  terms: "Cobrança automática no cartão, todo mês. Sem fidelidade: não tem multa nem carência.",
  plans: [
    { name: "Só cabelo", description: "Cortes ilimitados durante o mês", price: "R$ 109,90" },
    { name: "Só barba", description: "Barba ilimitada durante o mês", price: "R$ 119,90" },
    { name: "Cabelo + Barba", description: "Corte e barba ilimitados durante o mês", price: "R$ 189,90", badge: "Completo" },
  ],
  benefits: [
    { title: "Corte ilimitado", text: "Cabelo em dia a semana toda, do jeito que você gosta de manter." },
    { title: "Qualquer cadeira, mesmo padrão", text: "Todo barbeiro da casa entrega o mesmo acabamento." },
    { title: "Horário na mão", text: "Marca pelo aplicativo em segundos e chega na hora certa." },
    { title: "Você é reconhecido", text: "Chega e a casa já sabe quem você é e como é o seu corte." },
    { title: `${clubDiscount} de desconto`, text: "Em produtos e nos serviços extras da casa, todo mês." },
  ],
  steps: [
    { title: "Escolha o plano", text: "Só cabelo, só barba ou os dois juntos." },
    { title: "Cadastre o cartão", text: "No aplicativo. A partir daí a cobrança entra sozinha, todo mês." },
    { title: "Marque seu horário", text: "E venha cortar quantas vezes quiser." },
  ],
};

export const navItems = [
  { label: "Início", id: "inicio" },
  { label: "A casa", id: "sobre", desktop: true },
  { label: "Serviços", id: "servicos", desktop: true },
  { label: "Produtos", id: "produtos", desktop: true },
  { label: "Clube", id: "clube", desktop: true },
  { label: "Galeria", id: "galeria" },
  { label: "Avaliações", id: "avaliacoes" },
  { label: "Onde estamos", id: "onde-estamos", desktop: true },
];

// Listas como estavam no site original: Luzes, Platinado, Hidratação e Limpeza
// facial aparecem tanto em serviços quanto em extras.
export const services = [
  { name: "Corte", price: "R$ 60,00" },
  { name: "Barba", price: "R$ 40,00" },
  { name: "Corte + Barba", price: "R$ 90,00" },
  { name: "Progressiva", price: "R$ 80,00" },
  { name: "Luzes", price: "R$ 70,00" },
  { name: "Platinado", price: "R$ 140,00" },
  { name: "Hidratação", price: "R$ 20,00" },
  { name: "Limpeza facial", price: "R$ 20,00" },
];

export const extras = [
  { name: "Luzes", price: "R$ 70,00" },
  { name: "Platinado", price: "R$ 140,00" },
  { name: "Hidratação", price: "R$ 20,00" },
  { name: "Depilação na cera", price: "R$ 30,00" },
  { name: "Relaxamento", price: "R$ 20,00" },
  { name: "Desondulação dos fios", price: "R$ 80,00" },
  { name: "Ozonioterapia", price: "R$ 20,00" },
  { name: "Limpeza facial", price: "R$ 20,00" },
  { name: "Sobrancelha", price: "R$ 10,00" },
  { name: "Cone Hindu", price: "R$ 40,00" },
];

// Produtos agrupados por uso. Os grupos foram definidos por nós, não pelo cliente.
export const productGroups = [
  {
    name: "Cabelo",
    items: [
      { name: "Pomada Pó", price: "R$ 57,50" },
      { name: "Pomada Seco Médio", price: "R$ 38,50" },
      { name: "Pomada Seco Alta", price: "R$ 38,50" },
      { name: "Pomada Molhado Alta", price: "R$ 38,50" },
      { name: "Pomada Teen", price: "R$ 38,50" },
      { name: "Laquê", price: "R$ 50,00" },
      { name: "Leave-in", price: "R$ 75,00" },
      { name: "Leave-in Teen", price: "R$ 75,00" },
      { name: "Shampoo cabelo", price: "R$ 65,00" },
      { name: "Condicionador cabelo", price: "R$ 65,00" },
    ],
  },
  {
    name: "Barba",
    items: [
      { name: "Balm Menta", price: "R$ 65,50" },
      { name: "Shampoo Barba Menta", price: "R$ 60,50" },
      { name: "Balm Café e Baunilha", price: "R$ 65,50" },
      { name: "Shampoo Café e Baunilha", price: "R$ 60,50" },
      { name: "Óleo Café e Baunilha", price: "R$ 85,00" },
      { name: "Balm Sândalo e Almíscar", price: "R$ 65,50" },
      { name: "Shampoo Sândalo e Almíscar", price: "R$ 60,50" },
      { name: "Óleo de Barba Sândalo e Almíscar", price: "R$ 80,00" },
    ],
  },
  {
    name: "Crescimento",
    items: [
      { name: "Minoxidil", price: "R$ 100,00" },
      { name: "Kit Minoxidil 8%", price: "R$ 122,00" },
    ],
  },
  {
    name: "Acessórios",
    items: [{ name: "Pente de madeira", price: "R$ 30,00" }],
  },
];

// Fotos de banco de imagens (Unsplash), ilustrativas: não são da barbearia.
const unsplash = (id, width) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const heroImage = {
  src: unsplash("photo-1512690459411-b9245aed614b", 2200),
  alt: "",
};

export const gallery = [
  {
    src: unsplash("photo-1621605815971-fbc98d665033", 1300),
    label: "Ferramentas",
    alt: "Máquinas de corte, tesouras, pente e pomada sobre uma pedra escura",
  },
  {
    src: unsplash("photo-1622286342621-4bd786c2447c", 1300),
    label: "Corte",
    alt: "Barbeiro finalizando um corte degradê com tesoura e pente",
  },
  {
    src: unsplash("photo-1599351431202-1e0f0137899a", 1300),
    label: "Acabamento",
    alt: "Barbeiro alinhando o contorno do cabelo com navalha",
  },
  {
    src: unsplash("photo-1503951914875-452162b0f3f1", 1300),
    label: "Barba",
    alt: "Cliente reclinado na cadeira enquanto o barbeiro apara a barba com tesoura",
  },
];

// Avaliações públicas do Google. Projeto de portfólio: só as iniciais dos
// autores e dos barbeiros citados, sem nomes completos (LGPD).
export const rating = { score: "5,0", source: "Google" };

export const reviews = [
  { name: "F. F.", text: "Barbearia com clube fidelidade! Excelentes profissionais. Ambiente agradável." },
  { name: "H. A.", text: "Ambiente incrível e profissionais excelentes. Agradecimento em especial ao barbeiro C. pelo atendimento impecável 😁" },
  { name: "F. D. G.", text: "Ja sou cliente a um tempo, o corte é bom, ambiente agradável e os barbeiros são gente boa." },
  { name: "A. A. V.", text: "A melhor barbearia do Lauzane o Gago é sua equipe atendem muito bem, além do lugar ser super bacana você se sente em casa." },
  { name: "C. V.", text: "Barbearia top!! Os meninos são feras e o atendimento diferenciado L., G. e G. Aplicativo para agendar facilitou muito, sempre estão trazendo novidades para os clientes." },
  { name: "A. C. R.", text: "Atendimento excelente ambiente limpo e organizado, o barbeiro G. é bem atencioso com todos inclusive com as crianças detalhe ele sabe cuidar do cabelo afro." },
  { name: "A. J.", text: "Sensacional, um ambiente muito agradável com ar condicionado, sem contar a excelência no atendimento e habilidade no corte. Um profissional de alta qualidade!" },
  { name: "H. A.", text: "O melhor barbeiro da região, sem dúvidas!!!" },
  { name: "R. I.", text: "Melhor barbearia que já cortei, ótimo ambiente, barbeiros bem atenciosos, e um trabalho impecável, preços e condições muito boa para os clientes!!" },
  { name: "K. Q.", text: "Muito bom, ambiente agradável, os meninos são gente boa demais. Trabalharam muito bem!! Barbearia excelente." },
  { name: "M. J.", text: "Atendimento top. Diferenciado. Pessoal acolhedor. Ambiente muito legal." },
  { name: "D. M.", text: "Ótimo ambiente, barbeiro educado e prestativo, além de ser talentoso, pretendo virar freguês 👍👍" },
];
