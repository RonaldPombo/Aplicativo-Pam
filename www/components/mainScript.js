var valorPorHora
function CadastrarPlaca(){
    var placa = document.getElementById('placa')
    var placa2 = document.getElementById('placa2')
    if(placa.checkValidity()){
        if(placa2.checkValidity()){
            document.getElementById("cadastro").innerHTML = "Placa " + placa.value + " - "  + placa2.value + " cadastrada."
            document.getElementById("categoriaForms").style.opacity="100%"
            document.getElementById("placa").disabled = true
            document.getElementById("placa2").disabled = true
            document.getElementById("button1").disabled = true
        }else{
        document.getElementById("cadastro").innerHTML = "Alguma informação está errada, tente novamente"
        }
    }else{
        document.getElementById("cadastro").innerHTML = "Alguma informação está errada, tente novamente"
    }
}
function CadastrarCategoria(){
    var categoria = document.getElementById('categoria').value
    if(categoria == "Subcompacto"){
        document.getElementById("cadastro2").innerHTML = "Categoria selecionada: " + categoria
        valorPorHora = 3.5
        document.getElementById("horasForms").style.opacity="100%"
        document.getElementById("categoria").disabled = true
        document.getElementById("button2").disabled = true
    }else if(categoria == "Compacto"){
        document.getElementById("cadastro2").innerHTML = "Categoria selecionada: " + categoria
        valorPorHora = 4
        document.getElementById("horasForms").style.opacity="100%"
        document.getElementById("categoria").disabled = true
        document.getElementById("button2").disabled = true
    }else if(categoria == "Hatch"){
        document.getElementById("cadastro2").innerHTML = "Categoria selecionada: " + categoria
        valorPorHora = 4.5
        document.getElementById("horasForms").style.opacity="100%"
        document.getElementById("categoria").disabled = true
        document.getElementById("button2").disabled = true
    }else if(categoria == "Sedan"){
        document.getElementById("cadastro2").innerHTML = "Categoria selecionada: " + categoria
        valorPorHora = 5
        document.getElementById("horasForms").style.opacity="100%"
        document.getElementById("categoria").disabled = true
        document.getElementById("button2").disabled = true
    }else if(categoria == "SUV"){
        document.getElementById("cadastro2").innerHTML = "Categoria selecionada: " + categoria
        valorPorHora = 6
        document.getElementById("horasForms").style.opacity="100%"
        document.getElementById("categoria").disabled = true
        document.getElementById("button2").disabled = true
    }else if(categoria == "Pick-Up"){
        document.getElementById("cadastro2").innerHTML = "Categoria selecionada: " + categoria
        valorPorHora = 7
        document.getElementById("horasForms").style.opacity="100%"
        document.getElementById("categoria").disabled = true
        document.getElementById("button2").disabled = true
    }else{
        document.getElementById("cadastro2").innerHTML = "Alguma informação está errada, tente novamente"
    }
}
function ComprarHoras(){
    var horas = document.getElementById('horas')
    if(horas.checkValidity()){
    var valorFinal = parseFloat(horas.value) * valorPorHora
    document.getElementById("comprar").innerHTML = "O valor será R$" + valorFinal
        document.getElementById("horas").disabled = true
        document.getElementById("button3").disabled = true
    }else{
        document.getElementById("comprar").innerHTML = "Alguma informação está errada, tente novamente"
    }
}