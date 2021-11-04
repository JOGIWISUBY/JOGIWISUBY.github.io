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
            localStorage['bienvenida'] = 'Sorprende a papá en su día especial con nuestro combo compuesto por: '+
            ' 1 caja de madera con vino y 1 caja de chocolates. Por un costo de $65';
            valor = localStorage['bienvenida'];
            break;
        case "array":
            // Utilizar notación de matrices o arreglos
            localStorage['bienvenida'] = 'Sorprende a mamá y demuestra el amor y agradecimiento con nuestro combo compuesto por: '+
            'caja #1 y una caja de chocolates por $80';
            valor = localStorage['bienvenida'];
            break;
        case "object":
            // Y claro, también es válido utilizar notación de propiedades de objetos */
            localStorage.bienvenida = 'Demuestra ese sentimiento de amor y sorprende a esa persona especial con nuestro combo compuesto por: '+
            '1 rosa preservada (color a elección), 1 globo de corazón y 1 caja de chocolates. Por el costo de $65';
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
