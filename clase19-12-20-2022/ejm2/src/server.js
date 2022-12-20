import "./config/db.js";
import { EstudiantesModel } from "./models/estudiantes.models.js";
import { format } from "date-fns";
const estudiantes = [
  { nombre: "Pedro", apellido: "Mei", edad: 21, dni: "31155898", curso: "1A", nota: 7 },
  { nombre: "Ana", apellido: "Gonzalez", edad: 32, dni: "27651878", curso: "1A", nota: 8 },
  { nombre: "José", apellido: "Picos", edad: 29, dni: "34554398", curso: "2A", nota: 6 },
  { nombre: "Lucas", apellido: "Blanco", edad: 22, dni: "30355874", curso: "3A", nota: 10 },
  { nombre: "María", apellido: "García", edad: 36, dni: "29575148", curso: "1A", nota: 9 },
  { nombre: "Federico", apellido: "Perez", edad: 41, dni: "320118321", curso: "2A", nota: 5 },
  { nombre: "Tomas", apellido: "Sierra", edad: 19, dni: "38654790", curso: "2B", nota: 4 },
  { nombre: "Carlos", apellido: "Fernández", edad: 33, dni: "26935670", curso: "3B", nota: 2 },
  { nombre: "Fabio", apellido: "Pieres", edad: 39, dni: "4315388", curso: "1B", nota: 9 },
  { nombre: "Daniel", apellido: "Gallo", edad: 25, dni: "37923460", curso: "3B", nota: 2 },
];

// const response = await EstudiantesModel.create(estudiantes);
// console.log(response);

// Primera parte
// a
console.log("Estudiantes en orden por nombre", await EstudiantesModel.find().sort({ nombre: 1 }));
// b
console.log("El estudiante mas joven", await EstudiantesModel.find().sort({ edad: 1 }).limit(1));
// c
console.log("Curso 2a", await EstudiantesModel.find({ curso: "2A" }));
// d
console.log(
  "El segundo estudiante mas joven",
  await EstudiantesModel.find().sort({ edad: 1 }).skip(1).limit(1),
);
// e
console.log(
  "Solo nombre, apellido, curso",
  await EstudiantesModel.find({}, { _id: 0, nombre: 1, apellido: 1, curso: 1 }).sort({
    apellido: -1,
  }),
);
// f
console.log("Nota 10", await EstudiantesModel.find({ nota: 10 }));
// g

const notasAlumnos = await EstudiantesModel.find({}, { _id: 0, nota: 1 });
promedio(notasAlumnos);

const notasAlumnos1A = await EstudiantesModel.find({ curso: "1A" }, { _id: 0, nota: 1 });

promedio(notasAlumnos1A);

function promedio(notasAlumnos) {
  const totalNotas = notasAlumnos.reduce((acc, cur) => acc + cur.nota, 0);
  const promedio = totalNotas / notasAlumnos.length;
  console.log("Promedio:", promedio);
}

//Segunda parte
await EstudiantesModel.updateOne({ nombre: "Lucas", apellido: "Blanco" }, { dni: 20355875 });
//2
await EstudiantesModel.updateMany({}, { ingreso: false });
// 3
await EstudiantesModel.updateMany({ curso: "1A" }, { ingreso: true });
// 4
console.log(await EstudiantesModel.find({ nota: { $gte: 4 } }, { _id: 0, __v: 0 }));
// 5
console.log(await EstudiantesModel.find({ ingreso: true }, { _id: 0, __v: 0 }));
// 6
await EstudiantesModel.deleteMany({ ingreso: true });
// 7
const totalEstudiantes = await EstudiantesModel.find();

for (const estudiante of totalEstudiantes) {
  console.log(estudiante, format(new Date(estudiante._id.getTimestamp()), "dd/MM/yyyy HH:mm:ss a"));
}
