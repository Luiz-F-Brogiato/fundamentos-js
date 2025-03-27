let a = 10;
let b = 20;

let cor = "Amarelo";
let cor2 = "Verde";

if(cor === "Amarelo" && cor2 === "Verde") {
    console.log("A cor é amarelo e verde")
} else {
    console.log("Não é amarelo nem verde")
}

let n = 5;

for(let i = 0; i <= 10; i++) {
    console.log(`${i} X ${n} = ${i*n}`);
}

function calc(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`)
}

let resultado = calc(1, 2, "^");

console.log(resultado)

let calqn = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`)
}

