document.addEventListener('DOMContentLoaded', () => {
    let numbeSatiz = document.querySelectorAll("#satifacao");
    let sumbt = document.getElementById("concluido");
    let bannerCollection = document.getElementById("pai_container");


    function papapa() {
        for (let i = 0; i < numbeSatiz.length; i++) {
            if(numbeSatiz[i].checked) {
                return numbeSatiz[i].value

            }
            
        }
    }

    sumbt.addEventListener('click', (event) => {
        event.preventDefault();
        bannerCollection.style.display = "none";
    })

})