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

// Update a student by ID
export async function updateStudent(id, updatedStudent) {
  const { data, error } = await supabase
    .from("Estudiante")
    .update(updatedStudent)
    .eq("id", id);

  if (error) {
    console.error("Error updating student:", error);
    return null;
  }

  return data;
}

// Delete a student by ID
export async function deleteStudent(id) {
  const { data, error } = await supabase
    .from("Estudiante")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting student:", error);
    return null;
  }

  return data;
}
// Create a new student
export async function createEstudiante(estudiante) {
  const { data, error } = await supabase
    .from("Estudiante")
    .insert([estudiante]);

  if (error) {
    console.error("Error creating student:", error);
    return null;
  }

  return data;
}

// Read a student by ID
export async function getEstudianteById(id) {
  const { data, error } = await supabase
    .from("Estudiante")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching student:", error);
    return null;
  }

  return data;
}

// Update a student by ID
export async function updateEstudiante(id, updatedEstudiante) {
  const { data, error } = await supabase
    .from("Estudiante")
    .update(updatedEstudiante)
    .eq("id", id);

  if (error) {
    console.error("Error updating student:", error);
    return null;
  }

  return data;
}

// Delete a student by ID
export async function deleteEstudiante(id) {
  const { data, error } = await supabase
    .from("Estudiante")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting student:", error);
    return null;
  }

  return data;
}
