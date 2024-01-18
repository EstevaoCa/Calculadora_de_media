const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./Imagens/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./Imagens/reprovado.png" alt="Emoji decepcionado"/>';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a Nota Minima:"));

linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizarMediaFinal();
})

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    
    if (atividade.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`);
    } else {
        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));


        let linha = '<tr>';
        linha += `<td> ${inputNomeAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado } </td>`;
        linha += '</tr>'

        linhas += linha;
    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media_final_valor').innerHTML = mediaFinal;
    document.getElementById('media_final_resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}