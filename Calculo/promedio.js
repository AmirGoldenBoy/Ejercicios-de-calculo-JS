   /* const lista1 = [
        100,
        200,
        300,
        500,
    ];*/


    /*let sumLista1 = 0;
    for (let i = 0; i < lista1.length; i++) {
        sumLista1 = sumLista1 + lista1[i];
    }*/

    function calcularMediaAritmetica(lista) {
        /*let sumLista = 0;
        for (let i = 0; i < lista.length; i++){
            sumLista = sumLista + lista[i];
        }*/

        const sumLista = lista.reduce(
            function(valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );

        const promedioLista = sumLista / lista.length;

        return promedioLista;
    }