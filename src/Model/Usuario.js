export class Usuario {
  constructor({ id, name, about, rol, ubicacion, email, contrasena }) {
    this.id = id;
    this.name = name;
    this.about = about;
    this.rol = rol;
    this.ubicacion = ubicacion;
    this.email = email;
    this.contrasena = contrasena;
  }
}
