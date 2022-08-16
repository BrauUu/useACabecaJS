const seats = [
    [true, false, true, true, false, false, false],
    [false, false, false, true, false, true, true],
    [true, false, true, true, false, true, false],
    [false, true, true, false, true, false, true],
    [true, false, false, false, true, true, false]
]

const seatsDiv = document.querySelector('#seats-div')
window.onload(initializeSeats())

function initializeSeats() {
    for (let i = 0; i < seats.length; i++) {
        const div = document.createElement("div")
        div.id = `seat-collum-${i}`
        seatsDiv.appendChild(div)
        const divCollum = document.querySelector(`#seat-collum-${i}`)

        for (let j = 0; j < seats[i].length; j++) {
            const div = document.createElement("div")
            const img = document.createElement("img")
            const span = document.createElement("span")

            div.id = `seat-${i}-${j}-div`

            img.id = `seat-${i}-${j}`
            img.src = seats[i][j] ? './images/seat-unavailable.png' : './images/seat-available.png'
            img.alt = seats[i][j] ? 'Indisponível' : 'Disponível'

            span.id = `seat-${i}-${j}-tooltip`
            span.textContent = seats[i][j] ? 'Indisponível' : 'Disponível'

            divCollum.appendChild(div)
            const actualSeatDiv = document.querySelector(`#seat-${i}-${j}-div`)

            actualSeatDiv.appendChild(span)
            actualSeatDiv.appendChild(img)
        }
    }
}

function findMachoSeats() {
    for (let i = 0; i < seats.length; i++) {
        for (let j = 0; j < seats[i].length; j++) {
            if (seats[i][j] == false && seats[i][j + 1] == false && seats[i][j + 2] == false) {

                const response = confirm(`As cadeiras da fila ${i + 1} posição ${j + 1} a ${j + 3} estão disponíveis. Gostaria de reservar?`)

                if (response) {
                    for (let x = j; x <= j + 2; x++) {
                        reserveSeats(i, x)
                    }

                    return;
                }
            }
        }
    }

    alert('Desculpe, não temos mais cadeiras disponíveis.')
}

function reserveSeats( axisX, axisY) {

        seats[axisX][axisY] = true;

        const selectedSeat = document.querySelector(`#seat-${axisX}-${axisY}`)
        selectedSeat.src = './images/seat-selected.png'
        selectedSeat.alt = 'Reservada'

        const selectedSeatTooltip = document.querySelector(`#seat-${axisX}-${axisY}-div > span`)
        selectedSeatTooltip.textContent = 'Reservada'

}