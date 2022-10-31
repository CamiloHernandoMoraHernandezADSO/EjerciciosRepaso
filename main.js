addEventListener("DOMContentLoaded", (e)=>{

    let horas = document.querySelector("#horas")
    let listHoras = []
    let formulario = document.querySelector("#formHoras")
    let resultados = document.querySelector("#resultados")
    let cont = 0
    formulario.addEventListener("submit", (e) =>{
        e.preventDefault();
        let datosEntrada = Object.fromEntries(new FormData(e.target));
        listHoras.push(datosEntrada.horas)
        cont += 1
        resultados.insertAdjacentHTML("beforeend",`
            <tr>
                
                <td>${cont}</td>
                <td>${datosEntrada.horas}</td>
                <td>${datosEntrada.horas*5208.33}</td>
                
                
            </tr>
        `)
        horas.value = ""



    })
})