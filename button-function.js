function MudarCorBranco()
    {
        //alert("botão Branco pressionado");
        document.getElementById('quadrado').style.background = "white"; //localiza o id 'quadrado' no html para alterar a sua cor para branco no css
    } 

function MudarCorVermelho()
    {
        //alert("botão Vermelho pressionado");
        document.getElementById('quadrado').style.background = "red"; //localiza o id 'quadrado' no html para alterar a sua cor para vermelho no css
     } 

function MudarCorVerde()
    {
        //alert("botão Verde pressionado");
        document.getElementById('quadrado').style.background = "green"; //localiza o id 'quadrado' no html para alterar a sua cor para verde no css  
    } 

function MudarCorAzul()
    {
        //alert("botão Azul pressionado");
        document.getElementById('quadrado').style.background = "blue"; //localiza o id 'quadrado' no html para alterar a sua cor para azul no css 
    } 

function MudarCorPreto()
    {
        //alert("botão preto pressionado");
        document.getElementById('quadrado').style.background = "black"; //localiza o id 'quadrado' no html para alterar a sua cor para preto no css 
    } 

        var button1 = document.getElementById("button1"); // Retorna a referência do elemento através do seu ID. 
        button1.addEventListener("click", MudarCorBranco); // O método addEventListener () anexa um manipulador de eventos ao elemento especificado. ou comfirma q o botão foi presionado e inicia a function MudarCorBranco

        var button2 = document.getElementById("button2");
        button2.addEventListener("click", MudarCorVermelho);

        var button3 = document.getElementById("button3");
        button3.addEventListener("click", MudarCorVerde);

        var button4 = document.getElementById("button4");
        button4.addEventListener("click", MudarCorAzul);
        
        var button5 = document.getElementById("button5");
        button5.addEventListener("click", MudarCorPreto);
