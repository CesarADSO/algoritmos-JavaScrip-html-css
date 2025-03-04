// función que realiza una suma

function suma(){
    let n1 = 0
    let n2 = 0
    let suma = 0
    alert("Este algoritmo realiza la suma de dos números ingresados por el usuario")
    n1 = parseInt(prompt("ingrese el primer valor a sumar"))
    n2 = parseInt(prompt("ingrese el segundo valor a sumar"))
    suma = n1 + n2
    alert("El resultado de la suma es " + suma)
}

// Función que realiza las operaciones básicas
function operacionesBasicas() {
    let n1 = 0
    let n2 = 0
    let Suma = 0
    let Resta = 0
    let multiplicación = 0
    let división = 0
    alert("Este algoritmo realiza las operaciones básicas con dos números ingresados por el usuario")
    n1 = parseInt(prompt("Ingrese el primer valor a operar"))
    n2 = parseInt(prompt("ingrese el segundo valor a operar"))
    Suma = n1 + n2
    Resta = n1 - n2
    multiplicación = n1 * n2
    división = n1 / n2 
    alert ("El resultado de la suma es "+ Suma)
    alert ("El resultado de la resta es "+ Resta)
    alert ("El resultado de la multiplicación es "+ multiplicación)
    alert ("El resultado de la división es "+ división)
}

// Función que halla el cuadrado de un número ingresado por el usuario
function cuadradoDeUnNumero() {
    let n1 = 0
    let cuadrado = 0
    alert("Este algoritmo halla el cuadrado de un número ingresado por el usuario")
    n1 = parseInt(prompt("Ingrese el número al cual le quiere hallar el cuadrado"))
    cuadrado = n1 * n1
    alert ("El cuadrado del número ingresado es"+ cuadrado )
}

// Función que hace la conversión de metros a centímetros y pulgadas
function conversionDeUnidades() {
    let n1 = 0
    let centimetros = 0
    let pulgadas = 0
    alert("Este algoritmo convierte una unidad dada en metros, a centímetros y pulgadas respectivamente")
    n1 = parseInt(prompt("ingrese el valor de la medida, esta medida será en metros así que no tiene que poner la medida sino solo el número"))
    centimetros = n1 * 100
    pulgadas = n1 * 39.37
    alert ("la conversión a centímetros es "+ centimetros)
    alert ("la conversión a pulgadas es "+ pulgadas)
}

// Esta función hallara el Area de un tríangulo segun las medidas de base y altura que ingrese el usuario
function areaDeUnTriangulo() {
    let base = 0
    let altura = 0
    let area = 0
    alert("Este algoritmo va a hallar el área de un tríangulo según las medidas de base y altura que el usuario ingrese")
    base = parseInt(prompt("Ingrese el valor de la medida de la base"))
    altura = parseInt(prompt("Ingrese el valor de la medida de la altura"))
    area = base * altura
    alert ("el área de este tríangulo es "+ area)
}

// Esta función hallará la ganancia de alguien que invierte su capital por N numero de años teniendo en cuenta que el banco paga un interés del 1.7% mensual
function inversionDeCapital() {
    let capital = 0
    let N = 0
    let ganancia = 0
    let Total = 0
    alert("Este algoritmo va a darle el valor de la ganancia que usted tendrá según el capital que usted desee invertir por x numero de años con el banco pagandole un 1.7% de interés mensual, y despues va a darle el valor total de su capital más la ganancia recibida")
    capital = parseInt(prompt("ingrese el valor del capital que usted desee invertir"))
    N = parseInt(prompt("Ingrese la cantidad de años que usted desee dejar su capital invertido "))
    ganancia = (capital * 0.017) * 12 * N
    total = capital + ganancia
    alert ("su ganancia dentro de ese periodo de tiempo sera de "+ ganancia)
    alert ("su dinero total tiene un valor de "+ total)
}

