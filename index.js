document.addEventListener('DOMContentLoaded', () => {

    let btns = document.querySelectorAll('button')
    var resultat = document.getElementsByClassName('view')
    let operation = ""
    let reset = false

    for ( let i = 0; i< btns.length; i++){

        btns[i].addEventListener('click', () => {  

            if (btns[i].getAttribute('id') !== 'fermer' && btns[i].getAttribute('id') !== "pop"  ){
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



           
        })

        
    }
    
    

})