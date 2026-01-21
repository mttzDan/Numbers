const boton = document.getElementById("btnOrdenar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const num3 = Number(document.getElementById("num3").value);

//Creación del array con los números ingresados por el usuario
const numeros = [num1, num2, num3];

// Validar que todos los campos tengan valores numérico distintos de cero
if ((num1==0) || (num2==0) || (num3==0)) {
    resultado.textContent = "Por favor, ingresa los tres números.";
    return;
} else {
    // Usé burbuja para ordenar los números
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                const temporal = numeros[j]; 
                numeros[j] = numeros[j + 1]; 
                numeros[j + 1] = temporal;   
            }
        }
    }
    // Verificar si los números son iguales
    if (numeros[0] === numeros[1] && numeros[0] === numeros[2] && numeros[1] === numeros[2]) {
        resultado.textContent = "Por favor, ingresa tres números distintos.";
        return;
    } else {
    resultado.innerHTML = `
        De menor a mayor: ${numeros.join(", ")} <br>
        De mayor a menor: ${numeros.reverse().join(", ")}
    `;
}}})