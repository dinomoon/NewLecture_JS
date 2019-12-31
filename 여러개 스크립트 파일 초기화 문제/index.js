window.addEventListener("load", function(){
    var btnPrint = document.getElementById('btn-print');
    btnPrint.onclick = function add(){
        var x = prompt("x: ");
        var y = prompt("y: ");
        x = parseInt(x);
        y = parseInt(y);
        btnPrint.value = x+y;
    }
}) 