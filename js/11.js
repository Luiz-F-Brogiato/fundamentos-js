
function checaIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    
    if (idade < 16) {
        alert("Não vota");
    } else if (idade < 18 || idade >= 65) {
        alert("Voto opcional");
    } else if (idade >= 18) {
        alert("Voto obrigatório");
    }

    checaHorario();
}

function checaHorario() {
    const agora = new Date();
    const horas = agora.getHours();

    if (horas >= 17) {
        alert("É de noite");
    } else if (horas >= 12) {
        alert("É de tarde");
    } else if (horas >= 6) {
        alert("É de manhã");
    } else {
        alert("É de madrugada");
    }
}
