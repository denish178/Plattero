import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://denish_murawala:31320047Cs*1@cluster0.itk5rsg.mongodb.net/Plattero",
    )
    .then(() => {
      console.log("DB Connected successfully");
    });
};

export default connectDB;
