import mongoose from "mongoose";

const Connetcdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_URL,{});

    console.log(`mongoDb connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit();
  }
};

export default Connetcdb
