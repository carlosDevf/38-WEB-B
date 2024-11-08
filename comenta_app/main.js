const formComments = document.querySelector("#comments")
const commentsContainer = document.querySelector("#container-comments")

// Validacion visual de html ☹
// Validacion en cliente  
//    -- Necesario para mejorar la experiecia del usuario
//    -- Evitar peticiones innecesaria 
// validacion de servidor 💪

formComments.addEventListener("submit", function(evento){
    // new FormData => [elementos o de valores del input]
    evento.preventDefault()
    const comment = document.querySelector("textarea")
    console.log(comment.value)

    if (comment.value === "") {
        alert("No has escrito nada")
        // return early
        return     
    }

    // forma basica //
    // const p = document.createElement("p")
    // p.innerText = comment.value
    // commentsContainer.appendChild(p)
    // comment.value = ""

    const div = document.createElement("div")
    div.classList.add("comment")
    
    const now = new Date()
    const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Australia/Sydney",
        timeZoneName: "short",
      };

    const commentDay = Intl.DateTimeFormat("es-MX", options).format(now);
    const random = Math.random()
    const uuid = Math.floor(random * 10000)
    div.id = "C" + uuid    
    div.innerHTML = `
        <div class="comment-info">
            <img src="./assets/images/perfil.jpg" alt="User Image" class="user-avatar">
            <div>
                <p class="user-name">Noah Pierre <span class="timestamp">${commentDay}</span></p>
                <p class="comment-text">${comment.value}</p>
            </div>
        </div>
        <div class="comment-actions">
            <button id="${uuid}">Borrar</button>
        </div>
    `
    commentsContainer.appendChild(div)
    // esto limpia el textArea
    comment.value = ""

    const buttonsDelete = document.querySelectorAll(".comment-actions button")
    // buttonsDelete = querySelectorAll = [Nodo1, Nodo2, Nodo3] 
    // ciclo
    for (let i = 0; i < buttonsDelete.length; i++){
        const buttonDelete = buttonsDelete[i]        
        buttonDelete.addEventListener('click', function(){
            const id = buttonDelete.getAttribute("id")
            const divToDelate = document.querySelector(`#C${id}`)            
            // && corto circuito
            divToDelate && divToDelate.remove()
            // valido solo para versiones de node 12
            // coalesing operator ?
            // divToDelate?.remove()
        })
    }
})


