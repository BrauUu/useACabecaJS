import scenes from './assets/scenes.js';

window.addEventListener("load", init);

function init() {

    loadScene(1)

}

function loadScene(toScene) {

    const scene = scenes[toScene];
    let i = 1;

    for (let img of scene.images) {
        changeImage(img, i);
        i++;
    }

    changeText(scene.text);
    i = 1

    for (let option of scene.options) {
        changeButtonText({...option, i})
        i++;
    }

}

function changeImage (image, i) {

    const imageEl = document.querySelector(`#image-${i}`);
    imageEl.src = image;

}

function changeText(text) {
    const p = document.querySelector('#text');
    p.textContent = text;
}

function changeButtonText({ text, toScene, i }) {

    const button = document.querySelector(`#option-${i}`);

    button.textContent = text;
    button.addEventListener('click', () => {
        loadScene(toScene)
    })

}





