let num = document.querySelector('input#value');
let lista = document.querySelector('p#lista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
    } else {
        window.alert('Valor inválido ou já encontrado na lista');
    }
    valores.sort();
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione algum valor antes de finalizar!');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        soma = 0;
        media = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) {
                maior = valores[pos];
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
            }
        }
        media = soma / tot;
        lista.innerHTML = '';
        lista.innerHTML += `<p>Ao  todo, temos ${tot} números cadastrados</p>`;
        lista.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`;
        lista.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`;
        lista.innerHTML += `<p>Somando tudo, temos: ${soma}</p>`;
        lista.innerHTML += `<p>A media dos valores digitados é ${media}</p>`;
    }
}