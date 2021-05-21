const { Client } = require("@notionhq/client");
const { NotionKey } = require('./keys');

const Notion = new Client({ auth: NotionKey });