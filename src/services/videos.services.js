import "server-only";
import DbConnect from "./DbConnect";

export const getVideosFromDb = async () => {
    const db = await DbConnect();
    const categoriesCollection = db.collection("videos");
    return categoriesCollection.find({}).toArray();
  };

  export const insertVideoInDb = async (data) => {
    const db = await DbConnect();
    const categoriesCollection = db.collection("videos");
    let result = await categoriesCollection.insertOne(data)
    return result;
  };
  
 
