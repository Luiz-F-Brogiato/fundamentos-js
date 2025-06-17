
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
    diaSemana();
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

function diaSemana () {
   var agora = new Date();
   var diaSem = agora.getDay(); 

   switch(diaSem) {
    case 0:
        alert('Domingo');
        break
    case 1:
        alert('Segunda');
        break
    case 2:
        alert('Terça');
        break
    case 3:
        alert('Quarta');
        break
    case 4: 
        alert('Quinta');
        break
    case 5:
        alert('Sexta');
        break
    case 6:
        alert('Sábado');

    default:
        alert('Dia inválido');
        break
   }

   
}