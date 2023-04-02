function Team(name, golFavor, golContra, puntos, ganados, perdidos, empatados) {
    (this.name = name),
        (this.golFavor = golFavor),
        (this.golContra = golContra),
        (this.puntos = puntos),
        (this.ganados = ganados),
        (this.perdidos = perdidos),
        (this.empatados = empatados);

    this.allgoal = function (e, i) {
        this.golFavor += e;
        this.golContra += i;
        return golFavor, golContra;
    };

    this.difgoal = function () {
        result = this.golFavor - this.golContra;
        return result;
    };

    this.partidostotales = () => {
        let totales = this.ganados + this.empatados + this.perdidos;
        return totales;
    };
}

const boca = new Team("Boca", 0, 0, 0, 0, 0, 0);
const racing = new Team("Racing", 0, 0, 0, 0, 0, 0);
const sanLorenzo = new Team("san Lorenzo", 0, 0, 0, 0, 0, 0);
const huracan = new Team("Huracan", 0, 0, 0, 0, 0, 0);
const river = new Team("River", 0, 0, 0, 0, 0, 0);
const independiente = new Team("Independiente", 0, 0, 0, 0, 0, 0);
/* 
const arsenal = new Team("Arsenal", 0, 0, 0, 0, 0, 0); 
const barracas = new Team("Barracas", 0, 0, 0, 0, 0, 0); 
const centralCordoba = new Team("Central Cordoba", 0, 0, 0, 0, 0, 0); 
const union = new Team("Union", 0, 0, 0, 0, 0, 0); 
const tigre = new Team("Tigre", 0, 0, 0, 0, 0, 0); 
const estudiantes = new Team("Estudiantes", 0, 0, 0, 0, 0, 0); 
const argentinos = new Team("Argentinos", 0, 0, 0, 0, 0, 0); 
const patronato = new Team("Patronato", 0, 0, 0, 0, 0, 0); 
const platense = new Team("Platense", 0, 0, 0, 0, 0, 0); 
const talleres = new Team("Talleres", 0, 0, 0, 0, 0, 0); 
const rosarioCentral = new Team("Rosario Central", 0, 0, 0, 0, 0, 0); 
const banfield = new Team("Banfield", 0, 0, 0, 0, 0, 0); 
const defensaJusticia = new Team("Defensa y Justicia", 0, 0, 0, 0, 0, 0); 
const atleticoTucuman = new Team("Atletico Tucuman", 0, 0, 0, 0, 0, 0); 
const colon = new Team("Colon", 0, 0, 0, 0, 0, 0); 
const lanus = new Team("Lanus", 0, 0, 0, 0, 0, 0); 
const newells = new Team("Newells", 0, 0, 0, 0, 0, 0); 
const godoyCruz = new Team("Godoy Cruz", 0, 0, 0, 0, 0, 0); 
const sarmiento = new Team("Sarmiento", 0, 0, 0, 0, 0, 0); 
const velez = new Team("Velez", 0, 0, 0, 0, 0, 0); 
const gimnasia = new Team("Gimnasia", 0, 0, 0, 0, 0, 0); 
const aldosivi = new Team("Aldosivi", 0, 0, 0, 0, 0, 0); 

const listaProde = []; 
const listaEquipos = []; 
let coincidencias = 0; 

let match = (team1, team2) => { 
    let goal__team1 = parseInt(prompt("goles de " + team1.name)); 
    let goal__team2 = parseInt(prompt("goles de " + team2.name)); 
    if (goal__team1 > goal__team2) { 
        console.log("ha ganado el local"); 
        let resultado = "local"; 
        team1.puntos += 3; 
        team1.ganados += 1; 
        team2.perdidos += 1; 
        team1.allgoal(goal__team1, goal__team2); 
        team2.allgoal(goal__team2, goal__team1); 
        listaEquipos.push(resultado); 
        return resultado; 

    } else if (goal__team1 == goal__team2) { 
        console.log("partido empatado"); 
        team1.allgoal(goal__team1, goal__team2); 
        team2.allgoal(goal__team1, goal__team2); 
        team1.puntos += 1; 
        team2.puntos += 1; 
        team1.empatados += 1; 
        team2.empatados += 1; 
        let resultado = "empate"; 
        listaEquipos.push(resultado); 
        return resultado; 
    } else { 
        console.log("ha ganado el visitante"); 
        team1.allgoal(goal__team1, goal__team2); 
        team2.allgoal(goal__team2, goal__team1); 
        team2.puntos += 3; 
        team2.ganados += 1 
        team1.perdidos += 1 
        let resultado = "visitante"; 
        listaEquipos.push(resultado); 
        return resultado 
    } 
} 

const fecha1 = [ 
    match(river, boca), 
    match(sanLorenzo, huracan), 
    match(racing, independiente) 
] 

let datos_equipo = (a) => { 
    respuesta = alert("Los puntos de " + a.name + " son: " + a.puntos + "\n" + "La dif de gol es: " + a.difgoal() + "\n" + "Ganados: " + a.ganados +        "\n" + "Perdidos: " + a.perdidos + "\n" + "Empatados: " + a.empatados) 
} 

let solicita = (equipo) => { 
    equipo = prompt("que equipo deseas saber?") 
    switch (equipo.toLowerCase()) { 
        case "river": 
            equipo = river; 
            break; 
        case "boca": 
            equipo = boca; 
            break; 
        case "san lorenzo": 
            equipo = sanLorenzo; 
            break; 
        case "huracan": 
            equipo = huracan; 
            break; 
        case "racing": 
            equipo = racing; 
            break; 
        case "independiente": 
            equipo = independiente; 
            break; 
        default: 
            alert("elige un equipo de la liga..") 
    } 
    datos_equipo(equipo) 
} 

let result_prode = (a, b) => { 
    for (i of a) { 
        for (e of b) { 
            if (e === i){
                coincidencias += 1; 
                break 
            } 
        } 
    }
} 

let prode = (a) => { 
    for (let i = 0; i < a.length; i++) { 
        let apuesta_prode = prompt("danos tus apuestas de la fecha:") 
        while (apuesta_prode.toLowerCase() != "local" && 
        apuesta_prode.toLowerCase() != "empate" && apuesta_prode.toLowerCase() != "visitante") { 
            alert("debes elegir: local, empate o visitante.") 
            apuesta_prode = prompt("danos tus apuestas de la fecha:") 
        } 
        listaProde.push(apuesta_prode.toLowerCase()); 
    } 
} 
  
let consulta_equipo = prompt("quieres obtener info de un equipo del torneo?"); 
while (consulta_equipo.toLowerCase() != "si" && consulta_equipo.toLowerCase() != "no") { 
    alert("debes inmgresar 'si' o 'no'") 
    consulta_equipo = prompt("quieres obtener info de un equipo del torneo"); 
} 

while (consulta_equipo.toLowerCase() == "si") { 
    solicita() 
    consulta_equipo = prompt("quieres obtener info de otro equipo del torneo?"); 
} 
alert("de acuerdo, adios.") 

prode(fecha1) 

 
console.log(listaEquipos) 
console.log(listaProde)
result_prode(listaEquipos, listaProde) 

alert("la cantidad de coincidencias son "+coincidencias)


prode(fecha1) 
console.log(listaProde) 

console.log(fecha1) 

result_prode(listaEquipos, listaProde) 
alert(coincidencias)    

match(barracas, centralCordoba) 
match(boca, arsenal) 
match(banfield, newells) 
match(sanLorenzo, independiente) 
match(talleres, sarmiento) 
match(argentinos, aldosivi) 
match(estudiantes, gimnasia) 
match(patronato, velez) 
match(platense, godoyCruz) 
match(racing, huracan) 
match(rosarioCentral, lanus) 
match(defensaJusticia, river) 
match(atleticoTucuman, colon) 



setTimeout(() => {
  console.log("hola como va");
}, 5000);

var numero = 5;

console.log(numero);
console.log(typeof numero);

function saludar(nombre) {
  console.log(`buenos dias ${nombre}`);
}

saludar("bruno");

function mostrare() {
  var mensaje = "hola como va";
  console.log(mensaje);
}

console.log(mensaje);


const listado = ["ana", "bianca", "bruno", "messi"];

function creadorDeFechas(arrayNecesario) {
    const coleccion = [];
    for (let index = 0; index < arrayNecesario.length; index++) {
        const elementoDescartado = arrayNecesario[index]; // equipo que se quito en la iteracion
        const arrayVariable = arrayNecesario.filter(
            (ele) => ele != arrayNecesario[index]
        );
        arrayVariable.unshift(elementoDescartado);

        coleccion.push(arrayVariable);
    }
    return coleccion;
}

const funcaFlecha = (objeto) => {
    const array = [];
    objeto.forEach((element) => {
        element.forEach((element2) => {
            element[0] != element2 && array.push([element[0], element2]);
        });
    });
    return array;
};

const llave = creadorDeFechas(listado);

//console.log(llave);

const holaComoVa = funcaFlecha(llave);

function eliminarInversosRepetidos(array) {
    const nuevosElementos = [];
    const elementosInversos = [];

    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        const elementoInverso = elemento.slice().reverse();

        if (
            elementosInversos.some(
                (el) => JSON.stringify(el) === JSON.stringify(elementoInverso)
            )
        ) {
            continue;
        }

        elementosInversos.push(elemento);
        nuevosElementos.push(elemento);
    }

    return nuevosElementos;
}

const respondido = eliminarInversosRepetidos(holaComoVa);

const alFinFechas = (originalArray) => {
    const combinations = [];
    for (let i = 0; i <= originalArray.length; i++) {
        for (let j = i + 1; j < originalArray.length; j++) {
            const pair1 = originalArray[i];
            const pair2 = originalArray[j];
            if (!pair1.some((name) => pair2.includes(name))) {
                combinations.push([pair1, pair2]);
            }
        }
    }
    return combinations;
};

console.log(alFinFechas(respondido));
*/

const listado = ["ana", "bianca", "bruno", "messi"];

function armarLiga(players) {
    if (players.length % 2 !== 0) {
        players.push("libre");
    }

    const rounds = players.length - 1; // Cantidad de rondas necesarias
    const half = players.length / 2; // Cantidad de jugadores en cada grupo

    const group1 = players.slice(0, half); // Primer grupo de jugadores
    const group2 = players.slice(half).reverse(); // Segundo grupo de jugadores (reverso)

    const fixtures = []; // Array para guardar los fixtures

    for (let round = 0; round < rounds; round++) {
        const roundFixtures = []; // Array para guardar los fixtures de la ronda actual
        for (let i = 0; i < half; i++) {
            const fixture = [group1[i], group2[i]]; // Fixture de la ronda actual
            roundFixtures.push(fixture);
        }
        fixtures.push(roundFixtures);
        // Rotar los jugadores en el grupo 2 para la siguiente ronda
        console.log(group1);
        console.log(group2);
        group2.unshift(group1.pop());
        console.log(group1);
        console.log(group2);
        group1.splice(1, 0, group2.pop());
        console.log(group1);
    }

    return fixtures;
}

armarLiga(listado);
