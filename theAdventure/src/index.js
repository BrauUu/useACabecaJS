import scenes from './assets/scenes.js';

window.addEventListener("load", init);
const root = document.querySelector(`#root`);

const conditions = {
    'pickedApple' : false,
    'salvedDog' : false
}

function init() {

    loadScene(1)

    for (let i = 1; i <= 2; i++) {
        addButtonEvent(i)
    }

}

function loadScene(toScene) {

    root.setAttribute('actualScene', toScene) 

    const scene = scenes[toScene];

    changeImage(scene.image);

    changeText(scene.text);

    for (let i = 1; i <= 2; i++) {
        let option = scene.options[i - 1] || { text: null, toScene: null }
        if((root.getAttribute('actualScene') == 8 && conditions.pickedApple == false && i == 2) || (root.getAttribute('actualScene') == 9 && conditions.salvedDog == false && i == 2)){
            option = { text: null, toScene: null }
        }  
        changeButtonProps({ ...option, i })

    }

}

function changeImage(image) {

    const imageEl = document.querySelector(`#image`);
    imageEl.src = image;

}

function changeText(text) {
    const p = document.querySelector('#text');
    p.textContent = text;
}

function changeButtonProps({ text, toScene, i }) {

    const button = document.querySelector(`#option-${i}`);

    if (text == null && toScene == null) {
        button.className = 'disabled';
    } else {
        button.className = 'enabled'
        button.textContent = text;
        
        button.setAttribute('toScene', toScene)

    }
}

function addButtonEvent(i) {

    const button = document.querySelector(`#option-${i}`);

    button.addEventListener('click', () => {

        const toScene = button.getAttribute('toScene');
        const actualScene = root.getAttribute('actualScene');
        const clickedButton = button.getAttribute('value');

        if(actualScene == 3 && clickedButton == 1) conditions.pickedApple = true;
        if(actualScene == 4 && clickedButton == 1) conditions.salvedDog = true;

        loadScene(toScene);
    })

}





