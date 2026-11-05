var anoatual = new Date().getFullYear();
var p = window.document.getElementsByTagName('p')[2];
var img = window.document.getElementById('mulhervelha.jfif');

function verificaridade() {
    var ano = window.document.getElementById('datadensc');
    var anonumerico = Number(ano.value);
    var masculino = window.document.getElementById('masculino');
    var feminino = window.document.getElementById('feminino');
    var idade = anoatual - anonumerico
    var secao = window.document.getElementById('corpo');
    var img = window.document.getElementById('imagem');

    if (anonumerico == 0 || anonumerico > anoatual) {
        window.alert('[ERRO] Verfique os dados e tente novamente! ')
    }

    else if (idade < 60 && masculino.checked) {
        p.innerText = `Detectamos um Homem com ${idade} anos.`
        img.src = 'homen jovem.jfif';
        secao.style.height = '400px';
        secao.style.width = '600px';
        foto.style.width = '200px';
        foto.style.height = '200px';
        img.style.width = '200px';
        img.style.height = '200px';
    }

    else if (masculino.checked) {
        p.innerText = `Detectamos um Homem com ${idade} anos.`
        img.src = 'homem velho.jfif';
        secao.style.height = '400px';
        secao.style.width = '600px';
        foto.style.width = '200px';
        foto.style.height = '200px';
        img.style.width = '200px';
        img.style.height = '200px';
    }

    else if (idade < 60 && feminino.checked) {
        p.innerText = `Detectamos uma Mulher com ${idade} anos.`
        img.src = 'mulheradulta.jfif';
        secao.style.height = '400px';
        secao.style.width = '600px';
        foto.style.width = '200px';
        foto.style.height = '200px';
        img.style.width = '200px';
        img.style.height = '200px'; 
    }

    else if (feminino.checked) {
        p.innerText = `Detectamos uma Mulher com ${idade} anos.`
        img.src = 'mulhervelha.jfif';
        secao.style.height = '400px';
        secao.style.width = '600px';
        foto.style.width = '200px';
        foto.style.height = '200px';
        img.style.width = '200px';
        img.style.height = '200px'; 
    }
}