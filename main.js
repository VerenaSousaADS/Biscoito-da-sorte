//Variáveis

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnOpen = document.querySelector('#btnOpen')
// const btnOpenAgain = document.querySelector('#btnOpenAgain')
let message = ["Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", "Não é o que você fala que te define, mas sim o que você faz", "Sua força estará em permanecerem calmos e terem confiança"]
let randonPhrases = message[Math.floor((Math.random() * message.length))]

console.log(randonPhrases)

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
    handleOpenClick()
}



function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

};