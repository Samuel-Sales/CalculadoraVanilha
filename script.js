function inserir(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function calc() {
    let calcular = document.getElementById('resultado').innerHTML;

    if (calcular) {
        document.getElementById('resultado').innerHTML = eval(calcular);
    }
}

const limparTela = () => {
    document.getElementById('resultado').innerHTML = "";
}