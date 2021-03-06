function calcularMediaAritmetica(lista) {
    const sumLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumLista / lista.length;

    return promedioLista;
};

const salariosCol = colombia.map(
    function(person) {
        return person.salary;
    }
);

const salariosColSorted = salariosCol.sort (
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numerito) {
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
};

function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Top 10
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;



const salariosTop10Col = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianatop10Col = medianaSalarios(salariosTop10Col);
console.log(
    medianaGeneralCol,
    medianatop10Col,
);