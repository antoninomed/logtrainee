
function clickadm() {
    var tbl1 = document.getElementById('tbl1');
    var tbl2 = document.getElementById('tbl2');
    var tbl3 = document.getElementById('tbl3');
    var tbl4 = document.getElementById('tbl4');

    tbl1.style.display = 'block';
    tbl2.style.display = 'none'; 
    tbl3.style.display = 'none'; 
    tbl4.style.display = 'none'; 
}

function clickfin() {
    var tbl1 = document.getElementById('tbl1');
    var tbl2 = document.getElementById('tbl2');
    var tbl3 = document.getElementById('tbl3');
    var tbl4 = document.getElementById('tbl4');

    tbl2.style.display = 'block';
    tbl1.style.display = 'none'; 
    tbl3.style.display = 'none'; 
    tbl4.style.display = 'none'; 

}

function clickrh() {
    var tbl1 = document.getElementById('tbl1');
    var tbl2 = document.getElementById('tbl2');
    var tbl3 = document.getElementById('tbl3');
    var tbl4 = document.getElementById('tbl4');

    tbl1.style.display = 'none';
    tbl2.style.display = 'none'; 
    tbl3.style.display = 'block'; 
    tbl4.style.display = 'none'; 
}

function clickven() {
    var tbl1 = document.getElementById('tbl1');
    var tbl2 = document.getElementById('tbl2');
    var tbl3 = document.getElementById('tbl3');
    var tbl4 = document.getElementById('tbl4');

    tbl1.style.display = 'none';
    tbl2.style.display = 'none'; 
    tbl3.style.display = 'none'; 
    tbl4.style.display = 'block'; 
}

function clickCurso(titulo) {
    sessionStorage.setItem('buttonText', titulo);
    window.location.href = 'instrucao.html';
}


