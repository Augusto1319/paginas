function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if(login == "augusto123@gmail.com" && senha == "12345"){
        alert ('Sucesso no Registro');
       window.location.href="http://127.0.0.1:5500/menu-anos/pagina-inicial/index2.html"
    }
}
function logi(){
   window.location.href = "http://127.0.0.1:5500/menu-anos/pagina-de-login/index.html"
}