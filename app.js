document.addEventListener('DOMContentLoaded', () => {
    let bannerCollection = document.getElementById("pai_container");
    let form = document.getElementById("btn-value");
    let numbersSatisfied = document.getElementsByName("group");
    let submit = document.getElementById("concluido");
    let bannerThankYou = document.getElementById("thanks_container");
    let select = document.getElementsByTagName("strong");


// Na tela inicial vai parecer o bannerCollecttion, então o bannerThankYou vai ter o display none
    bannerThankYou.style.display = "none";


    submit.addEventListener('click', () => {
        let form = document.getElementById("btn-value");
        let numbersSatisfied = document.getElementsByName("group");

        function validacaoForm(numbersSatisfied) {
            for (let i = 0; i < numbersSatisfied.length; i++) {
              if (numbersSatisfied[i].checked) {
                return numbersSatisfied[i].value;// Pelo menos um botão está marcado
              }
            }
            alert("Avalie de 1 a 5, por favor");
            return false; // Nenhum botão está marcado
          }
        
          if (validacaoForm(numbersSatisfied)) {
            
            // Validação passou, o formulário pode ser enviado
            bannerCollection.style.display= "none";
            bannerThankYou.style.display= "flex";
            
          
            
          } else {
            // Validação falhou, o formulário não será enviado
          }

    } )


    

}) 
