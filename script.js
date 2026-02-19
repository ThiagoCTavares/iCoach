        // ⚠️ NÃO publique isso em produção. Chave no front = qualquer um rouba.
        const RAPID_API_KEY = '5c11e36f6bmsh0362e23e0f5db38p12c774jsna3858301ae03'; // Cole sua chave aqui
        const GIF_CACHE = {};
        const DEFAULT_EXERCISE_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23121212"/%3E%3Ctext x="50" y="58" font-size="32" text-anchor="middle" fill="%2300E676" font-family="Segoe UI,Arial"%3E🏋️%3C/text%3E%3C/svg%3E';
        
        const workouts = [
            {
                id: 'dia1',
                title: 'DIA 1: Base de Força e Integridade Estrutural',
                description: 'Mobilidade, ativações e movimentos compostos para estabilizar o corpo.',
                exercises: [
                    { 
                        name: 'Mobilidade 90/90', 
                        sets: 2, 
                        reps: '10', 
                        rest: 0, 
                        info: 'Foca na saúde da articulação do quadril, permitindo a rotação necessária para chutes potentes e uma guarda fluida no MMA sem sobrecarregar a lombar.', 
                        apiSearch: '90/90 stretch' 
                    },
                    { 
                        name: "World's Greatest Stretch", 
                        sets: 2, 
                        reps: '6', 
                        rest: 0, 
                        info: 'Promove uma mobilidade global (torácica, quadril e flexores), garantindo que seu corpo se mova como uma unidade integrada e protegendo a coluna durante movimentos rotacionais.', 
                        apiSearch: "world's greatest stretch" 
                    },
                    { 
                        name: 'Ativação de Glúteo', 
                        sets: 2, 
                        reps: '15', 
                        rest: 0, 
                        info: '"Acorda" os glúteos para que eles assumam a carga principal do treino, agindo como o principal motor de força e protegendo sua região lombar de impactos.', 
                        apiSearch: 'glute bridge' 
                    },
                    { 
                        name: 'Levantamento Terra (Trap Bar)', 
                        sets: 4, 
                        reps: '5', 
                        rest: 180, 
                        info: 'Desenvolve força bruta e potência explosiva para quedas e explosão, utilizando uma mecânica que preserva a integridade da sua coluna e ombros.', 
                        apiSearch: 'trap bar deadlift' 
                    },
                    { 
                        name: 'Barra Fixa', 
                        sets: 3, 
                        reps: 'Até falha -2', 
                        rest: 120, 
                        info: 'Constrói uma força de puxada vertical real, essencial para dominar o clinch, controlar o oponente no solo e fortalecer os tendões do braço.', 
                        apiSearch: 'pull up' 
                    },
                    { 
                        name: 'Agachamento Búlgaro', 
                        sets: 3, 
                        reps: '12', 
                        rest: 90, 
                        info: 'Corrige assimetrias entre as pernas e blinda os joelhos, desenvolvendo o equilíbrio unilateral crítico para quem precisa trocar base e chutar com estabilidade.', 
                        apiSearch: 'dumbbell bulgarian split squat' 
                    },
                    { 
                        name: 'Face Pulls', 
                        sets: 3, 
                        reps: '20', 
                        rest: 60, 
                        info: 'Atua diretamente na saúde dos ombros e na correção postural, neutralizando a postura projetada para frente típica de lutadores e fortalecendo o manguito rotador.', 
                        apiSearch: 'cable face pull' 
                    },
                    { 
                        name: 'Roda Abdominal', 
                        sets: 3, 
                        reps: '10', 
                        rest: 60, 
                        info: 'Treina o abdômen para agir como um escudo (anti-extensão), impedindo que sua coluna sofra microlesões durante esforços intensos ou torções.', 
                        apiSearch: 'ab roller' 
                    },
                    { 
                        name: 'Marcha Estática', 
                        sets: 3, 
                        reps: '1 min', 
                        rest: 60, 
                        info: 'Constrói uma postura inabalável e força de preensão (pegada) sob carga, simulando a necessidade de manter o controle postural enquanto se movimenta com um peso externo.', 
                        apiSearch: 'dumbbell farmers walk' 
                    }
                ]
            },
            {
                id: 'dia2',
                title: 'DIA 2: Estabilidade Transversal e Saúde dos Ombros',
                description: 'Controle do core, estabilidade transversal e proteção para os ombros.',
                exercises: [
                    { 
                        name: 'Cat-Cow', 
                        sets: 2, 
                        reps: '12', 
                        rest: 0, 
                        info: 'Promove a saúde da coluna através da segmentação vertebral, garantindo que suas vértebras se movam de forma fluida e independente, o que é vital para evitar dores crônicas.', 
                        apiSearch: 'cat cow pose' 
                    },
                    { 
                        name: 'Rotação Torácica', 
                        sets: 2, 
                        reps: '10/lado', 
                        rest: 0, 
                        info: 'Essencial para gerar potência em golpes rotacionais no MMA sem sobrecarregar a lombar, mantendo a mobilidade necessária no meio das costas para movimentos explosivos.', 
                        apiSearch: 'thoracic rotation' 
                    },
                    { 
                        name: 'Cossack Squat', 
                        sets: 2, 
                        reps: '8/lado', 
                        rest: 0, 
                        info: 'Prepara os joelhos e adutores para movimentos laterais e trocas de base, construindo resiliência em amplitudes que a musculação tradicional de hipertrofia costuma ignorar.', 
                        apiSearch: 'bodyweight cossack squats' 
                    },
                    { 
                        name: 'Goblet Squat', 
                        sets: 3, 
                        reps: '10', 
                        rest: 120, 
                        info: 'Utiliza a carga frontal para forçar a ativação profunda do core (abdômen), permitindo um agachamento profundo e seguro que prioriza a integridade da coluna sobre a carga excessiva.', 
                        apiSearch: 'dumbbell goblet squat' 
                    },
                    { 
                        name: 'Floor Press (Halteres)', 
                        sets: 3, 
                        reps: '8', 
                        rest: 120, 
                        info: 'Constrói força de empurre explosiva limitando a amplitude de movimento para proteger o manguito rotador, evitando as microlesões de ombro comuns em supinos tradicionais.', 
                        apiSearch: 'dumbbell floor press' 
                    },
                    { 
                        name: 'Remada Serrote', 
                        sets: 3, 
                        reps: '10/lado', 
                        rest: 60, 
                        info: 'Além de fortalecer as costas, este exercício treina a anti-rotação, ensinando seu tronco a permanecer estável enquanto um lado do corpo exerce força, algo fundamental para o equilíbrio na luta.', 
                        apiSearch: 'dumbbell one arm row' 
                    },
                    { 
                        name: 'Landmine Press', 
                        sets: 3, 
                        reps: '10/lado', 
                        rest: 60, 
                        info: 'Simula a transferência de força do solo para a mão (como em um soco), oferecendo um ângulo de empurre que é anatomicamente mais confortável para os ombros do que o desenvolvimento militar clássico.', 
                        apiSearch: 'landmine 180' 
                    },
                    { 
                        name: 'Prancha Pallof', 
                        sets: 3, 
                        reps: '12/lado', 
                        rest: 60, 
                        info: 'O exercício definitivo de anti-rotação; ele blinda sua coluna contra forças que tentam torcer seu tronco, criando uma estabilidade interna que protege seus discos intervertebrais.', 
                        apiSearch: 'cable pallof press' 
                    },
                    { 
                        name: 'Bird-Dog', 
                        sets: 3, 
                        reps: '10', 
                        rest: 60, 
                        info: 'Fortalece os músculos estabilizadores mais profundos da coluna (multífidos) e melhora a coordenação cruzada do corpo, sendo o padrão ouro para manter uma "coluna de criança" a longo prazo.', 
                        apiSearch: 'bird dog' 
                    }
                ]
            },
            {
                id: 'dia3',
                title: 'DIA 3: Integração Funcional e Potência',
                description: 'Potência e estabilidade global.',
                exercises: [
                    { 
                        name: 'Mobilidade Tornozelo', 
                        sets: 2, 
                        reps: '12', 
                        rest: 0, 
                        info: 'Tornozelos travados são a causa silenciosa de dores no joelho e no quadril. No MMA, essa mobilidade é o que permite que você mude de nível rapidamente para um double leg ou absorva o impacto de um salto.', 
                        apiSearch: 'ankle circles' 
                    },
                    { 
                        name: 'Spiderman Reach', 
                        sets: 2, 
                        reps: '8', 
                        rest: 0, 
                        info: 'Este é o "abre-alas" do corpo. Ele trabalha a mobilidade do quadril e da coluna torácica simultaneamente, preparando seu corpo para a fluidez necessária tanto na luta em pé quanto no chão.', 
                        apiSearch: 'spiderman pushup' 
                    },
                    { 
                        name: 'Prancha Urso', 
                        sets: 2, 
                        reps: '30s', 
                        rest: 0, 
                        info: 'Diferente da prancha comum, ela exige uma ativação brutal do serrátil anterior e dos estabilizadores profundos. Isso blinda suas costelas contra impactos e cria uma base de ombros extremamente estável para socar.', 
                        apiSearch: 'bear crawl' 
                    },
                    { 
                        name: 'Kettlebell Swing', 
                        sets: 4, 
                        reps: '15', 
                        rest: 90, 
                        info: 'É o exercício definitivo para a "dobradiça de quadril". Ele ensina seu corpo a gerar força explosiva a partir dos glúteos e isquiotibiais, o que é a chave para a potência de nocaute e para a velocidade de um sprawl defensivo.', 
                        apiSearch: 'kettlebell swing' 
                    },
                    { 
                        name: 'Desenv. Militar', 
                        sets: 3, 
                        reps: '8', 
                        rest: 120, 
                        info: 'Ao empurrar o peso acima da cabeça com controle, você constrói ombros blindados e resilientes. Ele exige que seu core trabalhe duro para manter a coluna neutra, reforçando a conexão entre membros superiores e tronco.', 
                        apiSearch: 'barbell standing overhead press' 
                    },
                    { 
                        name: 'Turkish Get-Up', 
                        sets: 3, 
                        reps: '3', 
                        rest: 120, 
                        info: 'Este é o "rei" da longevidade. Ele exige mobilidade de quadril, estabilidade de ombro sob carga, força de core e foco mental. É o exercício que garante que você consiga se levantar do chão de forma eficiente e segura.', 
                        apiSearch: 'kettlebell turkish get up (squat style)' 
                    },
                    { 
                        name: 'Deadbug', 
                        sets: 3, 
                        reps: '12', 
                        rest: 60, 
                        info: 'O oposto da Roda Abdominal. Ele treina a estabilidade lombar profunda ao ensinar seu corpo a mover os membros sem "selar" as costas. É o exercício de ouro para quem quer chegar à velhice com a coluna intacta.', 
                        apiSearch: 'dead bug' 
                    },
                    { 
                        name: 'Caminhada Lateral', 
                        sets: 3, 
                        reps: '15', 
                        rest: 60, 
                        info: 'Foca no glúteo médio, o músculo que impede que seu joelho "caia" para dentro. Para um lutador, isso significa chutar com mais estabilidade e ter joelhos muito mais protegidos contra lesões de ligamento.', 
                        apiSearch: 'band lateral walk' 
                    }
                ]
            }
        ];

        const API_BASE_URL = 'https://exercisedb.p.rapidapi.com/exercises/name/';

        async function fetchSmartImage(term) {
            const key = String(term || '').toLowerCase().trim();
            if (!key) return null;
            if (GIF_CACHE[key]) return GIF_CACHE[key];

            try {
                const response = await fetch(`${API_BASE_URL}${encodeURIComponent(key)}`, {
                    headers: {
                        'x-rapidapi-key': RAPID_API_KEY,
                        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                    }
                });
                if (!response.ok) {
                    console.warn(`API Error: ${response.status}`);
                    return null;
                }
                const data = await response.json();
                const target = (Array.isArray(data) && data.length > 0) ? data[0] : (data && data.id ? data : null);
                if (!target) return null;

                if (target.gifUrl) {
                    const secureUrl = target.gifUrl.replace('http:', 'https:');
                    GIF_CACHE[key] = secureUrl;
                    return secureUrl;
                }

                const paddedId = String(target.id).padStart(4, '0');
                const fallbackUrl = `https://raw.githubusercontent.com/yoursunny/gym-exercises/main/exercises/${paddedId}.gif`;
                GIF_CACHE[key] = fallbackUrl;
                return fallbackUrl;
            } catch (error) {
                console.warn('Não foi possível buscar imagem:', error);
                return null;
            }
        }

        const challenges = [
            { id: 'challenge-bar', title: 'O Caminho das 20 Barras', meta: 20, unit: 'reps' },
            { id: 'challenge-hang', title: 'Dead Hang (Pendurado)', meta: 120, unit: 'segundos' },
            { id: 'challenge-pistol', title: 'Pistol Squat', meta: 10, unit: 'reps por perna' },
            { id: 'challenge-pushups', title: 'As 50 Flexões Blindadas', meta: 50, unit: 'reps' },
            { id: 'challenge-lsit', title: 'L-Sit (Sentado em L)', meta: 30, unit: 'segundos' }
        ];

        const STORAGE_KEY = 'icoachProgress';

        let holdTimer;
        let progressInterval;
        let countdownInterval;
        let activeProgressOverlay;
        let infoModal;
        let progressState = {
            currentView: 'home',
            selectedWorkoutId: null,
            workouts: {},
            challenges: {},
            feedback: []
        };

        function alignArray(arr = [], length, defaultValue) {
            const result = [];
            for (let i = 0; i < length; i++) {
                result[i] = arr[i] != null ? arr[i] : defaultValue;
            }
            return result;
        }

        const viewIds = ['home-view', 'workout-view', 'challenges-view', 'feedback-view'];

        function showView(viewId) {
            viewIds.forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                el.classList.toggle('active', id === viewId);
            });
        }

        function saveProgress() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(progressState));
            } catch (error) {
                console.error('Não foi possível salvar o progresso:', error);
            }
        }

        function renderHomeView() {
            const list = document.getElementById('workout-list');
            if (!list) return;
            const challengeState = ensureChallengesState();
            const completedChallenges = challenges.filter(challenge => {
                const mark = challengeState[challenge.id];
                return typeof mark === 'number' && mark >= challenge.meta;
            }).length;
            const challengeSummary = `${completedChallenges}/${challenges.length} metas atingidas`;
            list.innerHTML = workouts.map(workout => {
                const summary = workout.exercises.length ? `${workout.exercises.length} exercícios` : 'Treino em construção';
                return `
                    <div class="workout-card" onclick="openWorkout('${workout.id}')">
                        <h3>${workout.title}</h3>
                        <p class="set-info">${workout.description}</p>
                        <p style="color: var(--text-dim); margin-top: 6px;">${summary}</p>
                    </div>`;
            }).join('');
            list.innerHTML += `
                <div class="workout-card challenges-card" onclick="openChallenges()">
                    <h3>🏆 DESAFIOS DE ELITE</h3>
                    <p class="set-info">Supere-se em desafios extras e registre seus números.</p>
                    <p style="color: var(--text-dim); margin-top: 6px;">${challengeSummary}</p>
                </div>`;
            list.innerHTML += `
                <div class="workout-card feedback-card" onclick="openFeedback()" style="border: 1px dashed #666;">
                    <h3>📝 Diário de Bordo</h3>
                    <p class="set-info">Registre seus insights e cargas.</p>
                </div>`;
        }

        function getWorkoutById(id) {
            return workouts.find(workout => workout.id === id) || null;
        }

        function getWorkoutState(id) {
            return progressState.workouts[id];
        }

        function ensureWorkoutState(id) {
            const workout = getWorkoutById(id);
            if (!workout) return null;
            const existing = progressState.workouts[id] || {
                exerciseProgress: [],
                setStates: [],
                restEndTime: null,
                restingExerciseIndex: null
            };
            existing.exerciseProgress = alignArray(existing.exerciseProgress, workout.exercises.length, 0);
            existing.setStates = alignArray(existing.setStates, workout.exercises.length, 'idle');
            progressState.workouts[id] = existing;
            return existing;
        }

        function ensureChallengesState() {
            const existing = progressState.challenges || {};
            challenges.forEach(challenge => {
                if (!Object.prototype.hasOwnProperty.call(existing, challenge.id)) {
                    existing[challenge.id] = null;
                }
            });
            progressState.challenges = existing;
            return existing;
        }

        function restoreProgress() {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (!saved) return;
            try {
                const parsed = JSON.parse(saved);
                if (!parsed) return;
                progressState.currentView = parsed.currentView || progressState.currentView;
                progressState.selectedWorkoutId = parsed.selectedWorkoutId || progressState.selectedWorkoutId;
                progressState.workouts = parsed.workouts || {};
                progressState.challenges = parsed.challenges || progressState.challenges || {};
                progressState.feedback = parsed.feedback || progressState.feedback || [];
                Object.keys(progressState.workouts).forEach(id => ensureWorkoutState(id));
                ensureChallengesState();
            } catch (error) {
                console.error('Falha ao restaurar progresso:', error);
            }

            if (progressState.currentView === 'workout' && progressState.selectedWorkoutId) {
                const workout = getWorkoutById(progressState.selectedWorkoutId);
                if (workout) {
                    openWorkout(progressState.selectedWorkoutId, { persist: false });
                }
            } else if (progressState.currentView === 'challenges') {
                openChallenges();
            } else if (progressState.currentView === 'feedback') {
                openFeedback();
            }
        }

        function openWorkout(id, options = {}) {
            const workout = getWorkoutById(id);
            if (!workout) return;
            const shouldPersist = options.persist !== false;
            showView('workout-view');
            document.getElementById('workout-title').innerText = workout.title;
            progressState.currentView = 'workout';
            progressState.selectedWorkoutId = id;
            ensureWorkoutState(id);
            renderWorkoutState(id);
            if (shouldPersist) {
                saveProgress();
            }
        }

        function goBack() {
            showView('home-view');
            progressState.currentView = 'home';
            saveProgress();
            renderHomeView();
        }

        function openChallenges() {
            ensureChallengesState();
            renderChallengesView();
            showView('challenges-view');
            progressState.currentView = 'challenges';
            saveProgress();
        }

        function openFeedback() {
            showView('feedback-view');
            progressState.currentView = 'feedback';
            saveProgress();
            renderFeedbackList();
        }

        function addFeedback() {
            const input = document.getElementById('feedback-input');
            if (!input) return;
            const text = input.value.trim();
            if (!text) return;
            const now = new Date();
            const timestamp = `${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')} - ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

            if (!progressState.feedback) progressState.feedback = [];
            progressState.feedback.unshift({ text: text, date: timestamp });

            saveProgress();
            renderFeedbackList();
            input.value = '';
        }

        function renderFeedbackList() {
            const list = document.getElementById('feedback-list');
            if (!list) return;
            if (!progressState.feedback || progressState.feedback.length === 0) {
                list.innerHTML = '<p style="color:#666; text-align:center">Nenhuma nota ainda.</p>';
                return;
            }
            list.innerHTML = progressState.feedback.map((note, index) => `
                <div class="note-card">
                    <div>
                        <span class="note-meta">${note.date}</span>
                        <div class="note-content">${note.text}</div>
                    </div>
                    <button class="btn-delete-note" onclick="deleteFeedback(${index})">×</button>
                </div>
            `).join('');
        }

        function deleteFeedback(index) {
            if (!progressState.feedback) return;
            if (!confirm('Apagar esta nota?')) return;
            progressState.feedback.splice(index, 1);
            saveProgress();
            renderFeedbackList();
        }

        function renderWorkoutState(workoutId) {
            const workout = getWorkoutById(workoutId);
            const list = document.getElementById('exercise-list');
            if (!list) return;
            if (!workout) {
                list.innerHTML = '';
                return;
            }
            if (!workout.exercises.length) {
                list.innerHTML = `<div class="workout-placeholder">Treino em construção. Adicione os exercícios deste dia.</div>`;
                updateProgressBar(workoutId);
                return;
            }

            list.innerHTML = workout.exercises.map((exercise, index) => `
                <div class="exercise-card" id="card-${index}">
                    <div class="ex-img">
                        <img class="ex-gif" src="${DEFAULT_EXERCISE_IMG}" alt="${exercise.name}">
                        <span class="spinner">⌛</span>
                    </div>
                    <div class="ex-content">
                        <div class="ex-header">
                            <h4 style="margin:0">${exercise.name}</h4>
                            <button class="info-button" onclick="showInfo('${workoutId}', ${index})" aria-label="Abrir dica técnica">ⓘ</button>
                        </div>
                        <p class="set-info" id="set-text-${index}">${exercise.sets} Séries x ${exercise.reps}</p>
                    </div>
                    <div class="ex-controls" id="controls-${index}"></div>
                </div>
            `).join('');

            workout.exercises.forEach((exercise, index) => {
                updateExerciseUI(workoutId, index);
            });
            loadWorkoutImages(workout);

            const state = getWorkoutState(workoutId);
            if (state && state.restEndTime && state.restingExerciseIndex !== null) {
                startRestTimer(workoutId, state.restingExerciseIndex, state.restEndTime);
            }

            updateProgressBar(workoutId);
        }

        function loadWorkoutImages(workout) {
            if (!workout || !Array.isArray(workout.exercises)) return;
            const customImages = window.appData && window.appData.customImages ? window.appData.customImages : null;

            workout.exercises.forEach((exercise, index) => {
                const card = document.getElementById(`card-${index}`);
                if (!card) return;
                const img = card.querySelector('.ex-gif');
                const spinner = card.querySelector('.spinner');
                if (!img) return;

                img.src = DEFAULT_EXERCISE_IMG;
                spinner?.classList.remove('hidden');

                if (customImages) {
                    const nameKey = exercise?.name;
                    const searchKey = exercise?.apiSearch;
                    const custom = customImages[nameKey]
                        || (searchKey ? customImages[searchKey] : null)
                        || (nameKey ? customImages[nameKey.toLowerCase()] : null)
                        || (searchKey ? customImages[searchKey.toLowerCase()] : null);
                    if (custom) {
                        img.src = custom;
                        spinner?.classList.add('hidden');
                        return;
                    }
                }

                const term = (exercise?.apiSearch || exercise?.name || '').trim();
                if (!term) {
                    spinner?.classList.add('hidden');
                    return;
                }

                const key = term.toLowerCase().trim();
                if (GIF_CACHE[key]) {
                    img.src = GIF_CACHE[key];
                    spinner?.classList.add('hidden');
                    return;
                }

                fetchSmartImage(term)
                    .then(url => {
                        if (!url) {
                            spinner?.classList.add('hidden');
                            return;
                        }
                        img.onload = () => spinner?.classList.add('hidden');
                        img.onerror = () => {
                            img.src = DEFAULT_EXERCISE_IMG;
                            spinner?.classList.add('hidden');
                        };
                        img.src = url;
                    })
                    .catch(() => {
                        img.src = DEFAULT_EXERCISE_IMG;
                        spinner?.classList.add('hidden');
                    });
            });
        }

        function renderChallengesView() {
            const list = document.getElementById('challenges-list');
            if (!list) return;
            const state = ensureChallengesState();
            list.innerHTML = challenges.map(challenge => {
                const lastMark = state[challenge.id];
                const reached = typeof lastMark === 'number' && lastMark >= challenge.meta;
                const formattedMark = typeof lastMark === 'number'
                    ? (Number.isInteger(lastMark) ? lastMark : parseFloat(lastMark.toFixed(1)))
                    : null;
                const markLabel = formattedMark != null ? `${formattedMark} ${challenge.unit}` : 'Nenhuma marca registrada';
                return `
                    <div class="challenge-card ${reached ? 'completed' : ''}">
                        <div class="ex-header">
                            <h4 style="margin:0">${challenge.title}</h4>
                            ${reached ? '<span class="challenge-medal">🏅</span>' : ''}
                        </div>
                        <p class="set-info">Meta: ${challenge.meta} ${challenge.unit}</p>
                        <p class="set-info">Última Marca: ${markLabel}</p>
                        <button class="btn-done" onclick="registerChallenge('${challenge.id}')">REGISTRAR MARCA</button>
                    </div>`;
            }).join('');
            updateChallengeProgress();
        }

        function updateChallengeProgress() {
            const fill = document.querySelector('#challenge-progress .progress-bar__fill');
            const text = document.getElementById('challenge-progress-text');
            if (!fill || !text) return;
            const state = ensureChallengesState();
            const total = challenges.length;
            const completed = challenges.filter(challenge => {
                const mark = state[challenge.id];
                return typeof mark === 'number' && mark >= challenge.meta;
            }).length;
            const percent = total ? Math.round((completed / total) * 100) : 0;
            fill.style.width = `${percent}%`;
            text.innerText = `${completed}/${total} desafios concluídos`;
        }

        function registerChallenge(challengeId) {
            const challenge = challenges.find(item => item.id === challengeId);
            if (!challenge) return;
            const state = ensureChallengesState();
            const previous = state[challengeId];
            const placeholder = previous != null ? previous : '';
            const result = prompt(
                `Registrar marca para ${challenge.title}\nMeta: ${challenge.meta} ${challenge.unit}`,
                placeholder
            );
            if (result === null) return;
            const sanitized = result.trim().replace(',', '.');
            if (!sanitized) return;
            const parsed = parseFloat(sanitized);
            if (Number.isNaN(parsed)) {
                alert('Informe um valor numérico válido.');
                return;
            }
            state[challengeId] = parsed;
            saveProgress();
            renderChallengesView();
        }

        function updateProgressBar(workoutId) {
            const workout = getWorkoutById(workoutId);
            const fill = document.querySelector('#workout-progress .progress-bar__fill');
            const text = document.getElementById('progress-text');
            if (!workout || !fill || !text) return;
            const state = getWorkoutState(workoutId);
            const total = workout.exercises.length;
            const completed = total
                ? workout.exercises.filter((exercise, index) => (state && (state.exerciseProgress[index] || 0) >= exercise.sets)).length
                : 0;
            const percent = total ? Math.round((completed / total) * 100) : 0;
            fill.style.width = `${percent}%`;
            text.innerText = `${completed}/${total} exercícios concluídos`;
        }

        function updateExerciseUI(workoutId, index) {
            const workout = getWorkoutById(workoutId);
            const state = getWorkoutState(workoutId);
            if (!workout || !state) return;
            const exercise = workout.exercises[index];
            if (!exercise) return;
            const controls = document.getElementById(`controls-${index}`);
            const setText = document.getElementById(`set-text-${index}`);
            const card = document.getElementById(`card-${index}`);
            const completedSets = state.exerciseProgress[index] || 0;
            const isComplete = completedSets >= exercise.sets;

            if (isComplete) {
                if (card) card.classList.add('done');
                if (controls) controls.innerHTML = `<span style="color: var(--accent); font-weight: 800;">✓</span>`;
                if (setText) setText.innerText = `${exercise.sets} Séries • ${exercise.reps}`;
                updateProgressBar(workoutId);
                return;
            }
            if (card) card.classList.remove('done');
            if (setText) setText.innerText = `SÉRIE ${completedSets + 1} de ${exercise.sets} • ${exercise.reps}`;

            if (state.restingExerciseIndex === index && state.restEndTime) {
                renderRestTimer(workoutId, index);
                return;
            }

            if (!controls) return;
            if (state.setStates[index] === 'active') {
                controls.innerHTML = `<button class="btn-training" onclick="handleDone('${workoutId}', ${index})">TREINANDO...</button>`;
            } else if (state.setStates[index] === 'ready') {
                controls.innerHTML = `<button class="btn-done" onclick="startNextSet('${workoutId}', ${index})">PRÓXIMA SÉRIE</button>`;
            } else {
                const overlayId = `progress-${workoutId}-${index}`;
                controls.innerHTML = `
                    <button class="btn-hold"
                        onmousedown="startHold('${workoutId}', ${index})"
                        onmouseup="endHold()"
                        onmouseleave="endHold()"
                        ontouchstart="startHold('${workoutId}', ${index})"
                        ontouchend="endHold()">
                        <div class="progress-overlay" id="${overlayId}"></div>
                        <span>INICIAR</span>
                    </button>`;
            }
            updateProgressBar(workoutId);
        }

        function startHold(workoutId, index) {
            endHold();
            const overlay = document.getElementById(`progress-${workoutId}-${index}`);
            if (!overlay) return;
            let progress = 0;
            activeProgressOverlay = overlay;
            overlay.style.height = '0%';
            holdTimer = setTimeout(() => {
                activateSet(workoutId, index);
                endHold();
            }, 2000);
            progressInterval = setInterval(() => {
                progress = Math.min(100, progress + 5);
                overlay.style.height = `${progress}%`;
            }, 100);
        }

        function endHold() {
            clearTimeout(holdTimer);
            clearInterval(progressInterval);
            progressInterval = null;
            if (activeProgressOverlay) {
                activeProgressOverlay.style.height = '0%';
                activeProgressOverlay = null;
            }
        }

        function activateSet(workoutId, index) {
            const state = ensureWorkoutState(workoutId);
            if (!state) return;
            state.setStates[index] = 'active';
            saveProgress();
            updateExerciseUI(workoutId, index);
        }

        function startNextSet(workoutId, index) {
            const state = ensureWorkoutState(workoutId);
            if (!state) return;
            state.setStates[index] = 'active';
            saveProgress();
            updateExerciseUI(workoutId, index);
        }

        function handleDone(workoutId, index) {
            const workout = getWorkoutById(workoutId);
            const state = getWorkoutState(workoutId);
            if (!workout || !state) return;
            const exercise = workout.exercises[index];
            if (!exercise) return;
            state.exerciseProgress[index] = Math.min(exercise.sets, (state.exerciseProgress[index] || 0) + 1);
            state.setStates[index] = 'idle';
            saveProgress();
            if (state.exerciseProgress[index] >= exercise.sets) {
                finishExercise(workoutId, index);
                return;
            }
            if (exercise.rest && exercise.rest > 0) {
                startRestTimer(workoutId, index);
            } else {
                state.setStates[index] = 'ready';
                saveProgress();
                updateExerciseUI(workoutId, index);
            }
            updateProgressBar(workoutId);
        }

        function finishExercise(workoutId, index) {
            const state = getWorkoutState(workoutId);
            if (!state) return;
            state.setStates[index] = 'done';
            state.restingExerciseIndex = null;
            state.restEndTime = null;
            saveProgress();
            updateExerciseUI(workoutId, index);
            updateProgressBar(workoutId);
        }

        function startRestTimer(workoutId, index, forcedEndTime) {
            const workout = getWorkoutById(workoutId);
            const state = getWorkoutState(workoutId);
            if (!workout || !state) return;
            const exercise = workout.exercises[index];
            if (!exercise) return;
            const endTime = forcedEndTime || Date.now() + exercise.rest * 1000;
            state.restEndTime = endTime;
            state.restingExerciseIndex = index;
            saveProgress();
            renderRestTimer(workoutId, index);
            if (countdownInterval) {
                clearInterval(countdownInterval);
            }
            countdownInterval = setInterval(() => renderRestTimer(workoutId, index), 300);
        }

        function renderRestTimer(workoutId, index) {
            const state = getWorkoutState(workoutId);
            const controls = document.getElementById(`controls-${index}`);
            if (!controls || !state || state.restingExerciseIndex !== index || !state.restEndTime) return;
            const remainingSeconds = Math.max(0, Math.ceil((state.restEndTime - Date.now()) / 1000));
            const minutes = Math.floor(remainingSeconds / 60);
            const seconds = remainingSeconds % 60;
            const timerLabel = `DESCANSO ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            if (remainingSeconds > 0) {
                controls.innerHTML = `
                    <div class="rest-container">
                        <div class="rest-timer-display">
                            ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}
                        </div>
                        <button class="btn-skip-half" onclick="skipRest('${workoutId}', ${index})">
                            PULAR
                        </button>
                    </div>`;
                return;
            }
            completeRest(workoutId, index);
        }

        function completeRest(workoutId, index) {
            const state = getWorkoutState(workoutId);
            if (!state) return;
            state.restEndTime = null;
            state.restingExerciseIndex = null;
            state.setStates[index] = 'active';
            saveProgress();
            if (countdownInterval) {
                clearInterval(countdownInterval);
                countdownInterval = null;
            }
            updateExerciseUI(workoutId, index);
        }

        function skipRest(workoutId, index) {
            completeRest(workoutId, index);
        }

        function initInfoModal() {
            infoModal = document.getElementById('info-modal');
            if (infoModal) {
                infoModal.addEventListener('click', event => {
                    if (event.target === infoModal) {
                        hideInfo();
                    }
                });
            }
        }

        function showInfo(workoutId, index) {
            if (!infoModal) {
                initInfoModal();
            }
            const workout = getWorkoutById(workoutId);
            const exercise = workout ? workout.exercises[index] : null;
            const titleEl = document.getElementById('info-modal-title');
            const textEl = document.getElementById('info-modal-text');
            if (titleEl) {
                titleEl.innerText = exercise ? exercise.name : 'Músculos & Desenvolvimento';
            }
            if (textEl) {
                textEl.innerText = exercise && exercise.info
                    ? exercise.info
                    : 'Informações sobre músculos e desenvolvimento em breve para este exercício.';
            }
            if (infoModal) {
                infoModal.classList.add('open');
            }
        }

        function hideInfo() {
            if (infoModal) {
                infoModal.classList.remove('open');
            }
        }

        function resetWorkout() {
            const workoutId = progressState.selectedWorkoutId;
            const workout = getWorkoutById(workoutId);
            if (!workout) return;
            const state = ensureWorkoutState(workoutId);
            if (!state) return;
            state.exerciseProgress = Array(workout.exercises.length).fill(0);
            state.setStates = Array(workout.exercises.length).fill('idle');
            state.restEndTime = null;
            state.restingExerciseIndex = null;
            saveProgress();
            endHold();
            if (countdownInterval) {
                clearInterval(countdownInterval);
                countdownInterval = null;
            }
            renderWorkoutState(workoutId);
        }

        function resetProgress() {
            progressState.currentView = 'home';
            progressState.selectedWorkoutId = null;
            progressState.workouts = {};
            progressState.challenges = {};
            progressState.feedback = [];
            endHold();
            if (countdownInterval) {
                clearInterval(countdownInterval);
                countdownInterval = null;
            }
            localStorage.removeItem(STORAGE_KEY);
            saveProgress();
            renderHomeView();
            showView('home-view');
        }

        // --- Lógica do Slider de Reset (Corrigida) ---

        const track = document.getElementById('reset-track');
        const knob = document.getElementById('reset-knob');

        if (track && knob) {
            let isDragging = false;
            let startX = 0;
            let currentX = 0;
            let trackWidth = 0;
            let knobWidth = 0;
            let maxDrag = 0;
            let unlockThreshold = 0;

            function startDrag(e) {
                trackWidth = track.offsetWidth;
                knobWidth = knob.offsetWidth;
                maxDrag = trackWidth - knobWidth;
                unlockThreshold = maxDrag * 0.9;

                if (maxDrag <= 0) return;

                isDragging = true;
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                startX = clientX;
                knob.classList.add('dragging');
                if (e.cancelable) e.preventDefault();
            }

            function doDrag(e) {
                if (!isDragging) return;
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                let delta = clientX - startX;
                currentX = Math.max(0, Math.min(delta, maxDrag));
                knob.style.transform = `translateX(${currentX}px)`;
            }

            function endDrag() {
                if (!isDragging) return;
                isDragging = false;
                knob.classList.remove('dragging');

                if (currentX >= unlockThreshold) {
                    knob.style.transform = `translateX(${maxDrag}px)`;
                    setTimeout(() => {
                        if (confirm('Tem certeza que deseja apagar todo o progresso?')) {
                            resetProgress();
                            setTimeout(() => knob.style.transform = 'translateX(0px)', 300);
                        } else {
                            knob.style.transform = 'translateX(0px)';
                        }
                    }, 50);
                } else {
                    knob.style.transform = 'translateX(0px)';
                }
                currentX = 0;
            }

            knob.addEventListener('mousedown', startDrag);
            document.addEventListener('mousemove', doDrag);
            document.addEventListener('mouseup', endDrag);
            knob.addEventListener('touchstart', startDrag, { passive: false });
            document.addEventListener('touchmove', doDrag, { passive: false });
            document.addEventListener('touchend', endDrag);
        }

        window.onload = () => {
            renderHomeView();
            restoreProgress();
            initInfoModal();
        };
    
