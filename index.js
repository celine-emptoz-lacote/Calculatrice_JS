document.addEventListener('DOMContentLoaded', () => {

    let btns = document.querySelectorAll('button')
    var resultat = document.getElementsByClassName('view')
    let operation = ""
    let reset = false

    for ( let i = 0; i< btns.length; i++){

        btns[i].addEventListener('click', () => {  
            
            if (reset == true){
                operation = ""
                resultat[0].innerHTML = operation
                reset = false
            }

            if (btns[i].getAttribute('id') == "moins"){
                operation = operation + "-"
            }
            else if (btns[i].getAttribute('id') == "plus") {
                operation = operation + "+"
            }
            else if (btns[i].getAttribute('id') == "diviser") {
                operation = operation + "/"
            }
            else if (btns[i].getAttribute('id') == "multiplier") {
                operation = operation + "*"
            }
            else if (btns[i].getAttribute('id') == "egal") {
                operation = eval(operation)
                reset = true
            }
            else {
                operation = operation + btns[i].getAttribute('id')
            }
            
            resultat[0].innerHTML = operation
        })
    }
    
    

})