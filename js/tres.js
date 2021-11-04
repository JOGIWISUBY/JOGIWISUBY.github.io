var valor;
function init()
{
    var seleccion = document.getElementById("seleccionar");
    if(seleccion.addEventListener)
    {
        seleccion.addEventListener("click", mostrar, false);
    }
    else if(seleccion.attachEvent)
    {
        seleccion.attachEvent("onclick", mostrar);
    }
}
function mostrar()
{
    //Determinando la opción seleccionada
    var opcion = document.form.methods.options[document.form.methods.selectedIndex].value;
    switch(opcion)
    {
        case "api":
            // Utilizando la Api de Local Storage, podemos guardar y luegorecuperar un valor
            localStorage['bienvenida'] = 'Transmite tus sentimientos con distinción y elegancia, exprésate con un detalle que contiene: 1 Canasta belen o 1 mi querido viejo y 1 globo por el costo de $60';
            valor = localStorage['bienvenida'];
            break;
        case "array":
            // Utilizar notación de matrices o arreglos
            localStorage['bienvenida'] = 'Para esa persona tan especial un detalle tierno y personal para impresionar, compuesto por: 1 caja con frutas, rosas y vino o un 10 de mayo más globo con texto “feliz dia mamá”. Por un costo de $60';
            valor = localStorage['bienvenida'];
            break;
        case "object":
            // Y claro, también es válido utilizar notación de propiedades de objetos */
            localStorage.bienvenida = 'Un dulce sentimiento expresado en un romántico regalo... '+
            ' Compuesto por: 1 cono con rosas, 1 globo personalizado y 1 caja de chocolates. Por el costo de $50';
            valor = localStorage.bienvenida;
            break;
        default:
            alert("Esta opción no existe");
            break;
    }
    var contenido = document.getElementById("content");
    contenido.innerHTML = "<h4>\n\t Descripción \n\t </h4>" + valor + "";
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
}
else if(window.attachEvent)
{
    window.attachEvent("onload", init);
}
