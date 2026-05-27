Registro de Uso de Inteligência Artificial
Projeto: OrbitalWatch – Monitoramento de Detritos Espaciais
Disciplina: Web Development
Global Solution 2026 – FIAP – Engenharia de Software – 1º Ano

Interação 1
O que foi solicitado para a IA:
Precisávamos implementar quatro funcionalidades de interatividade em JavaScript puro
na Landing Page do OrbitalWatch, sem usar nenhum framework externo (sem jQuery,
React, Bootstrap etc.). Como ainda estamos aprendendo JavaScript, pedimos ajuda ao
Claude (Anthropic) para entender como estruturar cada módulo e gerar uma base de
código que pudéssemos estudar e adaptar.
As quatro funcionalidades pedidas foram:

1. Slideshow com 3 imagens, botões de anterior/próximo, indicadores clicáveis e
troca automática a cada alguns segundos.
2. Validação de formulário que bloqueasse o envio com campos vazios e verificasse
o formato do e-mail antes de aceitar o envio.
3. Quiz dinâmico com 10 perguntas sobre a indústria espacial, feedback visual por
cor nas respostas e tela de resultado final com pontuação.
4. Troca de tema com 3 opções (Dark, Light, Space) alterando variáveis CSS em
tempo real.


O que a IA retornou
A IA gerou o código JavaScript em quatro blocos separados, cada um usando função que se executa imediatamente para não misturar variáveis entre os módulos.
Isso foi algo que não conhecíamos antes e aprendemos estudando o código gerado.
Resumindo o que cada parte fez:

- O theme switcher pega todos os botões com .theme-btn e ao clicar, muda o
atributo data-theme do body, que ativa os estilos CSS correspondentes.
- O slideshow controla qual slide está ativo por índice, atualiza as classes e os
indicadores, e usa setInterval para avançar automaticamente. Ao clicar manual,
reinicia o timer.
- A validação intercepta o submit do formulário com e.preventDefault(),
checa campos vazios com .trim() e valida o e-mail com uma expressão regular
simples antes de liberar.
- O quiz usa um array de objetos com pergunta, opções e índice da resposta certa.
Uma função render() monta o HTML a cada pergunta, e showResult() exibe o
placar final.

A IA também atualizou os arquivos index.html e css/style.css para incluir as
novas seções (galeria, quiz e contato) e os estilos necessários para cada componente.

O que foi alterado ou rejeitado e o motivo
O código gerado funcionou, mas fizemos alguns ajustes depois de testar no navegador:

- O intervalo do slideshow estava em 4000ms e deixamos em 5000ms, achamos que
ficava rápido demais pra quem está lendo o texto junto com a imagem.
- A mensagem de erro do formulário quando o campo estava vazio estava bem seca
("Preencha todos os campos"). Mudamos para um texto mais gentil, pedindo que o
usuário preencha antes de enviar.
- Revisamos as perguntas do quiz e ajustamos o enunciado de duas delas que estavam
confusas — a IA gerou perguntas tecnicamente corretas, mas o texto ficou difícil
de entender sem contexto.
- Nenhuma funcionalidade foi rejeitada. Tudo que foi gerado foi aproveitado, com
as adaptações acima.


Ferramenta utilizada: Claude Sonnet 4.6 da Anthropic 