const scenes = {
    1: {
        "text": "É hora de começar sua jornada como aventureiro, está pronto?",
        "images": ["./assets/images/scene01.jpg"],
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
        "text": "Certo, então você tem que escolher qual caminho quer seguir:",
        "images": ["./assets/images/scene02-forest.png", "./assets/images/scene02-mountain.jpg"],
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
        "text": "No meio da floresta você encontra uma velha bruxa. Que te diz: Olá jovem aventureiro, aceita essa maça nada suspeita?”",
        "images": ["./assets/images/scene03.jpg"],
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
        "images": ["./assets/images/scene04.jpg"],
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
        "text": "Após uma longa caminhada você consegue sair da floresta, e se depara com um lago. Você tem duas opções: cruzar a ponte completmante estável ou pegar um barquinho todo fudido.",
        "images": ["./assets/images/scene05.avif"],
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
        "images": ["./assets/images/scene06.jpg"],
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
        "text": "O barco afunda e você morre afogado! O barco estava fudido, que escolha imbecil!",
        "images": ["./assets/images/scene07.jpg"],
        "options": []
    },
    8: {
        "text": "Após atravessar a ponte derepente surge um grande ogro, que te acerta e arremessa sua arma no lago, O que você fará?",
        "images": ["./assets/images/scene08.jpg"],
        "options": [
            {
                "text": "**Aceito a morte e me mijo todo**",
                "toScene": 13
            },
            {
                "text": "**Aremessa a maça**",
                "toScene": 10
            }
        ]
    },
    9: {
        "text": "Um dos lobos morde sua mão e sua arma vai montanha abaixo. O que você fará?",
        "images": ["./assets/images/scene09.jpg"],
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
        "images": ["./assets/images/scene10.jpg"],
        "options": []
    },
    11: {
        "text": "Surge um cão e espanta uma fodendo alcateia de lobos. Assim você termina sua primeira aventura!",
        "images": ["./assets/images/scene11.jpg"],
        "options": []
    },
    12: {
        "text": "Ao tentar bater em fuga você tropeça e caí da montanha, assim morendo. Que aventureiro covarde!",
        "images": ["./assets/images/scene12.jpg"],
        "options": []
    },
    13: {
        "text": "Era melhor ter ficado em casa!",
        "images": ["./assets/images/scene13.jpg"],
        "options": []
    },
    14: {
        "text": "É sério? Então até depois!",
        "images": ["./assets/images/scene14.jpg"],
        "options": []
    },
}


export default scenes;