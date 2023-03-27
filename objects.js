// constructor de EQUIPOS
function Equipo(
  name,
  puntos = 0,
  partidosPerdidos = 0,
  partidosGanados = 0,
  partidosEmpatados = 0,
  enfrentamientos = [],
  golFavor = 0,
  golContra = 0
) {
  (this.name = name),
    (this.puntos = puntos),
    (this.partidosPerdidos = partidosPerdidos),
    (this.partidosGanados = partidosGanados),
    (this.partidosEmpatados = partidosEmpatados),
    (this.enfrentamientos = enfrentamientos),
    (this.golFavor = golFavor),
    (this.golContra = golContra),
    (this.totalPartidos = () =>
      this.partidosEmpatados + this.partidosGanados + this.partidosPerdidos);

  this.difGol = () => this.golFavor - this.golContra;

  this.promedioDeGol = () => this.golFavor / this.totalPartidos();
}
// constructor de PRODES y sus ACIERTOS
function Apostador(name, fecha, apuestas = [], vencedor = 0, aciertos = []) {
  (this.name = name),
    (this.fecha = fecha),
    (this.apuestas = apuestas),
    (this.vencedor = vencedor),
    (this.aciertos = aciertos);
}

// constructor de RESULTADOS de las FECHAS
function Finales(fecha, resultados = []) {
  (this.fecha = fecha), (this.resultados = resultados);
}

// constructor de LIGAS y FECHAS
function NewLigue(NameLigue, equiposDeleTorneo = [], partidosDeFecha = []) {
  (this.NameLigue = NameLigue),
    (this.equiposDeleTorneo = equiposDeleTorneo),
    (this.fecha = fecha),
    (this.PartidosDeFecha = partidosDeFecha);
}
// constructor de NOMBRE LIGAS E iCONOS.
function createLigue(nameLigue, iconLigue) {
  (this.nameLigue = nameLigue), (this.iconLigue = iconLigue);
}
