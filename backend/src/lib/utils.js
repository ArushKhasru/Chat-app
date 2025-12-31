import jwt from "jsonwebtoken";
import {ENV} from './env.js';
export const generateToken = (userId, res) => {

    const { JWT_SECRET, NODE_ENV } = ENV;
    if (!JWT_SECRET) { throw new Error("JWT_SECRET is not configured") }

    const token = jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 1000,
        httpOnly: true, //to prevent cross site scripting or xss
        sameSite: ENV.NODE_ENV === "production" ? "strict" : "lax", //to prevent cross site request forgery
        secure: ENV.NODE_ENV === "development" ? false : true,
        domain: "localhost",
    })

    return token;
}