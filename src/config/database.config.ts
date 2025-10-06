import mongoose from "mongoose";

const dbConfig = (uri: string) => {
  mongoose
    .connect(uri)
    .then(() => console.log("server connected to database successfuly 💾"))
    .catch((err) => console.log(err));
};

export default dbConfig;
