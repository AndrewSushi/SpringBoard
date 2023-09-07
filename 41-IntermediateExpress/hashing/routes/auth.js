/** Routes for demonstrating authentication in Express. */

const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const { ensureLoggedIn, ensureAdmin } = require("../middleware/auth");

router.get('/', (req, res, next) => {
  res.send("APP IS WORKING!!!")
})

router.post('/register', async (req, res, next) => {
  try {
    const {username, password} = req.body

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR)
  } catch(e){
    return next(e)
  }
});

module.exports = router;
