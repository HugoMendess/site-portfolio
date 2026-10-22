/* Todos os textos e links do site ficam aqui. Edite à vontade. */
export type Project = { name: string; stack: string; desc: string; repo: string; live?: string };
export type JobT = { logo: string; date: string; role: string; at: string; items: string[] };

export const GH = "https://github.com/HugoMendess";
export const LI = "https://linkedin.com/in/hugo-mendess";
export const EMAIL = "hugovmendes2018@gmail.com";
export const R = (n: string) => `${GH}/${n}`;
export const PG = (n: string) => `https://hugomendess.github.io/${n}/`;

export const PROJECTS: Project[] = [
  { name: "Porta Premiada", stack: "Next.js · React · TypeScript", desc: "Projeto desenvolvido no curso de Next.js e React.js, com foco em componentes reutilizáveis e rotas modernas.", repo: R("PortaPremiada") },
  { name: "Products API", stack: "React · JavaScript · API REST", desc: "App em React que consome uma API e lista os produtos, desenvolvido no curso de React da Origamid.", repo: R("Products_Api") },
  { name: "Bickraft", stack: "HTML5 · CSS3 · PHP", desc: "Site para exibir um portfólio de bicicletas, desenvolvido no curso de Web Design da Origamid.", repo: R("BickraftProjeto"), live: PG("BickraftProjeto") },
  { name: "Agency", stack: "HTML5 · CSS3", desc: "Site institucional baseado em template da B8One Academy, com layout responsivo.", repo: R("AgencyProjeto"), live: PG("AgencyProjeto") },
  { name: "Selfcare", stack: "HTML5 · CSS3 · Figma", desc: "Desafio de front-end do DevChallenge, seguindo o layout proposto no Figma.", repo: R("selfcare"), live: PG("selfcare") },
  { name: "Flexblog", stack: "HTML5 · CSS3 · Flexbox", desc: "Layout de blog construído com Flexbox, do curso da Origamid.", repo: R("Flexbog-Projeto"), live: PG("Flexbog-Projeto") },
  { name: "B8One Academy: teste final", stack: "HTML5 · CSS3", desc: "Teste final do programa de formação Front-End da B8One Academy.", repo: R("B8oneAcademyTeste02"), live: PG("B8oneAcademyTeste02") },
  { name: "B8One Academy: seletivo", stack: "HTML5 · CSS3", desc: "Teste prático do processo seletivo da B8One Academy.", repo: R("B8One-Academy"), live: PG("B8One-Academy") },
  { name: "Snake Game", stack: "JavaScript", desc: "Jogo da cobrinha do bootcamp HTML Web Developer da Digital Innovation One.", repo: R("SnakeGame") },
  { name: "Clone da Netflix", stack: "HTML5 · CSS3", desc: "Recriação da interface da Netflix para o curso da Digital Innovation One.", repo: R("Clone-Netflix") },
];
export const STACK = ["React.js","Next.js","Vue.js","JavaScript","HTML5","CSS3","Bootstrap","jQuery","PHP","Laravel","Yii2","MySQL","Python","Flask","Node.js","APIs REST","GraphQL","Docker","Git / GitLab","Linux","Redes (CCNA)","Data Visualization","Stable Diffusion"];
export const ROLES = ["Desenvolvedor Full Stack", "Front-End com React e Next.js", "Back-End com PHP e Laravel", "Dashboards e visualização de dados"];
export const JOBS: JobT[] = [
  { logo: "STC", date: "Set 2022 - Atualmente", role: "Desenvolvedor Full Stack", at: "@STC-MA · Secretaria de Transparência e Controle", items: [
    "Desenvolvimento e manutenção de sistemas web governamentais em PHP (Laravel, Yii2) e MySQL;",
    "Front-end do Portal da Transparência com Blade (Laravel), integrado ao back-end em PHP;",
    "Dashboards, gráficos estatísticos e mapas de calor interativos com dados dos municípios do Maranhão;",
    "Interfaces responsivas com React, Next.js e Vue.js;",
    "Otimização de consultas MySQL (ajustes de GROUP BY), modelagem e alterações de esquema;",
    "Ambiente conteinerizado com Docker para o sistema interno Sigimar." ] },
  { logo: "MPF", date: "Out 2020 - Set 2022", role: "Estagiário de Suporte de TI", at: "@MPF-MA · Ministério Público Federal", items: [
    "Suporte técnico N1/N2, manutenção de hardware, software e redes;",
    "Controle de acessos e rotina de backups." ] },
];

