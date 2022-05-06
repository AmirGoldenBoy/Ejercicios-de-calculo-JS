const lista = [
    1,
    3,
    4,
    5,
    1,
    2,
];

const listaCount = {};

lista.map( 
        function (elemento){
            if (listaCount [elemento]){
                listaCount [elemento] += 1;
            } else {
            listaCount[elemento] = 1;
        }
        }
);

const listaArray = Object.entries(listaCount).sort (
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda = listaArray[listaArray.length - 1 ];