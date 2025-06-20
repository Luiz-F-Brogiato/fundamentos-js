function contar(){
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

     if(ini.value == "" && fim.value == "" && passo.value == "" ) {
        alert("Por favor preencha o(s) campo(s)!")
    } else {    
        res.innerHTML = 'Contando';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        for(let c = i; c <= f; c += p) {
             res.innerHTML += `${c} \u{1F449}`;
             //Esse "+=" é para concatenação
        }
        res.innerHTML = `\u{1F3C1}`;
    } 

}