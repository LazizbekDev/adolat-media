import asyncHandler from "express-async-handler";
import Xabar from "../models/xabar.js";

export const getNews = asyncHandler( async (req, res) => {
    const xabarlar = await Xabar.find({});

    res.json(xabarlar)
})

export const getNewsById = asyncHandler( async (req, res) => {
    const xabar = await Xabar.findById(req.params.id);
    if (xabar) {
        res.json(xabar)
    } else {
        res.status(404).json({msg: 'Buyerda hech narsa topilmadi'})
    }
})