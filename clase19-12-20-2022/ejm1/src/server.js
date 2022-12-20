import "./config/db.js";
import { UserModel } from "./models/users.models.js";

//CRUD

const user1 = {
  name: "Coderhouse1",
  password: "123456",
  userName: "coder",
  age: "1",
  curso: "Backend",
};
const user2 = {
  name: "Coderhouse2",
  password: "123456",
  userName: "coder",
  age: 2,
};

const newUsers = [user1, user2];

//Create

// const newUser1 = new UserModel(user1);
// newUser1.save();
// console.log(newUser1);

// const newUser2 = await UserModel.create(user2);
// console.log(newUser2);

// await UserModel.create(newUsers);

// FIND

const users = await UserModel.find();
console.log(users);

console.log("FindById", await UserModel.findById("63a23bbbc3b43861bed9aa73"));
console.log("FindOne", await UserModel.findOne({ age: 2 }));
console.log("Find", await UserModel.find({ _id: "63a23bbbc3b43861bed9aa73" }));

//Update
// const Coderhouse1 = await UserModel.findById("63a23bbbc3b43861bed9aa73");
// Coderhouse1.name = "new Coderhouse1";
// Coderhouse1.save();

const Coderhouse2 = await UserModel.findByIdAndUpdate("63a23bbbc3b43861bed9aa74", {
  name: "new new Coderhouse2",
  age: 2,
  curso: "Backend",
  password: "111111",
});

console.log(Coderhouse2);

//delete
const deleted = await UserModel.deleteMany({ age: { $gte: 2 } });
console.log(deleted);

const deleteOne = await UserModel.deleteOne({ age: { $gte: 1 } });
console.log(deleteOne);

const deletedById = await UserModel.findByIdAndDelete("63a23cdffad3c2c2c67894be");
console.log(deletedById);
