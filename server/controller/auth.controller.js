const User = require("../model/user.model.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { handleError } = require("../helpers/handleError.js");

const Register = async (req, res, next) => {
  console.log(req.body);
  try {
    const { name, email, password, confirmPass } = req.body;
    const checkuser = await User.findOne({ email });
    if (checkuser) {
      // console.log("Email already registered");
      res.status(400).json({
        success: true,
        message: "Email is Already exist",
      });
    } else {
      if (password == confirmPass) {
        const hashedPassword = bcryptjs.hashSync(password);
  
        const user = await User.create({
          name,
          email,
          password: hashedPassword,
        });
        console.log(hashedPassword);
        res.status(200).json({
          success: true,
          message: "Registration successful.",
        });
      } else {
        res.status(400).json({
          success: true,
          message: "conform pass is Not match ",
        });
      }
    }
  } catch (error) {
    console.log(error);
    next(handleError(500, error.message));
  }
};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        success: true,
        message: "invalid Login credentials ",
      });
    }
    const hashedPassword = user.password;
    const comparePassword = await bcryptjs.compare(password, hashedPassword);
    if (!comparePassword) {
      // return next(handleError(404, "Invalid login credentials."));
      res.status(404).json({
        success:true,
        message:"Invalid user Credentials"
      })
    }
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
      },
      process.env.JWT_SECRET
    );
    res.cookie("access_token", token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    });

    const newUser = user.toObject({ getters: true });
    delete newUser.password;

    res.status(200).json({
      success: true,
      user: newUser,
      message: "Login successful.",
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

const GoogleLogin = async (req, res, next) => {
  try {
    const { name, email, avatar } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      const password = Math.random().toString();
      const hashedPassword = bcryptjs.hashSync(password);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        avatar,
      });

      user = await newUser.save();
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
      },
      process.env.JWT_SECRET
    );

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    });

    const newUser = user.toObject({ getters: true });
    delete newUser.password;

    res.status(200).json({
      success: true,
      user: newUser,
      message: "Login successful.",
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

const Logout = async (req, res, next) => {
  try {
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    });
    res.status(200).json({
      success: true,
      message: "Logout successful.",
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

// Export all
module.exports = {
  Register,
  Login,
  GoogleLogin,
  Logout,
};
