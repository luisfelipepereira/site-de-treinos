// Exemplo simplificado de lógica de filtro (Node.js/Express)
app.post('/api/gerar-treino', (req, res) => {
    const { gender, goal, level } = req.body;

    // Lógica de seleção (exemplo)
    let workoutPlan = [];
    
    if (gender === 'feminino' && goal === 'hipertrofia') {
        workoutPlan = [
            { exercicio: 'Agachamento Livre', series: 4, reps: '10-12', descanso: '60s' },
            { exercicio: 'Elevação Pélvica', series: 4, reps: '12', descanso: '45s' },
            // ... outros exercícios focados em membros inferiores
        ];
    } else if (gender === 'masculino' && goal === 'forca') {
        workoutPlan = [
            { exercicio: 'Supino Reto', series: 5, reps: '5', descanso: '120s' },
            { exercicio: 'Levantamento Terra', series: 3, reps: '5', descanso: '180s' },
        ];
    }

    res.json(workoutPlan);
});

const trainingData = {
    masculino: {
        hipertrofia: {
            A: [
                { nome: "Supino Reto", series: 4, reps: "10-12", descanso: "60s" },
                { nome: "Crucifixo Inclinado", series: 3, reps: "12", descanso: "45s" },
                { nome: "Tríceps Corda", series: 4, reps: "15", descanso: "30s" }
            ],
            B: [
                { nome: "Puxada Frontal", series: 4, reps: "10", descanso: "60s" },
                { nome: "Remada Curvada", series: 4, reps: "12", descanso: "60s" },
                { nome: "Rosca Direta", series: 3, reps: "10", descanso: "45s" }
            ]
        }
    },
    feminino: {
        hipertrofia: {
            A: [
                { nome: "Agachamento Livre", series: 4, reps: "12", descanso: "60s" },
                { nome: "Leg Press 45°", series: 3, reps: "15", descanso: "45s" },
                { nome: "Cadeira Extensora", series: 4, reps: "12", descanso: "30s" }
            ],
            B: [
                { nome: "Desenvolvimento Halter", series: 3, reps: "12", descanso: "45s" },
                { nome: "Elevação Lateral", series: 3, reps: "15", descanso: "30s" },
                { nome: "Prancha Abdominal", series: 3, reps: "45s", descanso: "30s" }
            ]
        }
    }
};

function generateWorkout(event) {
    event.preventDefault();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const goal = document.getElementById('goal').value;
    
    // Simulação de busca no "banco de dados" acima
    const workout = trainingData[gender][goal].A; 
    renderExercises(workout);
    
    document.getElementById('training-display').style.display = 'block';
    window.scrollTo(0, document.getElementById('training-display').offsetTop);
}

function renderExercises(exercises) {
    const container = document.getElementById('exercise-list');
    container.innerHTML = exercises.map(ex => `
        <div class="exercise-card">
            <div class="ex-info">
                <h3>${ex.nome}</h3>
                <p>${ex.series} Séries x ${ex.reps}</p>
            </div>
            <div class="ex-rest">
                <span>⏱ ${ex.descanso}</span>
            </div>
        </div>
    `).join('');
}