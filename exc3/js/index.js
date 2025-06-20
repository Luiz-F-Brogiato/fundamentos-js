function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (ini.value.length == 0 && fim.value.length == 0 && passo.value.length == 0) {
        alert("Por favor preencha o(s) campo(s)!");
        res.innerHTML = "Impossível Contar";
    } else {
        res.innerHTML = 'Contando.. <br >';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0){
            window.alert("Passo inválido, considerando que o valor inicial é 0");
            p = 1;
            passo.value = 1;
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`;
                //Esse "+=" é para concatenação
            }
            if (i > f) {
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F449}`;
                    //Esse "+=" é para concatenação
                }
            }
      
        }
    }
}