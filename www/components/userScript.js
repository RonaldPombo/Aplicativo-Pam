var horas = localStorage.getItem("hora");
var placa = localStorage.getItem("placa")
var categoria = localStorage.getItem("categoria")
if(horas == 1){
    h = 0
    m = 59
    s = 60
}else if(horas == 2){
    h = 1
    m = 59
    s = 60
}else if(horas == 3){
    h = 2
    m = 59
    s = 60
}

setInterval(function () {
    var i = "Jan 1, 2000 " + h + ":" + m + ":" + s
    var data = new Date(i)
    document.getElementById("categoriaVeiculo").innerHTML = "Categoria do veículo: " + categoria
    document.getElementById("placaVeiculo").innerHTML = "Placa do veículo: " + placa
    document.getElementById("horasRestantes").innerHTML = "Horas Restantes: " + data.getHours() + "h " + data.getMinutes() + "m " + data.getSeconds() + "s "
    if(h == 0){if(m == 0){if(s == 1){document.getElementById("horasRestantes").style.display="none"; document.getElementById("horasRestantes2").style.display="inline"}}}
    if(s == 0){
            m = m - 1
            s = 60
    }else if(m == 0){
        if(h == 0){}else{
        h = h - 1
        m = 59
        s = 60
        }
    }

    s = s-1
}, 1000);
function indexHtml(){
    alert("Os dados armazenados atualmente serão deletados")
    window.location.replace("index.html")
}