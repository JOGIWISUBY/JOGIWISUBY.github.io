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
            localStorage['bienvenida'] = 'Una mezcla exquisita y única para una  persona especial. '+
            'Contiene: 1 botella de vino tinto, 1 jaba de flores, 1 caja de chocolates Ferrero Roche. Por un costo de $60';
            valor = localStorage['bienvenida'];
            break;
        case "array":
            // Utilizar notación de matrices o arreglos
            localStorage['bienvenida'] = 'Toda fecha especial precisa tener detalles llenos de mucho amor y mucho sentimiento... '+
            ' Por ello le damos la oportunidad de obsequiar este par de regalos adecuados para la ocasión: Nudo de rosas, caja con 12 bombones de chocolate,  globo texto: “Felicidades Mamá". Por $50';
            valor = localStorage['bienvenida'];
            break;
        case "object":
            // Y claro, también es válido utilizar notación de propiedades de objetos */
            localStorage.bienvenida = 'Un fuerte sentimiento, un gran detalle... Exprese sus emociones a través de un regalo que contiene: 1 acuarela arreglo o azarela de Holanda, caja de chocolates, globo de corazón. Por un costo de $45';
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