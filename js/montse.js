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
            localStorage['bienvenida'] = 'Transmite tus sentimientos con distinción y elegancia, exprésate con un detalle que contiene: 1 botella de vino más Mistle Toast. Por un costo de $200';
            valor = localStorage['bienvenida'];
            break;
        case "array":
            // Utilizar notación de matrices o arreglos
            localStorage['bienvenida'] = 'Envía un detalle a ese ser tan especial compuesto por:'+
            ' 1 Funky garden o 1 ramillete de girasoles y rosas más un globo con texto Felicidades Mamá. Por el costo de $75';
            valor = localStorage['bienvenida'];
            break;
        case "object":
            // Y claro, también es válido utilizar notación de propiedades de objetos */
            localStorage.bienvenida = 'Consiente a ese ser tan especial con un detalle tierno y clásico que está formado por: 1 sweetheart o 1 caja negra con rosas, 1 globo y 1 caja de chocolates. Por el costo de $130';
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
