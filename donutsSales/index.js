const TAXRATE = 0.0925
const DONUTPRICE = 0.5

function calcCakeDonuts() {
    let numCakeDonuts = document.getElementById("cakeDonuts").value;
    let numGlazedDonuts = document.getElementById("glazedDonuts").value;

    if(numCakeDonuts.indexOf("dozen") != -1){
        console.log(numCakeDonuts)
        numCakeDonuts = parseInt(numCakeDonuts) * 12;
    }

    if(numGlazedDonuts.indexOf("dozen") != -1){
        numGlazedDonuts = parseInt(numGlazedDonuts) * 12;
    }

    if(!numCakeDonuts){
        numCakeDonuts = 0
    }

    if(!numGlazedDonuts){
        numGlazedDonuts = 0
    }
    
    let subtotal = document.getElementById("subtotal")
    let tax = document.getElementById("tax")
    let total = document.getElementById("total")

    subtotalTemp = (parseInt(numCakeDonuts) + parseInt(numGlazedDonuts)) * DONUTPRICE
    taxTemp = (parseInt(numCakeDonuts) + parseInt(numGlazedDonuts)) * TAXRATE

    subtotal.value = `$${subtotalTemp.toFixed(2)}`
    tax.value = `$${taxTemp.toFixed(2)}`
    total.value = `$${(taxTemp + subtotalTemp).toFixed(2)}`
}

function submitOrder() {
    let name = document.getElementById("name").value;
    let numCakeDonuts = document.getElementById("cakeDonuts").value;
    let numGlazedDonuts = document.getElementById("glazedDonuts").value;
    let minutes = document.getElementById("minutes").value;
    let subtotal = document.getElementById("subtotal").value;
    let tax = document.getElementById("tax").value;
    let total = document.getElementById("total").value;

    if(!name || !numCakeDonuts || !numGlazedDonuts || !minutes || !subtotal || !tax || !total){
        window.alert("Algum(ns) dos campos está(ão) pendente(s)!")
    }
    else {
        window.alert("Pedido feito com sucesso!")
    }
}