# 🦁 O Leãozinho — Plataforma Digital

Portal oficial da Lanchonete O Leãozinho, desenvolvido com **React + TypeScript + Vite**.

---

## 🚀 Instalação e Uso

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Build para produção
npm run build

# 4. Preview do build
npm run preview
```

---

## 🗂️ Estrutura do Projeto

```
src/
├── components/
│   ├── cart/
│   │   ├── CartDrawer.tsx       # Drawer lateral do carrinho
│   │   └── CartDrawer.module.css
│   ├── layout/
│   │   ├── Navbar.tsx           # Barra de navegação fixa
│   │   ├── Navbar.module.css
│   │   ├── Footer.tsx           # Rodapé
│   │   └── Footer.module.css
│   ├── pages/
│   │   ├── HomePage.tsx         # Hero + Destaques + Promo Banner
│   │   ├── SobrePage.tsx        # História da Lúcia e valores
│   │   ├── GaleriaPage.tsx      # Grid editorial de fotos
│   │   ├── CardapioPage.tsx     # Cardápio com tabs por categoria
│   │   └── LocalizacaoPage.tsx  # Mapa + horários + contato
│   └── ui/
│       ├── MenuCard.tsx         # Card de item do cardápio
│       ├── SectionHeader.tsx    # Cabeçalho reutilizável de seção
│       └── Toast.tsx            # Notificação de item adicionado
├── context/
│   ├── CartContext.tsx          # Estado global do carrinho (useReducer)
│   └── useToast.ts              # Hook de notificações
├── data/
│   └── index.ts                 # Dados do cardápio, galeria e negócio
├── styles/
│   └── globals.css              # Design tokens (CSS variables) + reset
├── types/
│   └── index.ts                 # Interfaces TypeScript
├── App.tsx                      # Roteamento SPA + providers
└── main.tsx                     # Entry point
```

---

## ✨ Funcionalidades

| Módulo | Funcionalidade |
|---|---|
| **Home** | Hero animado, destaques, banner de promoção |
| **Nossa História** | Storytelling, valores da marca |
| **Galeria** | Grid editorial com hover effects |
| **Cardápio** | Tabs por categoria, controle de quantidade |
| **Localização** | Mapa placeholder, horários, links de rota |
| **Carrinho** | Drawer lateral, cálculo de total, checkout WhatsApp |

---

## 📲 Fluxo de Pedido

1. Cliente navega pelo cardápio
2. Adiciona itens com controle de quantidade (+ / −)
3. Abre o carrinho e revisa o pedido
4. Clica em **"Finalizar pelo WhatsApp"**
5. Mensagem formatada abre direto no WhatsApp da lanchonete

**Zero taxas. Zero comissões.**

---

## ⚙️ Customização

Para adaptar para um cliente real:

1. **`src/data/index.ts`** — Atualizar cardápio, preços, endereço e WhatsApp
2. **`src/styles/globals.css`** — Ajustar paleta de cores (`--gold`, `--red`)
3. **`index.html`** — Meta tags de SEO
4. Substituir emojis por imagens reais via `<img>` nos componentes de card

---

## 🛠️ Tecnologias

- **React 18** — UI declarativa com hooks
- **TypeScript** — Tipagem estrita em todo o projeto
- **Vite** — Build ultrarrápido
- **CSS Modules** — Estilos escopados por componente
- **useReducer + Context** — Gerenciamento de estado do carrinho

---

## 📦 Próximos Passos (Produção)

- [ ] Substituir emojis por fotos reais de alta qualidade
- [ ] Integrar Google Maps embed (API key)
- [ ] Adicionar sistema de promoções dinâmico (CMS headless)
- [ ] Deploy na Vercel ou Netlify (gratuito para projetos estáticos)
- [ ] SEO: Open Graph, Schema.org para restaurante
- [ ] PWA: instalação no celular + notificações push
