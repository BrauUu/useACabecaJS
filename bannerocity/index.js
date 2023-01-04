
function validateLength(field, min = 1, max = +Infinity) {
    let help_text = document.querySelector(`#${field.name.concat("_help")}`)
    const fieldLength = field.value.length
    if( fieldLength == 0){
        help_text.textContent = "Campo obrigatório!"
        return false
    } else {
        if(fieldLength < min){
            help_text.textContent = `Valor mínimo de ${min} caracteres!`
            return false
        }
        else if(fieldLength > max) {
            help_text.textContent = `Valor máximo de ${max} caracteres!`
            return false
        }

        help_text.textContent = ""
        return true   
    }
}

function validateCEP(field) {

    if(!validateLength(field)) return false

    const CEPregex = /^[0-9]{5}-[0-9]{3}$/gm
    let help_text = document.querySelector(`#${field.name.concat("_help")}`)

    if(!validateRegex(field.value, CEPregex)) {
        help_text.textContent = "CEP inválido! (XXXXX-XXX)"
        return false
    }

    help_text.textContent = ""
    return true
}

function validateDate(field) {

    if(!validateLength(field)) return false

    const dateRegex = /^[0-9]{2}\/[0-9]{2}\/([0-9]{4}|[0-9]{2})$/gm
    let help_text = document.querySelector(`#${field.name.concat("_help")}`)

    if(!validateRegex(field.value, dateRegex)) {
        help_text.textContent = "Data inválida! (DD/MM/AAAA)"
        return false
    }

    help_text.textContent = ""
    return true
}

function validatePhone(field) {

    if(!validateLength(field)) return false

    const phoneRegex = /^[0-9]{11}$/gm
    let help_text = document.querySelector(`#${field.name.concat("_help")}`)

    const value = field.value.replaceAll(" ", "")
    if(!validateRegex(value, phoneRegex)) {
        help_text.textContent = "Telefone inválido! (XX XXXXXXXXX)"
        return false
    }

    help_text.textContent = ""
    return true
}

function validateEmail(field) {

    if(!validateLength(field)) return false

    const emailRegex = /^.+\@.+\..+$/
    let help_text = document.querySelector(`#${field.name.concat("_help")}`)

    if(!validateRegex(field.value, emailRegex)) {
        help_text.textContent = "Email inválido! (example@email.com)"
        return false
    }

    help_text.textContent = ""
    return true
}


function validateRegex(value, regex) {
    if(!regex.test(value)) {
        return false
    }
    return true
}

async function validateSubmit(form) {

    let error = false

    if(!validateCEP(form["cep"])) error = true
    if(!validateLength(form["message"], 1, 32) ) error = true
    if(!validateDate(form["date"])) error = true
    if(!validateLength(form["name"]) ) error = true
    if(!validatePhone(form["phone"])) error = true
    if(!validateEmail(form["email"])) error = true

    if(error == true) {
        return false
    }

    return true

    // alternative form, pending a way to validate functions return
    // for(input of form) {
    //     input.dispatchEvent(new FocusEvent("blur"))
    // }

}