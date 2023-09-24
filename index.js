document.addEventListener('DOMContentLoaded', () => {

    let btns = document.querySelectorAll('button')
    var resultat = document.getElementsByClassName('view')
    let historique = document.getElementById('historique')
    let selection = document.getElementById('selection')
    let operation = ""
    let reset = false
    let open = false


    for ( let i = 0; i< btns.length; i++){

        btns[i].addEventListener('click', () => {  

            if (btns[i].getAttribute('id') !== 'fermer' && btns[i].getAttribute('id') !== "pop"  && btns[i].getAttribute('id') !== "effacer" && btns[i].getAttribute('id') !== "convertion"){
                if (reset == true){
                    operation = ""
                    resultat[0].innerHTML = operation
                    reset = false
                }
    
                switch(btns[i].getAttribute('id')) {
                    case "moins": 
                        operation += "-"
                        break
                    case "plus":  
                        operation += "+"
                        break
                    case "diviser": 
                        operation += "/"
                        break
                    case "multiplier": 
                        operation += "*"
                        break
                    case "egal":
                        // Creation d'un p pour acceuillir le resultat
                        let paragraphe = document.createElement('p')
                        paragraphe.textContent = operation + " = " + eval(operation)
                        historique.append(paragraphe)

                        operation = eval(operation)
                        reset = true
                        break
                    case "supp":
                        operation = "0"
                        reset = true
                        break
                    default:
                        operation += btns[i].getAttribute('id')
    
                }
        
                resultat[0].innerHTML = operation
            }else{
                console.log('fermer')
            }

            // Pop Up
            let popup = document.getElementsByClassName('popup')

            // Ouverture de la pop up
            if (btns[i].getAttribute('id') == "pop"){
                popup[0].style.display = 'block'
            }

            // Fermeture de la pop up
            if (btns[i].getAttribute('id') == "fermer"){
                popup[0].style.display = 'none'
            }

            if (btns[i].getAttribute('id') == "effacer" ) {
                historique.innerHTML = ""
            }

            if (btns[i].getAttribute('id') == "convertion"){
               if (open == false){

                    btns[i].innerHTML = "Fermer"
                    resultat[1].style.display = "flex"
                    open = true
                    selection.style.display  = "block"

                    // On cache les btn 
                    btns[4].style.display = "none"
                    btns[8].style.display = "none"
                    btns[12].style.display = "none"
                    btns[16].style.display = "none"
                }
                else {
                    btns[i].innerHTML = "Convertion"
                    open = false
                    resultat[1].style.display = "none"
                    selection.style.display  = "none"
                    btns[4].style.display = "inline"
                    btns[8].style.display = "inline"
                    btns[12].style.display = "inline"
                    btns[16].style.display = "inline"
                } 
            }
            // VAleur par defaut du select donc dollar
            resultat[1].innerHTML = eval(operation*1.07)
        })

        
    }

    selection.addEventListener("change", (e) => {
        if (e.target.value == "dollar"){
            resultat[1].innerHTML = eval(operation*1.07)
        }else{
            resultat[1].innerHTML = eval(operation*1000)
        }
    })
})