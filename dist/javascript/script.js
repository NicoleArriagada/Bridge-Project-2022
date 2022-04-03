// <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
//<script src="funciones.js"> </script>
$(function(){
  $("#nav-placeholder").load("nav.html")
})
$(function(){
  $("#footer-placeholder").load("footer.html")
})

var dataBase = [
  {'img':'./dist/image/design_banners/color-hex_banner.JPG','link':'https://www.color-hex.com','title':'Color-Hex','texto':'You can study various programming languages here, ranging from HTML to SQL. This site has plenty of practical examples for you to practice.'}
, {'img':'./dist/image/design_banners/coolors_banner.JPG','link':'https://www.coolors.co','title':'Coolors','texto':'You can study various programming languages here, ranging from HTML to SQL. This site has plenty of practical examples for you to practice.'}
, {'img':'./dist/image/design_banners/colordrop_banner.JPG','link':'https://colordrop.io','title':'Color Drop','texto':'You can study various programming languages here, ranging from HTML to SQL. This site has plenty of practical examples for you to practice.'}
, {'img':'./dist/image/design_banners/canva_banner.JPG','link':'https://www.canva.com','title':'Canva','texto':'You can study various programming languages here, ranging from HTML to SQL. This site has plenty of practical examples for you to practice.'}
, {'img':'./dist/image/design_banners/coolors_banner.JPG','link':'https://www.coolors.co','title':'Coolors','texto':'You can study various programming languages here, ranging from HTML to SQL. This site has plenty of practical examples for you to practice.'}
, {'img':'./dist/image/design_banners/colordrop_banner.JPG','link':'https://colordrop.io','title':'Color Drop','texto':'You can study various programming languages here, ranging from HTML to SQL. This site has plenty of practical examples for you to practice.'}
, {'img':'imagen1', 'link':'pongo link','title':'titulo', 'text':'blabla'}
]
class MainFill {
  constructor () {
      const main = document.getElementById('mainrow');
      let divContent = '';
      dataBase.forEach(element => { 
        divContent += `<div class="col-sm-12 cold-md-6 col-xl-4">         
      <div class="myRscCard shadow p-3 mb-5 bg-body rounded">
        <div class="image">
         <img src="${element.img}" class="image__img card-img-top" alt="color-hex_banner">
         <a href="${element.link}" target="_blank">                   
          <div class="image__overlay image__overlay--blur">
            <div class="image__title">${element.title}</div> 
          </div>
        </a> 
        </div>                             
        <div class="card-body">
          <p class="card-text">${element.texto}</p>
        </div>
      </div>
    </div>`;
  
      });    
  for (let index = 0; index < 3; index++) {
            
  }
      
  main.innerHTML = divContent;
  }  
}
var mainObj = new MainFill();


/*let namePerson; 
console.log(namePerson);
namePerson=prompt("Escriba su nombre");
console.log(namePerson);

let lastname;
lastname=prompt("Escriba su apellido")
console.log(lastname)

let nombre;
let apellido;
const contador=[1,2,4,6,"Día"]

function solicitud() {
    x=prompt("nombre o apellido");
    return x
}
nombre=solicitud()
apellido=solicitud()
console.log(`mi nombre es ${nombre}, y mi apellido es ${apellido}`)
contador.push(nombre)
console.log(contador)

//
let numero=1;

//est muestra el proceso
for (let i=0; i<10; i++) {
console.log(numero)
console.log(`i=${i}`)
numero++
}


//esto 
let dia
const semana=[]
dia=prompt("Cuátos días tiene la semana?")
for (let i=0; i<dia; i++) {
    //semana[i]=prompt("agregue un día")
    semana.push(prompt("agregue un dia")) [i]
}
console.log(semana)
semana


setTimeout(()=>{
        nombreDeLaFuncion();
    },1000);
*/

