import DbConnect from "./DbConnect";
import { ObjectId } from "mongodb";

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


export const getVideosFromDbByCategory = async (eventname) => {
  const db = await DbConnect();
  const categoriesCollection = db.collection("videos");
  return categoriesCollection.find({eventname:eventname}).toArray();
};

export const getVideosFromDbById = async (id) => {
  const db = await DbConnect();
  const categoriesCollection = db.collection("videos");
  return categoriesCollection.findOne({ _id: new ObjectId(id) });
};

export const getVideosFromDbBySearch = async (eventname) => {
  const db = await DbConnect();
  const categoriesCollection = db.collection("videos");
  return categoriesCollection.find({title:{ $regex: eventname, $options: 'i' }}).toArray();
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
export const approvedaVideoById = async (id) => {
  const db = await DbConnect();
  const videosCollection = db.collection("videos"); 
  const filter = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: {
      status:'approved'
    },
  };

  const result = await videosCollection.updateOne(filter, updateDoc);
 
  return result;

};
