function bouton1() {


    var x = document.getElementById('acte1');
    if (x.style.display === 'none') {
        x.style.display = 'flex';
        document.getElementById('aa').innerHTML='-';
    } else {
        x.style.display = 'none';
        document.getElementById('aa').innerHTML='+';
    }
}

function bouton2() {


    var x = document.getElementById('acte2');
    if (x.style.display === 'none') {
        x.style.display = 'flex';
        // x.style.display="";
        document.getElementById('bb').innerHTML='-';
    } else {
        x.style.display = 'none';
        document.getElementById('bb').innerHTML='+';
    }
}



function bouton3() {


    var x = document.getElementById('acte3');
    if (x.style.display === 'none') {
        x.style.display = 'flex';
        document.getElementById('cc').innerHTML='-';
    } else {
        x.style.display = 'none';
        document.getElementById('cc').innerHTML='+';
    }
}