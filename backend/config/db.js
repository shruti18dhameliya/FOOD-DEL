import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:25804393@cluster0.gbsymbu.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}




