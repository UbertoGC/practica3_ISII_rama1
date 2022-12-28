let a_0=false
let b_0=false
function borrar(){
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let c =document.getElementById("resultado")
    a.value = ""
    b.value = ""
    c.value = ""
}
function seleccionar(e){
    if(e =='a'){
        a_0=true
        b_0=false
    }
    else if (e == 'b'){
        a_0=false
        b_0=true
    }
}
function editar(v){
    if(a_0){
        let a = document.getElementById("a")
        let m = a.value
        m = m + v
        a.value = m 
    }
    else if (b_0){
        let b = document.getElementById("b")
        let m = b.value
        m = m + v
        b.value = m 
    }
}
function agregar(s){
    let m = document.getElementById("simbolo")
    m.value = s
}
function suma(a,b,c){
    let c_1 = a + b
    c.value = c_1
}
function resta(a,b,c){
    let c_1 = a - b
    c.value = c_1
}
function division(a,b,c){
    let c_1 = a / b
    c.value = c_1
}
function multiplicacion(a,b,c){
    let c_1 = a * b
    c.value = c_1
}
function operacion(){
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let c =document.getElementById("resultado")
    let a_1 = parseFloat(a.value)
    let b_1 = parseFloat(b.value)
    let s = document.getElementById("simbolo")
    let simbolo = s.value
    if(simbolo == "+"){
        suma(a_1,b_1,c)
    }
    else if( simbolo == "-"){
        resta(a_1,b_1,c)
    }
    else if (simbolo == "x"){
        multiplicacion(a_1,b_1,c)
    }
    else if ( simbolo == "÷"){
        if(b_1 == 0.0){
            window.alert("Division entre cero no permitida")
        }
        else{
            division(a_1,b_1,c)
        }
    }
    else{
        window.alert("Simbolo incorrecto o sin simbolo")
    }
}