// Esta función dará el número mayor de dos números ingresados por el usuario
function numeroMayor() {
    let n1 = 0
    let n2 = 0
    alert("Señor usuario, este algoritmo le dará el número mayor de dos números que usted ingrese a continuación")
    n1 = parseInt(prompt("Ingrese el primer número a validar"))
    n2 = parseInt(prompt("Ingree el segundo número a validar"))
    if(n1==n2) {
        alert ("Los números ingresados son iguales " + n1) 
    }else if(n1>n1) {
        alert( + n1 + "es mayor que " + n2)
    }else {
        alert(+ n2 + "es mayor que  " + n1)
    }
}

// Esta función dirá cúal es el menor de tres números ingresados por el usuario
function numeroMenor() {
    let n1 = 0
    let n2 = 0
    let n3 = 0
    alert("Este algoritmo le dirá a usted cúal es el número menor de tres números que usted va a ingresar")
    n1 = parseInt(prompt("Ingrese el primer valor a validar"))
    n2 = parseInt(prompt("Ingrese el segundo valor a validar"))
    n3 = parseInt(prompt("Ingrese el tercer valor a validar"))
    if(n1<n2 && n1<n3) {
        alert(+ n1 + " es el número menor")
    }else if(n2<n1 && n2<n3) {
        alert(+ n2 + "es el número menor")
    }else {
        alert(+ n3 + "es el número menor")
    }
}

// Esta función le dira si el número ingresado por el usuario es par o impar
function parOImpar() {
    let n1 = 0
    alert("Este algoritmo le dirá a usted si el número que ingresó es par o impar")
    n1 = parseInt(prompt("Ingrese el número"))
    if(n1 % 2===0) {
        alert ("El número ingresado es par")
    }else {
        alert("El número ingresado es impar")
    }
}

