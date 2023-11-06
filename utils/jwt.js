import jwt from "jsonwebtoken";
//hash password
export const generateToken = (payload) => {
  const token = jwt.sign(payload, "chayanne", { expiresIn: "2d" });
  return token;
};

export const verifyToken = (token) => {
  const verify = jwt.verify(token, "chayanne");
  return verify;
};