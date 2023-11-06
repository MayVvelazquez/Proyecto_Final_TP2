import { verifyToken } from "../utils/jwt";

export const validateUser = async (req, res, next) => {
    try {
        const {token} = req.cookies;
        const user = verifyToken(token);
        if (!user) throw new Error("No se puede acceder");
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({message: error.message});
    }
};