// Esta función le arrojará el promedio de siete calificaciones que ingrese el usuario de un estudiante de ingles
function promedioEstudiante() {
    let n1 = 0
    let n2 = 0
    let n3 = 0
    let n4 = 0
    let n5 = 0
    let n6 = 0
    let n7 = 0
    let promedio = 0
alert("Este algoritmo le ayudará a sacar el promedio de siete calificaciones de un estudiante de inglés, usted es el profesor y las debe ingresar a continuación, las notas que deberá ingresar son de 1.0 a 5.0, donde el estudiante aprueba con 3.0 en adelante, y reprueba de 2.9 hacia abajo ")
n1 = parseFloat(prompt("ingrese la primera calificación"))
n2 = parseFloat(prompt("Ingrese la segunda calificación"))
n3 = parseFloat(prompt("Ingrese la tercera calificación"))
n4 = parseFloat(prompt("Ingrese la cuarta calificación"))
n5 = parseFloat(prompt("Ingrese la quinta calificación"))
n6 = parseFloat(prompt("Ingrese la sexta calificación"))
n7 = parseFloat(prompt("Ingrese la septima calificación"))
promedio = (n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7
if(promedio <= 2.9) {
    alert ("El estudiante reprobó con "+ promedio)
}else {
    alert ("El estudiante aprobo con "+ promedio)
}
}

// Esta función es para averiguar los precios de los kilos de manzana de una frutería
function fruteria() {
    let NK = 0
    let VK = 4500
    let valorTotal = 0
    alert("Este algoritmo le va a mostrar a usted lo que valen los kilos de manzana con los descuentos según el número de kilos que el cliente lleve")
    NK = parseInt(prompt("Ingrese el número de kilos que desee llevar"))
    if (NK <= 2) {
        valorTotal =  NK * VK
        alert (+ NK + "Kilos le valen "+ valorTotal)
    }else if (NK >= 3 && NK <= 5) {
        valorTotal = (NK) * (VK - 0.10)
        alert(+ NK + "Kilos le valen "+ valorTotal)
    }else if (NK >= 6 && NK <= 9) {
        valorTotal = (NK) * (VK - 0.15)
        alert(+ NK + "Kilos le valen "+ valorTotal)
    }else {
        valorTotal = (NK) * (VK - 0.20)
        alert(+ NK + "Kilos le valen "+ valorTotal)
    }
}

// Esta función calcula el salario semanal de un trabajador, con horas extras o sin horas extras
function horasExtras() {
    let salario = 0
    let horas = 0
    let valorHoras = 10000
    let VHE = 20000
    alert("Este algoritmo le ayudará a usted a calcular su salario semanal dependiendo de las horas que haya trabajado")
    horas = parseInt(prompt("Ingrese el número de horas que trabajó"))
    if (horas <= 40) {
        salario = horas * valorHoras
        alert ("Su salario semanal será de "+ salario)
    }else if (horas > 40) {
        salario = (40 * valorHoras) + (VHE* +(horas - 40))
        alert ("Su salario semanal será de "+ salario)
    }
} 

// Esta función ayudará al usuario a sumar números diferentes a 0
function sumaDiferenteA0() {
    let n1 = 1
    let suma = 0
    alert("Este algoritmo va a sumar los números que usted ingrese, si usted ingresa el 0 se va a acabar el proceso")
    n1 = parseInt(prompt("Ingrese un número"))
    while (n1 != 0) {
        n1 = parseInt(prompt("Ingrese un número")) 
        suma = suma + n1
        alert ("La suma de estos número es "+ suma)
    }
}

// Esta función imprimirá los números de 1 a 10 
function Imprimir() {
    let cont = 1
    alert("Este algoritmo imprimirá los números de 1 a 10")
    while(cont <= 10) {
    alert("imprimir "+ cont)
    cont = cont + 1
    }
}

// Esta función imprimirá los numeros de 100 a 0 de 10 en 10 
function imprimir2() {
let cont = 100
alert("Este algoritmo imprimirá los numeros de 100 a 0 de 10 en 10")
while (cont >= 0 ) {
    alert("Imprimir "+ cont)
    cont = cont - 10
}
}

// Esta función multiplicará un cualquier número que ingrese el usuario por 1 por 2 así sucesivamente hasta 10
function tablaDeMultiplicar() {
    let n1 = 0 
    let i = 1
    let result = 0
    alert("Este algoritmo multiplicará cualquier npumero que ingrese usted por 1 por 2 así sucesivamente hasta multiplicarlo por 10")
    n1 = parseInt(prompt("Ingrese el número a multiplicar"))
    while (i <= 10) {
        result = i * n1
        alert(+ n1 +"x "+i+"= "+result)
        i = i+1
    }
}

// Esta función actuará como si fuera un cajero electrónico y le dira al usuario que saque dinero hasta quedarse sin dinero y tiene un límite de dinero de un millón
function cajero() {
    let saldo = 1000000
    let valorRetiro = 0
    alert("Este algoritmo le permitirá retirar dinero de su saldo disponible y su saldo es de 10000000 y cada vez que retire se le va restando del saldo disponible hasta quedarse sin saldo")
    while ( saldo > 0) {
        valorRetiro = parseInt(prompt("Cuánto dinero desea retirar, tu saldo es " + saldo))
        if (valorRetiro > saldo) {
            alert("Saldo insuficiente, tu saldo es: " + saldo)
        }
        else{
            saldo = saldo - valorRetiro
        }
    }
       alert("Sin fondos, ya retiró todo suy dinero")
   
}

// Esta función contará los números de 0 hasta 1000 de 100 en 100
function hasta1000() {
    let cont = 0
    alert("Este algoritmo contará los números de 0 a 1000 de cien en cien")
    while (cont <= 1000) {
        alert("contar "+ cont)
        cont = cont + 100
    }
}

function funcionPr() {
    let materia = ""
    let estudiante = ""
    let nNotas = 0
    let calificacion = 0
    let sumaNotas = 0
    let promedio = 0
    let iteración = 0
    
    materia = prompt("Ingrese la materia que imparte")
    estudiante = prompt("Ingrese el nombre del estudiante")
    nNotas = parseInt(prompt("Ingrese el número de calificaciones"))

    while (iteración < nNotas) {
        calificacion = parseFloat(prompt("Ingrese la calificación"))
        sumaNotas = sumaNotas + calificacion
        iteración = iteración + 1
    }

    promedio = sumaNotas / nNotas
    if (promedio>2.9) {
        alert("El estudiante " + estudiante +" aprobó la materia de " + materia + " con un promedio de " + promedio)
    }else {
        alert("El estudiante " + estudiante +" reprobó la materia de " + materia + " con un promedio de " + promedio)
    }
}


