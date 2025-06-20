function calc(){
    let inicio = document.getElementById('n');
    let res = document.getElementById('res');
    let number = Number(inicio.value); 
    let max = document.getElementById('r').value;
    res.innerHTML = `Os resultado são: <br>`;
    for (let i = 1; i <= max; i++) {
        let calc = number * i;
        res.innerHTML += ` ${number} x ${i} = ${calc} <br> `; 
    }

}