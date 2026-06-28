//EJERCICIO 1
document.getElementById("bFib").addEventListener("click", function () {
    let n = parseInt(prompt("¿Cuántos términos de Fibonacci desea generar?"));
    if (isNaN(n) || n <= 0) {
        alert("Ingrese un número mayor que cero.");
        return;
    }
    let a = 0;
    let b = 1;
    let serie = "";
    for (let i = 1; i <= n; i++) {
        serie += a;
        if (i < n) {
            serie += ", ";
        }
        let c = a + b;
        a = b;
        b = c;
    }
    alert("Serie de Fibonacci:\n\n" + serie);
});

//EJERCICIO 2
document.getElementById("fPri").addEventListener("submit", function (e) {
    e.preventDefault();
    let n = parseInt(document.getElementById("tPri").value);
    let r = document.getElementById("rPri");
    if (isNaN(n) || n <= 1) {
        r.innerHTML = "Ingrese un número mayor a 1.";
        return;
    }
    let esPrimo = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        r.innerHTML = "El número " + n + " si es Primo.";
    } else {
        r.innerHTML = "El número " + n + " no es Primo.";
    }
});

// EJERCICIO 3
document.getElementById("bPar").addEventListener("click", function () {
    let numero;
    let sumaPar = 0;
    let sumaImpar = 0;
    while (true) {
        numero = parseInt(prompt("Ingrese un número (0 para terminar):"));
        if (numero === 0) {
            break;
        }
        if (isNaN(numero)) {
            alert("Ingrese un número válido.");
            continue;
        }
        if (numero % 2 === 0) {
            sumaPar = sumaPar + numero;
        } else {
            sumaImpar = sumaImpar + numero;
        }
    }
    alert("Suma de pares: " + sumaPar + "\nSuma de impares: " + sumaImpar);
});

// EJERCICIO 4
document.getElementById("bFac").addEventListener("click", function () {
    let n = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    if (isNaN(n) || n < 0) {
        alert("Ingrese un número válido mayor o igual a 0.");
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    alert("El factorial de " + n + " es: " + factorial);
});

// EJERCICIO 5
document.getElementById("bAdi").addEventListener("click", function () {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intento;
    while (true) {
        intento = parseInt(prompt("Adivina el número (1 al 10):"));
        if (isNaN(intento)) {
            alert("Ingrese un número válido.");
            continue;
        }
        if (intento === numeroSecreto) {
            alert("¡Correcto! Adivinaste el número.");
            break;
        } else if (intento > numeroSecreto) {
            alert("Muy alto");
        } else {
            alert("Muy bajo");
        }
    }
});

// EJERCICIO 6
document.getElementById("fVoc").addEventListener("submit", function (e) {
    e.preventDefault();
    let texto = document.getElementById("tVoc").value.toLowerCase();
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            contador = contador + 1;
        }
    }
    document.getElementById("rVoc").innerHTML = "Cantidad de vocales: " + contador;
});

// EJERCICIO 7
document.getElementById("bSer").addEventListener("click", function () {
    let n = parseInt(prompt("Ingrese cuántos números desea generar:"));
    if (isNaN(n) || n <= 0) {
        alert("Ingrese un número válido mayor que cero.");
        return;
    }
    let serie = "";
    let valor = 0;
    let contador = 0;
    let repeticiones = 1;
    for (let i = 1; i <= n; i++) {
        serie += valor;
        contador++;
        if (contador === repeticiones) {
            contador = 0;
            repeticiones++;
            valor = (valor === 0) ? 1 : 0;
        }
        if (i < n) {
            serie += ", ";
        }
    }
    alert("Serie especial:\n\n" + serie);
});
