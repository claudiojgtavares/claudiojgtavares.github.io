export type Project = {
  slug: string;
  title: string;
  eyebrow: { pt: string; en: string };
  category: string;
  filters: string[];
  tags: { pt: string[]; en: string[] };
  image: string;
  imageAlt?: { pt: string; en: string };
  media?: 'cover' | 'phone' | 'gallery';
  gallery?: { src: string; alt: { pt: string; en: string } }[];
  repo: string;
  demo?: string;
  accent: string;
  pt: { summary: string; problem: string; solution: string; validation: string; stack: string[] };
  en: { summary: string; problem: string; solution: string; validation: string; stack: string[] };
};

export const projects: Project[] = [
  {
    slug: 'acta', title: 'ACTA', eyebrow: { pt: 'Mobile · Produto em evolução', en: 'Mobile · Product in progress' }, category: 'Mobile', filters: ['Mobile'],
    tags: { pt: ['Mobile', 'IA aplicada'], en: ['Mobile', 'Applied AI'] }, image: '/images/acta-installed.jpeg', imageAlt: { pt: 'Captura da aplicação ACTA instalada num dispositivo Android', en: 'Installed ACTA app running on an Android device' }, media: 'phone', repo: 'https://github.com/claudiojgtavares/acta-android', accent: '#3B82F6',
    pt: { summary: 'Reuniões com consentimento, áudio, revisão de transcrição e proposta de ata.', problem: 'Transformar uma reunião gravada num registo verificável sem perder consentimento, contexto ou histórico de versões.', solution: 'App Android offline-first em Kotlin/Compose, Room e regras de negócio centralizadas no repositório; Gemini fica opcional.', validation: 'Testes unitários cobrem consentimento, revisão e versionamento. Build/instalação dependem do ambiente Android disponível.', stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Audio', 'Gemini opcional'] },
    en: { summary: 'Meetings with consent, audio, transcript review and structured minutes.', problem: 'Turn a recorded meeting into a traceable record without losing consent, context or version history.', solution: 'Offline-first Kotlin/Compose Android app with Room and repository-owned business rules; Gemini remains optional.', validation: 'Unit tests cover consent, review and versioning. Build and device installation depend on the target Android environment.', stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Audio', 'Optional Gemini'] }
  },
  {
    slug: 'portal-academico', title: 'Portal Académico', eyebrow: { pt: 'Web · Protótipo académico', en: 'Web · Academic prototype' }, category: 'Web', filters: ['Web', 'Academic project'],
    tags: { pt: ['Web', 'Projeto académico'], en: ['Web', 'Academic project'] }, image: '/images/portal-candidatura.webp', media: 'gallery',
    gallery: [
      { src: '/images/portal-candidatura.webp', alt: { pt: 'Formulário de candidatura do Portal Académico', en: 'Academic Portal application form' } },
      { src: '/images/portal-ensino.webp', alt: { pt: 'Página de oferta formativa do Portal Académico', en: 'Academic Portal programmes page' } }
    ], repo: 'https://github.com/claudiojgtavares/portal-academico-php', accent: '#3B82F6',
    pt: { summary: 'Fluxos académicos com candidaturas, sete perfis, notas, documentos e relatórios.', problem: 'Organizar processos de uma secretaria académica num protótipo demonstrável e com separação clara de permissões.', solution: 'PHP/MySQL com PDO, dashboards por perfil, seed fictício, CSRF, cookies seguros e validação de uploads.', validation: '95 ficheiros PHP passam lint local. A aplicação é para XAMPP/local; GitHub Pages não executa PHP/MySQL.', stack: ['PHP 8.1+', 'MySQL', 'PDO', 'XAMPP', 'PHPUnit'] },
    en: { summary: 'Academic workflows with applications, seven roles, grades, documents and reports.', problem: 'Organise registrar workflows in a demonstrable prototype with clear permission boundaries.', solution: 'PHP/MySQL with PDO, role dashboards, fictional seed data, CSRF, secure cookies and upload validation.', validation: '95 PHP files pass local syntax lint. The app targets XAMPP/local hosting; GitHub Pages cannot execute PHP/MySQL.', stack: ['PHP 8.1+', 'MySQL', 'PDO', 'XAMPP', 'PHPUnit'] }
  },
  {
    slug: 'totoloto-analyzer', title: 'Totoloto Analyzer', eyebrow: { pt: 'Dados · Método explícito', en: 'Data · Explicit method' }, category: 'Dados', filters: ['Web', 'Data'],
    tags: { pt: ['Web', 'Dados'], en: ['Web', 'Data'] }, image: '/images/totoloto-dashboard.png', imageAlt: { pt: 'Painel de análise estatística do Totoloto Analyzer', en: 'Totoloto Analyzer statistical analysis dashboard' }, repo: 'https://github.com/claudiojgtavares/totoloto-analyzer', accent: '#3B82F6',
    pt: { summary: 'Flask/MySQL para importação, estatísticas, cobertura e backtesting walk-forward.', problem: 'Explorar históricos de lotaria sem confundir descrição passada com probabilidade futura.', solution: 'Motor que separa facto matemático, padrão histórico e heurística; histórico bruto, baseline aleatório e protocolos de validação.', validation: '138 testes Python passam sem MySQL; 2 integrações MySQL são opcionais. O ROI permanece indisponível sem quinhões oficiais.', stack: ['Python', 'Flask', 'MySQL', 'Pandas', 'Unittest'] },
    en: { summary: 'Flask/MySQL tooling for imports, statistics, coverage and walk-forward backtesting.', problem: 'Explore lottery history without confusing past description with future probability.', solution: 'Engine separating mathematical facts, historical patterns and heuristics, with raw history and random baselines.', validation: '138 Python tests pass without MySQL; 2 MySQL integrations are optional. ROI remains unavailable without official prize shares.', stack: ['Python', 'Flask', 'MySQL', 'Pandas', 'Unittest'] }
  },
  {
    slug: 'linux-seguranca-cloud', title: 'Linux, Segurança e Cloud', eyebrow: { pt: 'Sistemas · Laboratório em evolução', en: 'Systems · Evolving lab' }, category: 'Sistemas', filters: ['Systems'],
    tags: { pt: ['Sistemas', 'Segurança'], en: ['Systems', 'Security'] }, image: '/images/linux-terminal.png', imageAlt: { pt: 'Terminal Linux com evidência do laboratório de segurança e cloud', en: 'Linux terminal evidence from the security and cloud lab' }, repo: 'https://github.com/claudiojgtavares/linux-seguranca-cloud', accent: '#3B82F6',
    pt: { summary: 'Laboratório documentado de Ubuntu Server, permissões, SSH, VM, VPS e cloud.', problem: 'Consolidar fundamentos operacionais em exercícios pequenos, verificáveis e sem expor dados reais.', solution: 'Notas, diagramas e evidências sanitizadas de uma VM local, com princípio do menor privilégio.', validation: 'Registo de aprendizagem prática; SSH remoto e cloud real ficam como próximos passos, não como experiência profissional alegada.', stack: ['Linux', 'Ubuntu Server', 'SSH', 'VMware', 'Segurança'] },
    en: { summary: 'Documented lab for Ubuntu Server, permissions, SSH, VMs, VPS and cloud concepts.', problem: 'Consolidate operational fundamentals through small, verifiable exercises without exposing real data.', solution: 'Notes, diagrams and sanitized evidence from a local VM with least-privilege thinking.', validation: 'A learning record; real remote SSH and cloud deployment remain future steps, not claimed professional experience.', stack: ['Linux', 'Ubuntu Server', 'SSH', 'VMware', 'Security'] }
  },
  {
    slug: 'pong-oop-p5js', title: 'Pong OOP', eyebrow: { pt: 'JavaScript · Offline', en: 'JavaScript · Offline' }, category: 'Web', filters: ['Web'],
    tags: { pt: ['Web', 'Offline'], en: ['Web', 'Offline'] }, image: '/images/pong-preview.png', imageAlt: { pt: 'Pong OOP jogável no navegador', en: 'Playable Pong OOP game in the browser' }, repo: 'https://github.com/claudiojgtavares/pong-oop-p5js', demo: 'https://claudiojgtavares.github.io/pong-oop-p5js/', accent: '#3B82F6',
    pt: { summary: 'PONG jogável, offline e orientado a objetos, com testes Node/browser.', problem: 'Criar um jogo pequeno que seja simultaneamente divertido de demonstrar e claro para estudar.', solution: 'Classes Campo, Raquete, Bola, Pontuacao, Som e Jogo com p5.js local, sem CDN e sem servidor.', validation: '34 testes Node, sintaxe e execução direta validados anteriormente; vitória fixa aos 7 pontos.', stack: ['JavaScript', 'p5.js local', 'OOP', 'Node.js', 'Web Audio'] },
    en: { summary: 'Playable offline object-oriented PONG with Node/browser tests.', problem: 'Build a small game that is both fun to demo and straightforward to study.', solution: 'Campo, Raquete, Bola, Pontuacao, Som and Jogo classes with a local p5.js copy and no server.', validation: '34 Node tests, syntax and direct-file execution were previously validated; the win target is fixed at 7 points.', stack: ['JavaScript', 'Local p5.js', 'OOP', 'Node.js', 'Web Audio'] }
  }
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
