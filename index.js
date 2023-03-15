document.getElementById('boton').onclick = function () {
    document.getElementById('texto').innerHTML = "¡Gracias por leer mi CV!";
}

document.getElementById('boton-color').addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink'
    document.getElementById('navbar').style.backgroundColor = 'hotpink';
})

document.getElementById('boton-default').addEventListener('click', function () {
    document.body.style.backgroundColor = '#9bc4cb';
    document.getElementById('navbar').style.backgroundColor = 'teal';
})