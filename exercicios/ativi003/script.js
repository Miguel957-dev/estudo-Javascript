
function contar() {
    var p = window.document.getElementsByTagName('p')[3];
    var ini = window.document.getElementById('inicio');
    var inicio = Number(ini.value);
    var f = window.document.getElementById('fim');
    var fim = Number(f.value);
    var pa = window.document.getElementById('passo');
    var passo = Number(pa.value);
    var c = inicio;
    if (passo <= 0) {
        window.alert('Número do passo não pode ser zero ou menor que zero!')
    } else if (inicio > fim) {
        window.alert('O início não pode ser maior que o fim!')
    }
    else {
        p.innerText = ``
        for (c; c <= fim; c += passo) {
            p.innerText += `${c} 👉  `;
        }
        p.innerText +=  "🏁";
    }

}
