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

(async () => {

  const fetchDBList = await retriveDB(NotionDB);

})();