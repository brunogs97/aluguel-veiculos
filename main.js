const PagamentosComAdicionais = document.querySelector('.oferta-com-adicionais');
const selecionarFormasPagaments = document.querySelector('input-radio')
const pagamentosSemAdicionais = document.querySelector('.valor-sem-adicionais');
const check = document.querySelector('[type=radio]');
const formasPagamentos = document.querySelector('#formas-de-pagamentos');

//console.log(check)

PagamentosComAdicionais.addEventListener('click', (e) => {
    const verificarMarcacao = check.checked;
    if(check) {
        PagamentosComAdicionais.style.background = '#eef1f3';
        pagamentosSemAdicionais.style.background = 'none';
    }

    const valorAVista = 102.59 - (102.59 * 0.05);

    let resposta = `O valor de R$ 102,59 parcelado em 12x fica: ` + '\n';
    for(let i = 1; i <= 12; i++) {
        resposta = `${resposta} ${i} x 102,59 = R$ ${(102.59 / i).toFixed(2)}\n`
    }
    formasPagamentos.innerHTML = `O pagamento à vista fica R$ ${valorAVista.toFixed(2)}` + '\n' + `${resposta}`;
})
    
pagamentosSemAdicionais.addEventListener('click', (e) => {
    const verificarMarcacao = check.checked;

    if(check) {
        pagamentosSemAdicionais.style.background = '#eef1f3';
        PagamentosComAdicionais.style.background = 'none';
    }

    const valorAVista = 88.30 - (88.30 * 0.05);

    let resposta = `O valor de R$ 88,30 parcelado em 12x fica: ` + '\n';
    for(let i = 1; i <= 12; i++) {
        resposta = `${resposta} ${i} x 88,30 = R$ ${(88.30 / i).toFixed(2)}\n`
    }
    formasPagamentos.innerHTML = `O pagamento à vista fica R$ ${valorAVista.toFixed(2)}` + '\n' + `${resposta}`;
})
