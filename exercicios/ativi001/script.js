var h = 6;
var p = window.document.getElementsByTagName('p')[0];
var img = window.document.getElementById('manha.jfif');


function horas(){
    if (h <= 12) {
        p.innerText = `Agora são ${h} horas`
        document.body.style.background = 'var(--cormanha)';
        img = window.document.getElementById('manha.jfif');
    }
    else if(h <=18) {
        p.innerText = `Agora são ${h} horas`
        document.body.style.background = 'var(--cortarde)';
        img = window.document.getElementById('tarde.jfif');
    } else {
        p.innerText = `Agora são ${h} horas`
        document.body.style.background = 'var(--cornoite)';
        img = window.document.getElementById('noite.jfif');
    }
}