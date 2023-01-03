//Variáveis

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnOpen = document.querySelector('#btnOpen')
const btnOpenAgain = document.querySelector('#btnOpenAgain')
let message = ["Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", "Não é o que você fala que te define, mas sim o que você faz", "Sua força estará em permanecerem calmos e terem confiança", "A vida trará coisas boas se tiver paciência.","Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.", "A juventude não é uma época da vida, é um estado de espírito.", "O bom-senso vale mais do que muito conhecimento."]
let randonPhrases = message[Math.floor((Math.random() * message.length))]

//Eventos

btnOpen.addEventListener('click', handleOpenClick)
btnOpenAgain.addEventListener('click', handleOpenAgainClick)

document.addEventListener('keydown', function(e) {
    console.log(e.key)
    if(e.key == 'Enter') {
        handleOpenAgainClick()
        
    }
})

console.log()

function handleOpenClick(event) {
    event.preventDefault()

    toggleScreen()

    screen2.querySelector(".message").innerText = randonPhrases

    
    console.log(btnOpen)
}


function handleOpenAgainClick(){
    toggleScreen()
    
    randonPhrases = message[Math.floor((Math.random() * message.length))]
    
    screen2.querySelector(".message").innerText = randonPhrases
}



function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

};