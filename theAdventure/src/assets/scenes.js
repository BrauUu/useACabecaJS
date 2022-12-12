const scenes = {
    1: {
        "text": "É hora de começar sua jornada como aventureiro, está pronto?",
        "image": "./assets/images/scene01.jpg",
        "options": [
            {
                "text": "Pode apostar!",
                "toScene": 2
            },
            {
                "text": "Valeu, fica para depois!",
                "toScene": 14
            }
        ]
    },
    2: {
        "text": "Certo! Então escolha qual caminho deseja seguir:",
        "image": "./assets/images/scene02.png",
        "options": [
            {
                "text": "O caminho da floresta parece legal!",
                "toScene": 3
            },
            {
                "text": "Prefiro a montanha!",
                "toScene": 4
            }
        ]
    },
    3: {
        "text": 'No meio da floresta você encontra uma velha bruxa. Que te diz: "Olá jovem aventureiro, aceita essa maçã nada suspeita?"',
        "image": "./assets/images/scene03.jpg",
        "options": [
            {
                "text": "Claro, não parece ser uma má ídeia!",
                "toScene": 5
            },
            {
                "text": "Tenho cara de otário?",
                "toScene": 5
            }
        ]
    },
    4: {
        "text": "Enquanto subia a montanha você avista um pobre cão perdido e com frio.”",
        "image": "./assets/images/scene04.jpg",
        "options": [
            {
                "text": "Acho que devo ajuda-lo!",
                "toScene": 6
            },
            {
                "text": "Não é problema meu",
                "toScene": 6
            }
        ]
    },
    5: {
        "text": "Após uma longa caminhada você consegue sair da floresta, e se depara com um lago. Você tem duas opções: cruzar a ponte estável ou pegar um barquinho todo fudido.",
        "image": "./assets/images/scene05.png",
        "options": [
            {
                "text": "Irei pela ponte.",
                "toScene": 8
            },
            {
                "text": "O barco parece ser uma boa opção.",
                "toScene": 7
            }
        ]
    },
    6: {
        "text": "Alguns metros acima, na montanha, surge uma alcateia de lobos raivosos.",
        "image": "./assets/images/scene06.jpg",
        "options": [
            {
                "text": "Eu jamais correrei de uma briga!",
                "toScene": 9
            },
            {
                "text": "Melhor eu dar no pé.",
                "toScene": 12
            }
        ]
    },
    7: {
        "text": "O barco afundou e você morreu afogado! O barco estava todo fudido, que escolha imbecil!",
        "image": "./assets/images/scene07.jpg",
        "options": [
            {
                "text": "Tentar novamente",
                "toScene": 1
            }
        ]
    },
    8: {
        "text": "Após atravessar a ponte derepente surge um grande ogro, que te acerta e arremessa sua arma no lago, O que você fará?",
        "image": "./assets/images/scene08.jpg",
        "options": [
            {
                "text": "**Aceito a morte e me mijo todo**",
                "toScene": 13
            },
            {
                "text": "**Aremesso a maça**",
                "toScene": 10
            }
        ]
    },
    9: {
        "text": "Um dos lobos morde sua mão e sua arma vai montanha abaixo. O que você fará?",
        "image": "./assets/images/scene09.jpg",
        "options": [
            {
                "text": "**Aceito a morte e me mijo todo**",
                "toScene": 13
            },
            {
                "text": "**Grito por socorro**",
                "toScene": 11
            }
        ]
    },
    10: {
        "text": "Você acerta no meio da testa do ogro e ele caí morto. Assim você termina sua primeira aventura!",
        "image": "./assets/images/scene10.jpg",
        "options": [
            {
                "text": "Tentar novamente",
                "toScene": 1
            }
        ]
    },
    11: {
        "text": "Surge um cão e espanta uma fodendo alcateia de lobos. Assim você termina sua primeira aventura!",
        "image": "./assets/images/scene11.jpg",
        "options": [
            {
                "text": "Tentar novamente",
                "toScene": 1
            }
        ]
    },
    12: {
        "text": "Ao tentar bater em fuga você tropeça e caí da montanha, assim morendo. Que aventureiro covarde!",
        "image": "./assets/images/scene12and13.jpg",
        "options": [
            {
                "text": "Tentar novamente",
                "toScene": 1
            }
        ]
    },
    13: {
        "text": "Era melhor ter ficado em casa!",
        "image": "./assets/images/scene12and13.jpg",
        "options": [
            {
                "text": "Tentar novamente",
                "toScene": 1
            }
        ]
    },
    14: {
        "text": "É sério? Então até depois!",
        "image": "./assets/images/scene14.jpg",
        "options": [
            {
                "text": "Tentar novamente",
                "toScene": 1
            }
        ]
    },
}


export default scenes;