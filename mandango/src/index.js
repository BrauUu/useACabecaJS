const seats = [
    [true, false, true, true, false, false, false],
    [false, false, false, true, false, true, true],
    [true, false, true, true, false, true, false],
    [false, true, true, false, true, false, true],
    [true, false, false, false, true, true, false]
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

function findMachoSeats() {
    for (let i = 0; i < seats.length; i++) {
        for (let j = 0; j < seats[i].length; j++) {
            if (seats[i][j] == false && seats[i][j + 1] == false && seats[i][j + 2] == false) {

                const response = confirm(`As cadeiras da fila ${i + 1} posição ${j + 1} a ${j + 3} estão disponíveis. Gostaria de reservar?`)

                if (response) {
                    for (let x = j; x <= j + 2; x++) {
                        const selectedSeat = document.querySelector(`#seat-${i}-${x}`)
                        selectedSeat.src = './images/seat-selected.png'
                        selectedSeat.alt = 'Reservada'
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
    
    alert('Desculpe, não temos mais cadeiras disponíveis.')
}