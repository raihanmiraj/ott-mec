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


export const getAllEvents = async () => {
  const db = await DbConnect();
  const videosCollection = db.collection("videos");
  const result = await videosCollection.find({}).toArray();
  const uniqueEventNames = [...new Set(result.map(obj => obj.eventname))];
 
  return uniqueEventNames;

};

export const getAllDepartment = async () => {
  const db = await DbConnect();
  const videosCollection = db.collection("videos");
  const result = await videosCollection.find({}).toArray();
  const uniqueEventNames = [...new Set(result.map(obj => obj.department))];
 
  return uniqueEventNames;

};
