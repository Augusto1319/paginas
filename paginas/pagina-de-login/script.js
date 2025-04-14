function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if(login == "augusto123@gmail.com" && senha == "12345"){
        alert ('sucesso');
       window.location.href="http://127.0.0.1:5500/paginas/pagina-inicial/index3.html"
        }
        
        else{
            alert('Email ou senha incorretos')
        }
}
function registro(){
    window.location.href = "http://127.0.0.1:5500/paginas/pagina-de-login/index2.html"
    
 }
