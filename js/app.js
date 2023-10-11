const BOTAO = document.querySelector('#gerarDados').addEventListener('click', () => {

    const moto = document.querySelectorAll('.moto');

    let maior = 0;
    let menor = 0;
    
    moto.forEach(moto => {

        const kmRodado = moto.querySelector('.kilometragem').textContent;
        
        const autonomia = moto.querySelector('.autonomia').textContent;
        
        const numCarregamentos = kmRodado / autonomia;

        const tempo = moto.querySelector('.tempo').textContent;
        const gastoMes = (numCarregamentos * tempo) * 1304;

        moto.querySelector('.gasto').textContent = gastoMes;
    
        if (gastoMes > maior) {
            maior = gastoMes;
            modeloMaior = moto;
        }
        else if (gastoMes < menor || menor === 0) {
            menor = gastoMes
            modeloMenor = moto;
        }

    });

    modeloMaior.querySelector('.gasto').classList.add('bg-danger');
    
    const maisGasto = document.querySelector('.maiorGasto').textContent = modeloMaior.querySelector('.modelo').textContent;
    const menorGasto = document.querySelector('.menorGasto').textContent = modeloMenor.querySelector('.modelo').textContent;
});