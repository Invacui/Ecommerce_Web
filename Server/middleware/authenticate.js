const jwt = require("jsonwebtoken");
const User = require("../model/User");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

    if (!rootUser) {
      throw new Error('User not found');
    } 
    else{
        console.log("User found fetching data...");
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    req.userName = rootUser.fname;
    }
    next();

  } catch (err) {
    res.status(401).send('Unauthorized: No token provided');
    console.log(err);
  }
};

module.exports = Authenticate;
