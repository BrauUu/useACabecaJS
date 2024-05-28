let isHappy = false
let myName = readCookie("username") || undefined
let sadCounter = 0;
let isAngry = false;

const PHRASES = ['Tá quente hoje, né?', 'Olha essas nuvens, tá uma cara de chuva!', 'Como é que está sua mãe?', 'E as namoradinhas?', 'OPA!!', 'Vontade de comer um churras hoje!']

const MIN = 0
const MAX = PHRASES.length

const iRock = document.querySelector('#rockImgDiv')

iRock.addEventListener('click', async () => {
  await touchRock()
})

asyncSetInterval(async () => {
  await withoutInteraction()
}, 10000);

setTimeout("greetings()", 500)

async function asyncSetInterval(callback, interval) {
  await new Promise(resolve => setTimeout(resolve, interval));
  await callback();
  await asyncSetInterval(callback, interval);
}

async function withoutInteraction() {
  if (!isHappy) {
    if (!isAngry && sadCounter < 3) {
      if (myName) {
        window.alert(`${myName}, você ainda está por aqui?`)
      }
      else {
        window.alert(`Oie, tem alguém por aqui?`)
      }
      sadCounter++
      if (sadCounter == 3) {
        setIRockImage("./img/irock-sad.png")
      }
      return
    }
    if (!isAngry && myName) {
      window.alert(`Todos sempre acabam abandonando o iRock!`)
      setIRockImage('./img/irock-angry.png')
      isAngry = true;
    }
  }
}

async function greetings() {

  if (!myName) {
    window.alert('Olá, meu nome é iRock! Fique a vontade para interagir comigo!')
    return
  }
  window.alert(`Olá ${myName}, que bom te ver novamente!`)
  await happyIRock()
  return
}

async function touchRock() {

  if (isAngry) {
    isAngryPhases()
    return;
  }

  sadCounter = 0;

  if (!isHappy && !myName) {
    myName = window.prompt('Olá, finalmente alguém apareceu. Qual é o seu nome?')
    if (!myName) {
      return
    }
    writeCookie("username", myName, 1)

    window.alert(`É um prazer te conhecer, ${myName}!`)
    await happyIRock()
    return
  }
  if (!isHappy && myName) {
    window.alert(`Sua presença sempre me deixa feliz!`)
    await happyIRock()
    return
  }
  chat()
}

function setIRockImage(src) {
  const img = document.getElementById('rockImg')
  img.src = src
}

async function happyIRock() {
  if (!isHappy) {
    isHappy = true;

    setIRockImage('./img/irock-smile.png')

    await new Promise(resolve => setTimeout(() => {
      setIRockImage('./img/irock.png');
      isHappy = false
    }, 10000))
  }
}

function chat() {
  message = PHRASES[Math.floor(Math.random() * (MAX - MIN) + MIN)]
  window.alert(message)
}

function isAngryPhases() {
  switch (sadCounter) {
    case 3:
      window.alert(`Não quero conversar com você ${myName}! Você me abandonou!`)
      break;
    case 2:
      window.alert(`${myName} ainda está aqui? Vá embora!`)
      break;
    case 1:
      window.alert(`Tudo bem, já que insiste, eu posso te perdoar ${myName}!`)
      isAngry = false;
      setIRockImage('./img/irock.png');
      break;
  }
  sadCounter--;
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