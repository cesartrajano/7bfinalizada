//efeito do botão voltar ao Topo

function  Topo (){
    window.scrollTo (
       {
         top:0,
        left:0,
        behavior:'smooth'
       }
    )
}
    
//Validação de Login 

function login(){
    var logado  = 0;
    var usuario = document.getElementById("usuario").value; 
    var senha = document.getElementById("senha").value;

    if(usuario == 'admin' && senha == '123456'){
        window.location = "index.html";
        logado = 1;
    }

    if(logado == 0){
        alert("acesso negado. dados incorretos");
    }

}


//Ativar alert no botão cadastra