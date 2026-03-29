// Questão 04 - Informações de Aluno
function criarAluno() {
    const nome = document.getElementById("nome").value;
    const curso = document.getElementById("curso").value;
    const matricula = document.getElementById("matricula").value;
    const ira = parseFloat(document.getElementById("ira").value);
    
    // Determinar o Sexo  
    const primeiroNome = nome.split(' ')[0];
    const genero = primeiroNome.toLowerCase().endsWith('a') || primeiroNome.toLowerCase().endsWith('y') ? 'f' : 'm';
    const artigo = genero === 'f' ? 'uma' : 'um';
    const aluno_aluna = genero === 'f' ? 'aluna' : 'aluno';
    
    const aluno = {
        nome: nome,
        genero: genero === 'f' ? 'Feminino' : 'Masculino',
        curso: curso,
        matricula: matricula,
        ira: ira
    };
    
    document.getElementById("alunoResultado").innerText = `${aluno.nome} é ${artigo} ${aluno_aluna} do curso de ${aluno.curso} com matrícula ${aluno.matricula} e IRA ${aluno.ira.toFixed(2)}.\n\nJSON: ${JSON.stringify(aluno, null, 2)}`;
}
