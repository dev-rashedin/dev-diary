import { asyncHandler } from "express-error-toolkit";
const jwt = require('jsonwebtoken');



const authHandler = asyncHandler(async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '7d',
  });

  res.send({ token });
})


export default authHandler