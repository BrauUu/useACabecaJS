const seats = [
    [true, false, true, true, false],
    [false, false, false, true, false],
    [true, false, true, true, false],
    [false, true, true, false, true],
    [true, false, false, false, true]
]

const seatsDiv = document.querySelector('#seats-div')
initializeSeats()

function initializeSeats() {
    for (let i = 0; i < seats.length; i++) {
        for (let j = 0; j < seats[i].length; j++) {
            const img = document.createElement("img")
            img.id = `seat-${i}-${j}`
            img.src = seats[i][j] ? './images/seat-unavailable.png' : './images/seat-available.png'
            img.alt = seats[i][j] ? 'Indisponível' : 'Disponível'
            seatsDiv.appendChild(img)
        }
        seatsDiv.appendChild(document.createElement('br'))
    }
}

//const friendsNumber = prompt("Quantos amigos há no grupo?")

function findMachoSeats() {
    for (let i = 0; i < seats.length; i++) {
        for (let j = 0; j < seats[i].length; j++) {
            if (seats[i][j] == false && seats[i][j + 1] == false && seats[i][j + 2] == false) {
                let response;
                response = confirm(`As cadeiras na posição ${i}-${j} até ${i}-${j + 2} estão disponíveis. Gostaria de reservalas?`)

                if (response) {
                    for (let x = j; x <= j + 2; x++) {
                        const selectedSeat = document.querySelector(`#seat-${i}-${x}`)
                        selectedSeat.src = './images/seat-selected.png'
                        selectedSeat.alt = 'Selecionada'
                    }
                    return
                }
                else {
                    for (let x = j; x <= j + 2; x++) {
                        const selectedSeat = document.querySelector(`#seat-${i}-${x}`)
                        selectedSeat.src = './images/seat-available.png'
                        selectedSeat.alt = 'Disponível'
                    }
                }
            }
        }
    }
}