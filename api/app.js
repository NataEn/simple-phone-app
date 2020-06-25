require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const contacts = require("./ContactsDB/contactsDbCalls");
app.use(cors());
app.use(express.json());

app.get("/contacts", async (req, res, next) => {
  const contactsList = await contacts.getContacts();
  res.send(contactsList);
});
app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () =>
  console.log(
    `phone book api listening at http://localhost:${process.env.PORT}`
  )
);
