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
            localStorage['bienvenida'] = 'Un detalle muy especial para papá, compuesto por: ' +
            '1 Leandro, 1 globo personalizado. Por el costo de $60';
            valor = localStorage['bienvenida'];
            break;
        case "array":
            // Utilizar notación de matrices o arreglos
            localStorage['bienvenida'] = 'Porque mamá se merece lo mejor, consiéntela en su día con nuestro combo compuesto por: '+
            '1 bucket Premium o 1 bucket super especial, 1 globo personalizado. Por el costo de $125.';
            valor = localStorage['bienvenida'];
            break;
        case "object":
            // Y claro, también es válido utilizar notación de propiedades de objetos */
            localStorage.bienvenida = 'Sorprende a esa persona especial y demuéstrale tu amor con nuestro combo compuesto por: ' +
            '1 Nicole o 1 orquídea alegre, 1 globo personalizado, más caja de chocolates. Por el costo de $65';
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