/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

// MOVE IMAGE

const card = document.getElementById("book")

card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})



//Função personagem 


function Carlos(p){
    const imagem = window.document.getElementById("apareca")
    const carlos = "Carlos"
    const local = window.document.getElementById("escolha").innerHTML = `Personagem Selecionado: ${carlos}`
    window.alert(`${carlos} - Foi Selecionado, Prossiga as etapas`)
    imagem.src = "pixels/carlos2.png"
    imagem.style.width = "200px"
    p = "Carlos"
    
}

function Pedro(p){
    const imagem = window.document.getElementById("apareca")
    const pedro = "Pedro"
    const local = window.document.getElementById("escolha").innerHTML = `Personagem Selecionado: ${pedro}`
    window.alert(`${pedro} - Foi Selecionado, Prossiga as etapas`)
    imagem.src = "pixels/pedro2.png"
    imagem.style.width = "200px"
    p = "Pedro"
    
}

function Thomas(){
    const imagem = window.document.getElementById("apareca")
    const thomas = "Thomas"
    const local = window.document.getElementById("escolha").innerHTML = `Personagem Selecionado: ${thomas}`
    window.alert(`${thomas} - Foi Selecionado, Prossiga as etapas`)
    imagem.src = "pixels/thomas.png"
    imagem.style.width = "200px"
    p = "Thomas"
    
}
//Função enviar
const envio = document.getElementById("enviar")
const text = document.getElementById("titulo")
envio.addEventListener("click", Enviar)
function Enviar(){
    var x = text.value
    if(x == 0){
        window.alert("Favor inserir o titulo")
    }else{
        window.alert(`Texto Enviado Para O Nosso Banco De Dados! Obrigada Candidato`)
    }
    
}
