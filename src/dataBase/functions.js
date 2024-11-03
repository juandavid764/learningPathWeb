import { supabase } from "./supabase";

// Create a new student
export async function createStudent(student) {
  const { data, error } = await supabase.from("Estudiantes").insert({
    name: student.name,
    grado: student.grado,
    jornada: student.jornada,
    linguistica: student.linguistica,
    logica: student.logica,
    espacial: student.espacial,
    musical: student.musical,
    interpersonal: student.interpersonal,
    kinestesico: student.kinestesico,
  });

  if (error) {
    console.error("Error creating student:", error);
    return null;
  }
  return data;
}

// Obtiene todos los estudiantes de la tabla "Estudiantes"
export async function getStudentStats() {
  const { data, error } = await supabase.from("Estudiantes").select("*");

  if (error) {
    console.error("Error fetching students:", error);
    return [];
  }
  return data;
}

// Read a student by ID
export async function getStudentById(student) {
  const { data, error } = await supabase
    .from("Estudiantes")
    .select("*")
    .eq("id", student.id)
    .single(); //El resultado debe ser una fila, sin genera error

  if (error) {
    console.error("Error fetching student:", error);
    return null;
  }

  return data;
}

// Read all students
export async function getStudents() {
  const { data, error } = await supabase.from("Estudiantes").select("*");

  if (error) {
    console.error("Error fetching student:", error);
    return null;
  }

  return data;
}

// Update a student by ID
export async function updateStudent(student) {
  const { data, error } = await supabase
    .from("Estudiantes")
    .update(student)
    .eq("id", student.id)
    .select();

  if (error) {
    console.log("Error updating student:", error);
    return null;
  }

  return data;
}

// Delete a student by ID
export async function deleteStudent(student) {
  const { data, error } = await supabase
    .from("Estudiantes")
    .delete()
    .eq("id", student.id)
    .select();

  if (error) {
    console.error("Error deleting student:", error);
    return null;
  }

  return data;
}

//------------------------------------------------------------
//
// Create a new user
export async function createUser(user) {
  const { data, error } = await supabase.from("Usuarios").insert({
    name: user.name,
    about: user.about,
    rol: user.rol,
    ubicacion: user.ubicacion,
    email: user.email,
    contrasena: user.contrasena,
  });

  if (error) {
    console.error("Error creating user:", error);
    return null;
  }
  return data;
}

// Read a user by ID
export async function getUserById(user) {
  const { data, error } = await supabase
    .from("Usuarios")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Error fetching user:", error);
    return null;
  }

  return data;
}

// Read all users
export async function getUsers() {
  const { data, error } = await supabase.from("Usuarios").select("*");

  if (error) {
    console.error("Error fetching users:", error);
    return null;
  }

  return data;
}

// Update a user by ID
export async function updateUser(user) {
  const { data, error } = await supabase
    .from("Usuarios")
    .update(user)
    .eq("id", user.id)
    .select();

  if (error) {
    console.log("Error updating user:", error);
    return null;
  }

  return data;
}

// Delete a user by ID
export async function deleteUser(user) {
  const { data, error } = await supabase
    .from("Usuarios")
    .delete()
    .eq("id", user.id)
    .select();

  if (error) {
    console.error("Error deleting user:", error);
    return null;
  }

  return data;
}

//Validar login
export async function validateLogin(email, contrasena) {
  const { data, error } = await supabase
    .from("Usuarios")
    .select("*")
    .eq("email", email)
    .eq("contrasena", contrasena)
    .single();

  if (error) {
    console.error("Credenciales incorrectas:", error);
    return null;
  }

  return data;
}

//------------------------------------------------------------
export async function updateForm(student) {
  const { data, error } = await supabase
    .from("Estudiantes")
    .update({
      linguistica: student.linguistica,
      logica: student.logica,
      espacial: student.espacial,
      musical: student.musical,
      interpersonal: student.interpersonal,
      kinestesico: student.kinestesico,
      comentarios: student.comentarios,
    })
    .eq("id", student.id)
    .select();

  if (error) {
    console.log("Error updating student:", error);
    return null;
  }

  return data;
}
//----------------------------------------------------
export async function updateStudentIntelligences(
  id,
  linguistica,
  logica,
  espacial,
  musical,
  interpersonal,
  kinestesico
) {
  const { data, error } = await supabase
    .from("Estudiantes")
    .update({
      linguistica: linguistica,
      logica: logica,
      espacial: espacial,
      musical: musical,
      interpersonal: interpersonal,
      kinestesico: kinestesico,
    })
    .eq("id", id)
    .select();

  if (error) {
    console.log("Error updating student intelligences:", error);
    return null;
  }

  return data;
}
