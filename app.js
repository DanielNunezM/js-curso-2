let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';
function botonConsola(){
    console.log('El botón fue clicado');
}
function botonPrompt(){
    ciudad=prompt("¿Cuál es el nombre de una ciudad de Brasil?");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}
function botonAlerta(){
        alert('Yo amo JS');
}
function botonSuma(){
    numero1 = parseInt(prompt('Ingrese un el primer número para sumar'));
    numero2 = parseInt(prompt('Ingrese un el segudo número para sumar'));
    alert(`El resultado es: ${numero1+numero2}` );
}