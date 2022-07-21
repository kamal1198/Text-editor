import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  console.log("GET from DB");
  const addToDB = await openDB("jate", 1);
  const transaction = addToDB.transaction("jate", "readwrite");
  const jateObjectStore = transaction.objectStore("jate");
  const result = jateObjectStore.put({ id: id, content: content });
  console.log("Content was successfully saved", await result);
  // return await result;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("PUT to DB");
  const getAllFromDB = await openDB("jate", 1);
  const transaction = getAllFromDB.transaction("jate", "readwrite");
  const jateObjectStore = transaction.objectStore("jate");
  const result = jateObjectStore.getAll();
  console.log("All content gotten from the DB", await result);
  // return await result;
};

initdb();
