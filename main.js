addEventListener("DOMContentLoaded", (e)=>{
    let n1 = document.querySelector("#n1")
    let resultado = ""
    let formNum = document.querySelector("#formNumeros")
    let suma = 0
    let result = document.querySelector("#resultados")
    formNum.addEventListener("submit", (e)=>{
        e.preventDefault()
        let datosEntrada = Object.fromEntries(new FormData(e.target));

        for (let i = 1; i < datosEntrada.n1; i++) {
           if(datosEntrada.n1 % i == 0){
            suma += i
           }
            
        }
        if(datosEntrada.n1 == suma){
            resultado = "Es perfecto"
            suma = 0
        }
        else{
            resultado = "NO es perfecto"
            suma = 0
        }

        result.innerHTML = ""
        result.insertAdjacentHTML("beforeend",`
                <h2> ${datosEntrada.n1 + ' ' + resultado}  </h2>
                `);
    })
})