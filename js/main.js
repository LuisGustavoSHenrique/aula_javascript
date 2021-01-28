
function clicou(){
    //alert("obrigado por clicar");
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento"))
}

function redirecionar(){
    window.open("https://github.com/LuisGustavoSHenrique")
    //window.location.href="https://github.com/LuisGustavoSHenrique"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="obrigado por pasar o mouse"
    elemento.innerHTML="obrigado por pasar o mouse"
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="passe o mouse aqui"
    elemento.innerHTML="passe o mouse aqui"
}

function funçãoChange(elemento){
    console.log(elemento.value)
}
/*
function load(){
    alert("Pagina carregada!!s")
}
*/
/*
function soma(n1, n2){
    return n1+n2;
}
*/
/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
*/
/*var validar
function validaIdade(idade){
    var validar;
    if (idade>=18){
        validar = true
    }else{
        validar=false
    }
    return validar;
}

var idade=prompt("Qual é a sua idade?")
console.log(validaIdade(idade));
console.log(validar);

alert(soma(5, 10))
//alert(setReplace("Vai Japão", "Japão", "Croácia"));
*/
/*
var d = new Date();
//alert(d);
alert(d.getMinutes());
*/
/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/
/*
var count=0;
while (count<=5){
    console.log(count);
    count++;
}
*/
/*
var idade = prompt("Qual sua idade?")
//var idade=18;
if (idade>=18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}
*/

/*
var frutas=[{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta={nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista=["maçã","pêra","laranja"];
//lista.push("uva");
//var lista2=["melancia","jaca","limão","banana"];
//var lista3=["manga","ponkan","morango","abacaxi"];
//var listafrutas=[lista,lista2,lista3];
//var listafrutas=lista.concat(lista2,lista3);
//lista.pop();
//console.log(lista.lenght);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join("_"));
//console.log(listafrutas[1][1]);

//var nome="Luis Gustavo";
//var idade=34;
//idade2=10;
//var frase="Japão é o melhor time do mundo";
//alert(nome+" tem "+idade+" anos");
//alert(idade+idade2);

//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Croácia"));