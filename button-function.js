function MudarCorBranco()
    {
        //alert("botão Branco pressionado");
        document.getElementById('quadrado').style.background = "white";   
    } 

function MudarCorVermelho()
    {
        //alert("botão Vermelho pressionado");
        document.getElementById('quadrado').style.background = "red";
     } 

function MudarCorVerde()
    {
        //alert("botão Verde pressionado");
        document.getElementById('quadrado').style.background = "green";   
    } 

function MudarCorAzul()
    {
        //alert("botão Azul pressionado");
        document.getElementById('quadrado').style.background = "blue";   
    } 

function MudarCorPreto()
    {
        //alert("botão preto pressionado");
        document.getElementById('quadrado').style.background = "black";   
    } 

        var button1 = document.getElementById("button1");
        button1.addEventListener("click", MudarCorBranco);

        var button2 = document.getElementById("button2");
        button2.addEventListener("click", MudarCorVermelho);

        var button3 = document.getElementById("button3");
        button3.addEventListener("click", MudarCorVerde);

        var button4 = document.getElementById("button4");
        button4.addEventListener("click", MudarCorAzul);
        
        var button5 = document.getElementById("button5");
        button5.addEventListener("click", MudarCorPreto);