let isHappy = false
let myName = readCookie("username") || undefined
let sadCounter = 0;
let isAngry = false;

setInterval("withoutInteraction()", 18000)
setTimeout("greetings()", 100)

function withoutInteraction() {
  if (!isHappy) {
    if (!isAngry && sadCounter < 3) {
      window.alert(`Oi, alguém por aí?`)
      sadCounter++
      if (sadCounter == 3) {
        setIRockImage("./img/irock-sad.png")
      }
    }
    else if (!isAngry && myName) {
      window.alert(`Todos sempre abandonam o IRock`)
      setIRockImage('./img/irock-angry.png')
      isAngry = true;
    }
  }
}

function greetings() {
  window.alert('Olá, eu sou o iRock!')
}

function touchRock() {

  if (isAngry) {
    isAngryPhases()
    return;
  }

  sadCounter = 0;

  if (!isHappy && !myName) {
    myName = window.prompt('Olá, finalmente alguém. Qual é o seu nome?')
    writeCookie("username", myName, 2)
    if (!myName) {
      return
    }

    window.alert(`É um prazer te conhecer, ${myName}!`)
    happyIRock()
  }
  else if (!isHappy) {
    window.alert(`${myName}, que bom te ver aqui novamente!`)
    happyIRock()
  }
  else {
    window.alert(`Como vai, amigo?`)
  }

}

function setIRockImage(src) {

  const img = document.getElementById('rockImg')
  img.src = src
}

function happyIRock() {
  isHappy = true;

  setIRockImage('./img/irock-smile.png')

  const timer = setTimeout(() => {
    setIRockImage('./img/irock.png');
    isHappy = false
  }, 9000)
}

function isAngryPhases() {
  switch (sadCounter) {
    case 3:
      window.alert(`Não quero conversar com você! Você me abandonou!`)
      sadCounter--;
      break;
    case 2:
      window.alert(`${myName} ainda continua aqui? Vá embora!`)
      sadCounter--;
      break;
    case 1:
      window.alert(`Tudo bem, eu posso te perdoar!`)
      sadCounter--;
      isAngry = false;
      setIRockImage('./img/irock.png');
      break;
  }
}

function resizeIRock() {
  let irock = document.getElementById('rockImg');

  irock.style.height = `50%`
}

//Cookies

function writeCookie(name, value, days) {
  let expires = ""

  if (days) {
    let date = new Date()

    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 10000))
    expires = `; expires=${date.toUTCString()}`
  }

  document.cookie = `${name}=${value}${expires}; path=/`
}

function readCookie(name) {
  let searchName = name + '='
  let cookies = document.cookie.split(';')
  let selectedCookie = cookies.filter(cookie => cookie.trim().includes(searchName))

  if (selectedCookie.length == 1) {
    let [key, value] = selectedCookie[0].split('=')
    return value;
  }
  return null;
}

function eraseCookie(name) {
  writeCookie(name, "", -1)
}