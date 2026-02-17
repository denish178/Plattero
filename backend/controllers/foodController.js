import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Image required",
    });
  }

  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: Number(req.body.price),
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.status(201).json({
      success: true,
      message: "Food Added",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "ERROR" });
  }
};

export { addFood };
