let opcion = parseInt(prompt(    
    "Calculadora de areas geometricas\n" +
    "Seleccione una opcion:\n" +
    "1. Area de un cuadrado\n" +
    "2. Area de un rectángulo\n" +
    "3. Area de un triangulo\n" 
))

if (opcion === 1) {
    let lado = parseFloat(prompt("Ingrese el lado del cuadrado"));
    if (lado > 0) {
    let area = lado * lado;
    alert("Area del cuadrado: " + area);
    } else {
    alert("Error: El lado debe ser un numero positivo");
}

} else if (opcion === 2) {
    let base = parseFloat(prompt("Ingrese la base del rectangulo"));
    let altura = parseFloat(prompt("Ingrese la altura del rectangulo"));
    if (base > 0 && altura > 0) {
    let area = base * altura;
    alert("Area del rectangulo: " + area);
    } else {
    alert("Error: La base y altura deben ser numeros positivos");
}

} else if (opcion === 3) {
    let base = parseFloat(prompt("Ingrese la base del triangulo"));
    let altura = parseFloat(prompt("Ingrese la altura del triangul"));
    if (base > 0 && altura > 0) {
    let area = (base * altura) / 2;
    alert("Area del triangulo: " + area);
    } else {
    alert("Error: La base y altura deben ser numeros positivos");
}

} else {
    alert("Opcion invalida. Porfavor seleccione 1, 2 o 3");
}