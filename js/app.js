let bill = document.querySelector('#inputBill');
let ValorBill = parseInt(bill.value)

let people = document.querySelector('#CantPersonas');
let ValorPeople = parseInt(people.value)

let totalPropina = document.querySelector('#totalPropina');

let totalValor = document.querySelector('#totalPersonas');

let botones = document.querySelectorAll('#btn');

let valorPropina = 5;

botones.forEach(Element => {
    Element.addEventListener('click', (e) => {
        //Cambio de estilos
        removeActivos();
        Element.classList.add('btn__button--selected');

        valorPropina = parseInt(e.target.innerText.slice(0,-1))
       
        calcularPropina()
    })
})

function removeActivos(){
    botones.forEach(Element => {
        Element.classList.remove('btn__button--selected');
    })
}

//Actualizando Custom
let btncustom = document.querySelector('#btn_custom')
btncustom.addEventListener('click', () =>{
    removeActivos()
})

btncustom.addEventListener('input', ()=>{

    valorPropina = parseInt(btncustom.value)
    if(isNaN(valorPropina)){

    } else{
        calcularPropina();
    }
    
})

//Actualizando total
bill.addEventListener('input', () => {
    ValorBill = parseFloat(bill.value)
    calcularPropina()
})
//Actualizar personas
people.addEventListener('input', () => {
    ValorPeople = parseFloat(people.value)

    calcularPropina()
})

//boton reset
let btnReset = document.querySelector('#reset')
btnReset.addEventListener('click', () =>{
    bill.value = 0
    people.value = 5
    btncustom.value = 'Custom'
    removeActivos();
    calcularPropina();
    totalPropina.innerText = 0
    totalValor.innerText = 0
})



function calcularPropina(){
    //Calculo valor Propina
    totalPropina.innerText = '$' + (parseInt(ValorBill * valorPropina / 100) / ValorPeople).toFixed(2) 
    //Calculo valor Personas
    totalValor.innerHTML = '$' + ((parseInt(ValorBill * valorPropina / 100) + ValorBill) / ValorPeople).toFixed(2) 
}