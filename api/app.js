require("dotenv").config();
const express = require("express");
const app = express();
const contacts = require("./ContactsDB/contactsDbCalls");

app.use(express.json());

app.get("/contacts", (req, res, next) => {
  const contactsList = contacts.getContacts();
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
