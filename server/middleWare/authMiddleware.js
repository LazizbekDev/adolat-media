import jwt from "jsonwebtoken";
import User from "../models/user.js";
import asyncHandler from "express-async-handler";


export const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Berear')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select('-password')

            console.log(decoded.id)

            next()
        } catch (err) {
            console.log(err)
            res.status(401)
            throw new Error('ruxsat berilmagan, muvaffaqiyatsiz urinish');
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('ruxsat berilmagan, token yo\'q');
    }
})