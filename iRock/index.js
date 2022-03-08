let hasAnswered = false
let name

function greetings() {
  window.alert('Olá, eu sou o iRock!')
}

function touchRock() {
  if(!hasAnswered){
    name = window.prompt('Qual é o seu nome?')

    const img = document.getElementById('rockImg')
    img.src = './img/irock-smile.png'

    hasAnswered = true;
  }

  window.alert(`É um prazer te conhecer ${name}!`)

}