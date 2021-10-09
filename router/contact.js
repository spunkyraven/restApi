const express = require("express");
const {
  addContact,
  getAllContact,
  getContact,
  deleteContact,
  editContact,
} = require("../controllers/contact.controllers");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("test api");
});
// CRUD//
/////////////////////////////////////////////////////////////////////
// @Create => add a contact to the database
// Method=> POST
// Data req.body
// URL http://localhost:6000/api/contact/
router.post("/", addContact);
//////////////////////////////////////////////////////////////
// @Read => Get all The contact
// Method=> GET
// Data
// URL http://localhost:6000/api/contact/
router.get("/", getAllContact);
////////////////////////////////////////////////////////////////
// @Read => Get One contact By id
// Method=> GET
// Data id => req.params
// URL http://localhost:6000/api/contact/:id
router.get("/:id", getContact);
/////////////////////////////////////////////////////////////
// @Update => update one contact
// Method=> PUT
// Data id => req.params+  body=>modification
// URL http://localhost:6000/api/contact/:id
router.put("/:id", editContact);

////////////////////////////////////////////////////

// @DELETE => delete one contact
// Method=> DELETE
// Data id => req.params
// URL http://localhost:6000/api/contact/:id
router.delete("/:id", deleteContact);

module.exports = router;
