const { Client } = require("@notionhq/client");
const { NotionKey, NotionDB } = require('./keys');

const Notion = new Client({ auth: NotionKey });

const retriveDB = async (id) => {
  const fetchData = await Notion.request({
    path: 'databases/' + id + '/query',
    method: 'POST',
  })
  return fetchData;
}

const addToDB = async (id, num = 0) => {
  const insertionStatus = await Notion.request({
    path: 'pages',
    method: "POST",
    body: {
      "parent": { "database_id": id },
      "properties": {
        "Name": [{ 
          "text": { 
            "content": `Insertion data ${num}`,
          } 
        }],
      }
    }
  })
  
  return true;
}

(async () => {
  const fetchDBList = await retriveDB(NotionDB);

  for(const num of [1, 2, 3]) {
    await addToDB(NotionDB, num)
  }
})();