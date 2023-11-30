function update(){
    const data = document.querySelector("#range").value
    console.log(data)
    document.querySelector("#progressBar").value = data
}

// let a = 100
// let b= 0
// for( let i = 0; i < 5; i++){
    
//     b+=i
// }

// console.log(b)
// a++
// console.log(a)

let contador = 0 
function sumar(){
   contador++
   document.querySelector("#contador").innerHTML = contador
}

function restar(){
    contador--
    document.querySelector("#contador").innerHTML = contador
 }