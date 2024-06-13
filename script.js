let btnMenu = document.getElementById("btn-menu")
let menu = document.getElementById("menu-mobile")
let overlay = document.getElementById("overlay-menu")

btnMenu.addEventListener("click", ()=>{
 menu.classList.add("abrir-menu")
})

menu.addEventListener("click", ()=>{
    menu.classList.remove("abrir-menu")
   })
overlay.addEventListener("click", ()=>{
    menu.classList.remove("abrir-menu")
   })



window.addEventListener("scroll", function(){
    let header = this.document.querySelector("#header")
    header.classList.toggle('rolagem', window.scrollY > 0)
  })
var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = 'sim'
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}




