# Registro de Uso de Inteligência Artificial

**Projeto:** OrbitalWatch – Monitoramento de Detritos Espaciais  
**Disciplina:** Web Development
**Global Solution 2026 – FIAP – Engenharia de Software – 1º Ano**

---

## Interação 1

### O que foi solicitado para a IA

Foi solicitado ao modelo **Claude Sonnet 4.6 (Anthropic)** que atuasse como desenvolvedor Front-End Sênior especialista em JavaScript puro (Vanilla JS) e implementasse quatro funcionalidades de interatividade para a Landing Page do projeto OrbitalWatch, sem uso de nenhum framework ou biblioteca externa (sem React, jQuery, Bootstrap etc.). As funcionalidades pedidas foram:

1. **Slideshow (Carrossel):** com 3 slides temáticos sobre o espaço sideral, com botões de navegação (anterior/próximo), indicadores clicáveis e avanço automático a cada 4,5 segundos.
2. **Validação de Formulário de Contato:** script que impede o envio quando algum campo (nome, e-mail ou mensagem) estiver vazio, além de validar o formato do e-mail via expressão regular, exibindo mensagens visuais de erro ou sucesso.
3. **Quiz Dinâmico:** quiz com 10 perguntas sobre Indústria Espacial e Sustentabilidade, renderizado inteiramente via JavaScript (innerHTML), com feedback imediato por cor (verde = correto, vermelho = errado), barra de progresso e tela de resultado final com pontuação percentual e possibilidade de reiniciar.
4. **Troca de Temas (Theme Switcher):** 3 botões (Dark / Light / Space) que alteram o atributo `data-theme` do `<body>`, ativando variáveis CSS distintas para cada tema, com transição suave de 0.4s.

Também foi solicitado que a IA gerasse o conteúdo completo dos arquivos `index.html`, `css/style.css` e `js/script.js`, dado que os arquivos do repositório estavam vazios, e que criasse este documento `AI.md` conforme exigência da disciplina.

---

### O que a IA retornou

A IA gerou três arquivos completos:

**`js/script.js`**  
Quatro módulos encapsulados em IIFEs (Immediately Invoked Function Expressions) para evitar poluição do escopo global:
- `Theme Switcher`: `querySelectorAll('.theme-btn')` com event listeners que alteram `document.body.dataset.theme` e gerenciam a classe `active`.
- `Slideshow`: controla índice atual (`current`), manipula classes `.active` nos slides e indicadores, e usa `setInterval` de 4500ms para avanço automático com `resetAutoPlay()` ao interagir manualmente.
- `Form Validation`: captura o `submit`, chama `e.preventDefault()`, verifica campos vazios e valida e-mail com regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`, exibindo feedback no elemento `#form-message`.
- `Quiz Dinâmico`: array de 10 objetos `{q, opts, a}`, função `render()` que reconstrói o HTML do quiz a cada pergunta, `pick()` para registrar resposta e aplicar classes `correct`/`wrong`, `advance()` para avançar e `showResult()` para exibir o placar final com classificação por faixa (≥80% = ótimo, ≥50% = bom, <50% = continue estudando).

**`css/style.css`**  
Arquivo completo com: reset CSS, variáveis CSS em `:root` para o tema dark padrão, overrides `body[data-theme="light"]` e `body[data-theme="space"]`, estilos do theme switcher, slideshow (posição absoluta + transição de opacidade), quiz (barra de progresso, opções com hover/disabled/correct/wrong, tela de resultado), formulário de contato (inputs, textarea, estados de foco, mensagens de erro/sucesso) e todos os estilos originais da Landing Page (navbar, hero, seções, cards, etc.).

**`index.html`**  
Arquivo completo com `data-theme="dark"` no `<body>`, três botões `.theme-btn` na navbar, três novas seções (`#galeria`, `#quiz`, `#contato`) além das seis seções obrigatórias da disciplina de Front-End Design, e `<script src="js/script.js"></script>` antes de `</body>`. Todas as imagens do slideshow possuem atributo `alt` descritivo.

---

### O que foi alterado ou rejeitado e o motivo

>
 O intervalo do slideshow foi alterado de 4000ms para 5000ms para melhor usabilidade. A mensagem de erro ao faltar preencher os campos do formulário foi alterada para um tom mais educado. Nenhuma parte foi rejeitada, eu gostei bastante das mudanças que a IA trouxe. Todas as sugestões foram analisadas e adaptadas ao contexto do projeto OrbitalWatch.