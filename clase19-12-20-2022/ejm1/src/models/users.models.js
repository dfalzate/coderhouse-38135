import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max: 100,
    },
    password: {
      type: String,
      required: true,
      max: 8,
      min: 6,
    },
    userName: {
      type: String,
      required: true,
      max: 20,
    },
    age: {
      type: Number,
      required: true,
      max: 120,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model("Users", schema);
