const User = require("../model/user.model");
const { plainToHash, hashToPlain } = require("../utils/password");

exports.createUser = async (req, res) => {
  const { email, password, confirmPass } = req.body;
  const existEmail = await User.findOne({ email }).countDocuments().exec();
  if (!existEmail) {
    if (password == confirmPass) {
      const hashPass = await plainToHash(password);
      const newUser = await User.create({ email, password: hashPass });
      console.log("registration successful");
      return res.status(201).json({ message: "User created successfully" });
    } else {
      console.log("password not match");
      return res.status(400).json({ message: "Passwords do not match" });
    }
  } else {
    return res.status(400).json({ message: "Email already exists" });
  }
};

exports.login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const existEmail = await User.findOne({ email }).countDocuments().exec();
  if (existEmail > 0) {
    const admin = await User.findOne({ email });
    const pass_match = await hashToPlain(password, User.password);
    if (pass_match) {
      res.redirect("/home");
    } else {
      console.log();
      res.status(400).json({ message: "Invalid Password" });
    }
  }
};
