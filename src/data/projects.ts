export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  category: string;
  tags: string[];
  image: string;
  repo: string;
  demo?: string;
  accent: string;
  pt: { summary: string; problem: string; solution: string; validation: string; stack: string[] };
  en: { summary: string; problem: string; solution: string; validation: string; stack: string[] };
};

export const projects: Project[] = [
  {
    slug: 'acta', title: 'ACTA', eyebrow: 'Mobile · Produto em evolução', category: 'Mobile',
    tags: ['Mobile', 'IA aplicada'], image: '/images/acta-installed.jpeg', repo: 'https://github.com/claudiojgtavares/acta-android', accent: '#f4c95d',
    pt: { summary: 'Reuniões com consentimento, áudio, revisão de transcrição e proposta de ata.', problem: 'Transformar uma reunião gravada num registo verificável sem perder consentimento, contexto ou histórico de versões.', solution: 'App Android offline-first em Kotlin/Compose, Room e regras de negócio centralizadas no repositório; Gemini fica opcional.', validation: 'Testes unitários cobrem consentimento, revisão e versionamento. Build/instalação dependem do ambiente Android disponível.', stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Audio', 'Gemini opcional'] },
    en: { summary: 'Meetings with consent, audio, transcript review and structured minutes.', problem: 'Turn a recorded meeting into a traceable record without losing consent, context or version history.', solution: 'Offline-first Kotlin/Compose Android app with Room and repository-owned business rules; Gemini remains optional.', validation: 'Unit tests cover consent, review and versioning. Build and device installation depend on the target Android environment.', stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Audio', 'Optional Gemini'] }
  },
  {
    slug: 'portal-academico', title: 'Portal Académico', eyebrow: 'Web · Protótipo académico', category: 'Web',
    tags: ['Web', 'Projeto académico'], image: '/images/portal-academico.png', repo: 'https://github.com/claudiojgtavares/portal-academico-php', accent: '#49b6a6',
    pt: { summary: 'Fluxos académicos com candidaturas, sete perfis, notas, documentos e relatórios.', problem: 'Organizar processos de uma secretaria académica num protótipo demonstrável e com separação clara de permissões.', solution: 'PHP/MySQL com PDO, dashboards por perfil, seed fictício, CSRF, cookies seguros e validação de uploads.', validation: '95 ficheiros PHP passam lint local. A aplicação é para XAMPP/local; GitHub Pages não executa PHP/MySQL.', stack: ['PHP 8.1+', 'MySQL', 'PDO', 'XAMPP', 'PHPUnit'] },
    en: { summary: 'Academic workflows with applications, seven roles, grades, documents and reports.', problem: 'Organise registrar workflows in a demonstrable prototype with clear permission boundaries.', solution: 'PHP/MySQL with PDO, role dashboards, fictional seed data, CSRF, secure cookies and upload validation.', validation: '95 PHP files pass local syntax lint. The app targets XAMPP/local hosting; GitHub Pages cannot execute PHP/MySQL.', stack: ['PHP 8.1+', 'MySQL', 'PDO', 'XAMPP', 'PHPUnit'] }
  },
  {
    slug: 'totoloto-analyzer', title: 'Totoloto Analyzer', eyebrow: 'Dados · Método explícito', category: 'Dados',
    tags: ['Web', 'Dados'], image: '/images/totoloto-dashboard.png', repo: 'https://github.com/claudiojgtavares/totoloto-analyzer', accent: '#8bb7ff',
    pt: { summary: 'Flask/MySQL para importação, estatísticas, cobertura e backtesting walk-forward.', problem: 'Explorar históricos de lotaria sem confundir descrição passada com probabilidade futura.', solution: 'Motor que separa fato matemático, padrão histórico e heurística; histórico bruto, baseline aleatório e protocolos de validação.', validation: 'Suíte Python existente e integração MySQL opcional. O ROI permanece indisponível sem quinhões oficiais.', stack: ['Python', 'Flask', 'MySQL', 'Pandas', 'Unittest'] },
    en: { summary: 'Flask/MySQL tooling for imports, statistics, coverage and walk-forward backtesting.', problem: 'Explore lottery history without confusing past description with future probability.', solution: 'Engine separating mathematical facts, historical patterns and heuristics, with raw history and random baselines.', validation: 'Existing Python suite plus optional MySQL integration. ROI remains unavailable without official prize shares.', stack: ['Python', 'Flask', 'MySQL', 'Pandas', 'Unittest'] }
  },
  {
    slug: 'linux-seguranca-cloud', title: 'Linux, Segurança e Cloud', eyebrow: 'Sistemas · Laboratório em evolução', category: 'Sistemas',
    tags: ['Sistemas', 'Segurança'], image: '/images/linux-terminal.png', repo: 'https://github.com/claudiojgtavares/linux-seguranca-cloud', accent: '#d9a441',
    pt: { summary: 'Laboratório documentado de Ubuntu Server, permissões, SSH, VM, VPS e cloud.', problem: 'Consolidar fundamentos operacionais em exercícios pequenos, verificáveis e sem expor dados reais.', solution: 'Notas, diagramas e evidências sanitizadas de uma VM local, com princípio do menor privilégio.', validation: 'Registo de aprendizagem prática; SSH remoto e cloud real ficam como próximos passos, não como experiência profissional alegada.', stack: ['Linux', 'Ubuntu Server', 'SSH', 'VMware', 'Segurança'] },
    en: { summary: 'Documented lab for Ubuntu Server, permissions, SSH, VMs, VPS and cloud concepts.', problem: 'Consolidate operational fundamentals through small, verifiable exercises without exposing real data.', solution: 'Notes, diagrams and sanitized evidence from a local VM with least-privilege thinking.', validation: 'A learning record; real remote SSH and cloud deployment remain future steps, not claimed professional experience.', stack: ['Linux', 'Ubuntu Server', 'SSH', 'VMware', 'Security'] }
  },
  {
    slug: 'pong-oop-p5js', title: 'Pong OOP', eyebrow: 'JavaScript · Offline', category: 'Web',
    tags: ['Web', 'Offline'], image: '/images/pong-preview.png', repo: 'https://github.com/claudiojgtavares/pong-oop-p5js', demo: 'https://claudiojgtavares.github.io/pong-oop-p5js/', accent: '#f07d62',
    pt: { summary: 'PONG jogável, offline e orientado a objetos, com testes Node/browser.', problem: 'Criar um jogo pequeno que seja simultaneamente divertido de demonstrar e claro para estudar.', solution: 'Classes Campo, Raquete, Bola, Pontuacao, Som e Jogo com p5.js local, sem CDN e sem servidor.', validation: '34 testes Node, sintaxe e execução direta validados anteriormente; vitória fixa aos 7 pontos.', stack: ['JavaScript', 'p5.js local', 'OOP', 'Node.js', 'Web Audio'] },
    en: { summary: 'Playable offline object-oriented PONG with Node/browser tests.', problem: 'Build a small game that is both fun to demo and straightforward to study.', solution: 'Campo, Raquete, Bola, Pontuacao, Som and Jogo classes with a local p5.js copy and no server.', validation: '34 Node tests, syntax and direct-file execution were previously validated; the win target is fixed at 7 points.', stack: ['JavaScript', 'Local p5.js', 'OOP', 'Node.js', 'Web Audio'] }
  }
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
