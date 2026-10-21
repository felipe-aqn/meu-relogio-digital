# ⏰ Relógio Digital

Um relógio digital interativo e responsivo desenvolvido com HTML5, CSS3 e JavaScript puro (Vanilla JS). O projeto captura o horário em tempo real do sistema do usuário e atualiza a interface a cada segundo.

---

## 🚀 Funcionalidades

- **Exibição em Tempo Real:** Atualização automática de horas, minutos e segundos a cada 1000ms.
- **Formatação Dinâmica:** Garantia de dois dígitos para valores menores que 10 (ex: `07` em vez de `7`) usando `.padStart()`.
- **Layout Responsivo & Moderno:** Interface com tema escuro, tipografia monospaçada (`Azeret Mono`) para estabilidade dos números e centralização usando Flexbox.
- **HTML Semântico:** Estruturado com marcas adequadas (`<header>`, `<main>`, `<section>`, `<footer>`).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura e semântica da página.
- **CSS3:** Estilização, variáveis de cores (`:root`), Flexbox e importação do Google Fonts (`Titillium Web` e `Azeret Mono`).
- **JavaScript (ES6+):** Manipulação do DOM, funções temporizadoras (`setInterval`) e manipulação de datas (`new Date()`).

---

## 📂 Estrutura do Projeto

```text
├── index.html   # Estrutura principal
├── style.css    # Estilização e layout
└── script.js    # Lógica de funcionamento do relógio
