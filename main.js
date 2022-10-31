addEventListener("DOMContentLoaded", (e)=>{
    let formVentas = document.querySelector("#formVentas")
    let resultados = document.querySelector("#resultados")
    let venta1 = document.querySelector("#venta1")
    let venta2 = document.querySelector("#venta2")
    let venta3 = document.querySelector("#venta3")
    let sldBase = 1000000

    formVentas.addEventListener("submit", (e)=>{
        e.preventDefault()
        let datosEntrada = Object.fromEntries(new FormData(e.target));
        let com1 = datosEntrada.venta1*0.10
        let com2 = datosEntrada.venta2*0.10
        let com3 = datosEntrada.venta3*0.10
        let totalComi = com1 + com2 + com3 
        let sldTotal = totalComi + sldBase
        resultados.innerHTML = ""
        resultados.insertAdjacentHTML("beforeend",`
        <h2>Total de la comisión por ventas: ${totalComi}</h2>
        <h2>Sueldo total: ${sldTotal}</h2>
        `);

        venta1.value = ""
        venta2.value = ""
        venta3.value = ""

    })
})