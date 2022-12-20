import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    edad: {
      type: Number,
      required: true,
    },
    dni: {
      type: String,
      required: true,
    },
    curso: {
      type: String,
      required: true,
    },
    nota: {
      type: Number,
      required: true,
    },
    ingreso: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const EstudiantesModel = model("Estudiantes", schema);
