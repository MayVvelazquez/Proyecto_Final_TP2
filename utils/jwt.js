import jwt from "jsonwebtoken";
//hash password
export const generateToken = (payload) => {
  //Secret
  const token = jwt.sign(payload, "ecommerce", { expiresIn: "30d" });
  return token;
};

export const verifyToken = (token) => {
  const verify = jwt.verify(token, "ecommerce");
  return verify;
};