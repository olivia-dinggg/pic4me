import fs from 'fs';

let data = {
  users: {
    "userId1": {
        photos: [{
            photoId: "SomeSha256ID",
            photo: "Some encoding",
            dateTaken: new Date(),
            prompt: "Eating a healthy snack",
        }]
    }
  }
};

export const getData = () => data;
export const setData = (newData) => {
  data = newData;

  const jsonStr = JSON.stringify(newData);
  fs.writeFileSync('./data.json', jsonStr);
}

export const loadData = () => {
  if (fs.existsSync('./data.json')) {
    const datastore = fs.readFileSync('./data.json');
    data = JSON.parse(String(datastore));
  }
}