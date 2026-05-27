// ============================================================
//   OrbitalWatch – Interatividade JavaScript
//   Global Solution 2026 | FIAP | Engenharia de Software
//   Disciplina: Web Development
// ============================================================

// ── 1. THEME SWITCHER ────────────────────────────────────────
(function () {
    const btns = document.querySelectorAll('.theme-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.body.dataset.theme = btn.dataset.theme;
        });
    });
})();

// ── 2. SLIDESHOW ─────────────────────────────────────────────
(function () {
    const slides     = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    const prevBtn    = document.getElementById('slide-prev');
    const nextBtn    = document.getElementById('slide-next');

    if (!slides.length) return;

    let current = 0;
    let timer   = null;

    function goTo(index) {
        slides[current].classList.remove('active');
        indicators[current].classList.remove('active');
        indicators[current].setAttribute('aria-selected', 'false');

        current = (index + slides.length) % slides.length;

        slides[current].classList.add('active');
        indicators[current].classList.add('active');
        indicators[current].setAttribute('aria-selected', 'true');
    }

    function autoPlay() {
        timer = setInterval(() => goTo(current + 1), 4500);
    }

    function resetAutoPlay() {
        clearInterval(timer);
        autoPlay();
    }

    prevBtn.addEventListener('click', () => { goTo(current - 1); resetAutoPlay(); });
    nextBtn.addEventListener('click', () => { goTo(current + 1); resetAutoPlay(); });

    indicators.forEach((dot, i) => {
        dot.addEventListener('click', () => { goTo(i); resetAutoPlay(); });
    });

    autoPlay();
})();

// ── 3. VALIDAÇÃO DE FORMULÁRIO ───────────────────────────────
(function () {
    const form  = document.getElementById('contact-form');
    const msgEl = document.getElementById('form-message');

    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();

        const name    = document.getElementById('field-name').value.trim();
        const email   = document.getElementById('field-email').value.trim();
        const message = document.getElementById('field-message').value.trim();

        msgEl.className = 'form-message';

        if (!name || !email || !message) {
            msgEl.textContent = '⚠ Preencha todos os campos antes de enviar.';
            msgEl.classList.add('error');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            msgEl.textContent = '⚠ Informe um e-mail válido (ex: nome@dominio.com).';
            msgEl.classList.add('error');
            return;
        }

        msgEl.textContent = '✓ Mensagem enviada com sucesso! Entraremos em contato em breve.';
        msgEl.classList.add('success');
        form.reset();
    });
})();

