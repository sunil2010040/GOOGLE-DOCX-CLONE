import mongoose from "mongoose";

const Connection = async (username = "USER1", password = "HELLO") => {
  const URL = `mongodb+srv://${username}:${password}@google-docx-clone.rnzodig.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
