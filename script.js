const form=document.querySelector(".formulario-fale-conosco")
const mascara=document.querySelector(".mascara-formulario")

function mostrarForm() {
      form.style.left="40%"
      form.style.trasnform="trasnlateX(-50%)"
      mascara.style.visibility ="visible"
}


function  esconderForm() {
      
      form.style.left="-260px"
      form.style.trasnform="trasnlateX(0)"
      mascara.style.visibility ="hidden"
}

