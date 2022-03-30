import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import {compare, hashSync} from "bcrypt";
import generator from "../data/generator.js";

export const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({ email });


    if (!user) {
        res.status(401)
        throw new Error('Bunday foydalanuvchi topilmadi, yangi hisob ochishingiz mumkin')
    } else {
        const isMatch = await compare(password, user.password)

        if (user && isMatch) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generator(user._id)
            })
        } else {
            res.status(401)
            throw new Error('Parol xato kiritildi')
        }
    }
})

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        res.status(401)
        throw new Error('Bu foydalnuvchi bizda mavjud')
    } else {
        user = await User.create({
            name, email, password
        })

        user.password = await hashSync(password, 10);

        await user.save();

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generator(user._id)
        })
    }
})

export const getProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('Bunday foydalanuvchi topilmadi')
    }
})