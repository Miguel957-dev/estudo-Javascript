var anoatual = new Date().getFullYear();
var p = window.document.getElementsByTagName('p')[2];
var img = window.document.getElementById('mulhervelha.jfif');

function verificaridade() {
    var ano = window.document.getElementById('datadensc');
    var anonumerico = Number(ano.value);
    var masculino = window.document.getElementById('masculino');
    var feminino = window.document.getElementById('feminino');
    var idade = anoatual - anonumerico

    if (idade < 60 && masculino.ariaChecked) {
        p.innerText = `Detectamos um Homem com ${idade} anos.`
        img = window.document.getElementById('mulhervelha.jfif');
    }

}