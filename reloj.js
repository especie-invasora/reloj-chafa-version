var actualizarhora =function(){
  var fecha = new Date(),
   var horas = fecha.getHours(),
   amp, 
    var minuto = fecha.getMinutes(),
  var segundo = fecha.getSeconds(),
 var dia_de_la_semana = fecha.getDay(),
 var dia = fecha.getDate(),
 var mes = fecha.getMonth(),
 var year = fecha.getFullYear();

 var phoras = document.querySelector("horas")
 var pamp= document.querySelector("amp")
 var pminuto = document.querySelector("minuto")
 var psegundos = document.querySelector("segundos")
 var pdia_de_la_semana= document.querySelector("dia_de_la_semana")
 var pdia = document.querySelector("dia")
 var pmes = document.querySelector("mes")
 var pyear = document.querySelector("horas") 
 var buttom = document.getElementById("boton")
 buttom =true
 var semana = ["domingo","lunes","martes","miercoles","juevs","viernes","sabado"]
 pdia_de_la_semana.textContent = semana[dia_de_la_semana]

 pdia.textContent = dia

 var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"] 
 pmes.textContent = meses[mes]


 pyear .textContent = year; 


 
if (buttom == true){
    horas === horas;
    amp = "formato 24 horas" 
} else{ 
    horas = horas-12;
    amp = "formato 12 horas"

}



};