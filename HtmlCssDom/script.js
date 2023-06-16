// Definir los productos y sus precios
const productos = {
    Aqua: 200,
    Emocion: 180,
    Alegria: 160,
    Frescura: 150
};

const ventasJuana = () => {
    let ventas = {
        Juana: {
            Aqua: prompt("Ingrese cantidad de productos vendidos de Aqua para Juana"),
            Emocion: prompt("Ingrese cantidad de productos vendidos de Emocion para Juana"),
            Alegria: prompt("Ingrese cantidad de productos vendidos de Alegria para Juana"),
            Frescura: prompt("Ingrese cantidad de productos vendidos de Frescura para Juana")
        }
    }
    return ventas.Juana;
}

const ventasPedro = () => {
    let ventas = {
        Pedro: {
            Aqua: prompt("Ingrese cantidad de productos vendidos de Aqua para Pedro"),
            Emocion: prompt("Ingrese cantidad de productos vendidos de Emocion para Pedro"),
            Alegria: prompt("Ingrese cantidad de productos vendidos de Alegria para Pedro"),
            Frescura: prompt("Ingrese cantidad de productos vendidos de Frescura para Pedro")
        }
    }
    return ventas.Pedro;
}

function calculoDineroRecolectado(ventasUsuario) {
    console.log(ventasUsuario);
    const resultado = { Aqua: 0, Emocion: 0, Alegria: 0, Frescura: 0, total: 0 };
    for (let producto in productos) {
        resultado[producto] += productos[producto] * ventasUsuario[producto];
        console.log(producto);
        resultado.total += resultado[producto]
        console.log(resultado.total);
    }
    return resultado;
}

function empleadoDelMes(ventasTotalesUsuario1, ventasTotalesUsuario2) {
    let emmpleadoDelMes_ = "";
    if (ventasTotalesUsuario1 > ventasTotalesUsuario2) {
        emmpleadoDelMes_ = "El vendedor del mes es Pedro";

    } else if (ventasTotalesUsuario1 < ventasTotalesUsuario2) {
        emmpleadoDelMes_ = "El vendedor del mes es Juana";
    }
    else {
        emmpleadoDelMes_ = "Hay un empate en ventas";
    }
    return emmpleadoDelMes_;
}

let ventasPedro_ = ventasPedro();
let ventasTotalesUsuario1 = calculoDineroRecolectado(ventasPedro_);
console.log(ventasTotalesUsuario1);
let ventasJuana_ = ventasJuana();
let ventasTotalesUsuario2 = calculoDineroRecolectado(ventasJuana_);
console.log(ventasTotalesUsuario2);
let emmpleadoDelMes_F = empleadoDelMes(ventasTotalesUsuario1.total, ventasTotalesUsuario2.total);
console.log(emmpleadoDelMes_F);





