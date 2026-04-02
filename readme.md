# Portfólio Dev Backend e Automação

Portfólio em página única com foco em **desenvolvimento backend**, **integrações** e **automação de processos**.

## Visão geral

- Layout moderno e responsivo (desktop e mobile)
- Tailwind CSS via CDN
- Código limpo com separação de responsabilidades
- Interações leves em JavaScript (menu mobile, animações de entrada e header dinâmico)

## Estrutura do projeto

- `index.html`: entrada principal do site
- `public/index.html`: versão espelhada para cenários com pasta `public`
- `assets/css/styles.css`: estilos customizados
- `assets/js/main.js`: comportamentos da interface
- `assets/img/`: imagens e mídias

## Como executar localmente

Como o projeto usa módulo JavaScript (`type="module"`), rode com um servidor local:

```bash
python -m http.server 5500
```

Acesse:

- `http://localhost:5500/`
- ou `http://localhost:5500/public/`

## Personalização rápida

Edite diretamente em `index.html`:

- Textos de apresentação (Hero e Sobre)
- Cards de projetos
- Stack técnica
- Links de contato (`mailto`, LinkedIn e GitHub)

Ajustes visuais em `assets/css/styles.css`:

- Cores, gradientes e tipografia
- Espaçamentos e componentes (cards, chips, botões)
- Animações e responsividade

## Stack utilizada

- HTML5
- Tailwind CSS (CDN)
- CSS3
- JavaScript (ES Modules)

## Deploy

Pode ser publicado em qualquer hospedagem estática:

- GitHub Pages
- Netlify
- Vercel

## Próximas melhorias sugeridas

- Adicionar formulário de contato com envio real
- Integrar analytics
- Criar página de case detalhada para cada projeto
