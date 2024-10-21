class Estudiante {
  constructor({
    id,
    name,
    grado,
    jornada,
    linguistica,
    logica,
    espacial,
    musical,
    interpersonal,
    kinestesico,
  }) {
    this.id = id;
    this.name = name;
    this.grado = grado;
    this.jornada = jornada;
    this.linguistica = linguistica;
    this.logica = logica;
    this.espacial = espacial;
    this.musical = musical;
    this.interpersonal = interpersonal;
    this.kinestesico = kinestesico;
  }
}

export { Estudiante };
