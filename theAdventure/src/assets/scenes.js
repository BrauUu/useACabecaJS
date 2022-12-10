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
    }
    
}


export default scenes;