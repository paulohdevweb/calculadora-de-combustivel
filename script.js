function calcular(event){
    event.preventDefault();
    let alcoolInput = document.getElementById("alcool").value;
    
    let gasolinaInput= document.getElementById("gasolina").value;

    let contentResult= document.getElementById("content-result");
    let textResult= document.getElementById("text-result")

    let gasolinaSpan = document.getElementById("gasolina-result");
    let alcoolSpan = document.getElementById("alcool-result");

    /*
    calculo: alcool / gasolina | se o resultado for menor que 0.7 compensa usar alcool
    */
    
    let calculo = (alcoolInput / gasolinaInput);

    if (calculo < 0.7 ){
        //aqui compensa usar alcool
       // alert("COMPENSA USAR ALCOOL")
       textResult.innerHTML= "Compensa usar Álcool";
    }else{
        //aqui compensa usar gasolina
        //alert("COMPENSA USAR GASOLINA")
        textResult.innerHTML= "Compensa usar Gasolina";
    }

    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;
    alcoolSpan.innerHTML = "Álcool R$ " + alcoolInput;
    
    contentResult.classList.remove("hide")

}