// ── 4. QUIZ DINÂMICO ─────────────────────────────────────────
(function () {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    const questions = [
        {
            q: 'Quantos detritos espaciais rastreáveis existem atualmente em órbita terrestre?',
            opts: ['Cerca de 5.000', 'Mais de 27.000', 'Menos de 1.000', 'Cerca de 100.000'],
            a: 1
        },
        {
            q: "O que é a 'Síndrome de Kessler'?",
            opts: [
                'Um tipo de propulsão iônica usada em satélites',
                'Um protocolo de comunicação entre satélites',
                'Uma reação em cascata onde colisões geram novos detritos indefinidamente',
                'O nome dado ao primeiro satélite artificial da NASA'
            ],
            a: 2
        },
        {
            q: 'Qual ODS da ONU está diretamente relacionado à inovação tecnológica e infraestrutura?',
            opts: ['ODS 2', 'ODS 7', 'ODS 9', 'ODS 15'],
            a: 2
        },
        {
            q: 'A que velocidade aproximada os detritos orbitais viajam em órbita baixa terrestre?',
            opts: ['1 km/s', '3 km/s', '7 km/s', '20 km/s'],
            a: 2
        },
        {
            q: 'Qual API fornece dados TLE (Two-Line Element) de objetos rastreados em órbita?',
            opts: ['Google Maps API', 'NASA Space-Track', 'Open Weather Map API', 'ESA Climate Data Store'],
            a: 1
        },
        {
            q: 'Qual empresa privada coordena mais de 6.000 satélites em órbita baixa usando algoritmos em tempo real?',
            opts: ['Blue Origin', 'Rocket Lab', 'SpaceX (Starlink)', 'Amazon Kuiper'],
            a: 2
        },
        {
            q: "O que significa 'SaaS' no contexto de soluções como o OrbitalWatch?",
            opts: [
                'Satellite as a Service',
                'Software as a Service',
                'Space as a Service',
                'Sensor as a Service'
            ],
            a: 1
        },
        {
            q: 'Qual é o custo médio estimado de um satélite comercial perdido por colisão com detritos?',
            opts: ['US$ 10 mil', 'US$ 1 milhão', 'US$ 300 milhões', 'US$ 10 bilhões'],
            a: 2
        },
        {
            q: 'O que a ESA DISCOS fornece para apoiar o monitoramento orbital?',
            opts: [
                'Previsão climática terrestre baseada em satélites',
                'Informações sobre detritos, fragmentações e eventos orbitais históricos',
                'Dados de navegação GPS para uso civil',
                'Telemetria de foguetes em fase de lançamento'
            ],
            a: 1
        },
        {
            q: 'Como o OrbitalWatch contribui indiretamente com o ODS 13 (Ação Climática)?',
            opts: [
                'Medindo CO₂ diretamente na atmosfera com sensores embarcados',
                'Protegendo satélites de monitoramento climático que dependem de órbitas limpas',
                'Controlando padrões climáticos por meio de satélites geoestacionários',
                'O OrbitalWatch não tem nenhuma relação com o ODS 13'
            ],
            a: 1
        }
    ];

    let current  = 0;
    let score    = 0;
    let answered = false;

    function render() {
        const q   = questions[current];
        const pct = Math.round((current / questions.length) * 100);

        container.innerHTML = `
            <div class="quiz-header">
                <span class="quiz-progress-text">Pergunta ${current + 1} de ${questions.length}</span>
                <div class="quiz-bar">
                    <div class="quiz-bar-fill" style="width: ${pct}%"></div>
                </div>
            </div>
            <p class="quiz-question">${q.q}</p>
            <div class="quiz-options">
                ${q.opts.map((opt, i) => `
                    <button class="quiz-opt" data-i="${i}">${opt}</button>
                `).join('')}
            </div>
            <button class="btn-primary quiz-next hidden" id="quiz-next">
                ${current === questions.length - 1 ? 'Ver resultado' : 'Próxima →'}
            </button>
        `;

        answered = false;

        container.querySelectorAll('.quiz-opt').forEach(btn => {
            btn.addEventListener('click', () => pick(parseInt(btn.dataset.i)));
        });

        document.getElementById('quiz-next').addEventListener('click', advance);
    }

    function pick(idx) {
        if (answered) return;
        answered = true;

        const correct = questions[current].a;

        container.querySelectorAll('.quiz-opt').forEach((btn, i) => {
            btn.disabled = true;
            if (i === correct) btn.classList.add('correct');
            if (i === idx && i !== correct) btn.classList.add('wrong');
        });

        if (idx === correct) score++;

        document.getElementById('quiz-next').classList.remove('hidden');
    }

    function advance() {
        current++;
        if (current < questions.length) {
            render();
        } else {
            showResult();
        }
    }

    function showResult() {
        const pct   = Math.round((score / questions.length) * 100);
        const level = pct >= 80
            ? ['result-great', 'Excelente! Você domina a indústria espacial.']
            : pct >= 50
            ? ['result-ok',    'Bom trabalho! Continue explorando o universo.']
            : ['result-low',   'Continue estudando — o espaço tem muito a revelar!'];

        container.innerHTML = `
            <div class="quiz-result ${level[0]}">
                <div class="result-score">${score}<span>/${questions.length}</span></div>
                <div class="result-pct">${pct}% de acertos</div>
                <p class="result-msg">${level[1]}</p>
                <button class="btn-primary" id="quiz-restart">Tentar novamente</button>
            </div>
        `;

        document.getElementById('quiz-restart').addEventListener('click', () => {
            current  = 0;
            score    = 0;
            answered = false;
            render();
        });
    }

    render();
})();