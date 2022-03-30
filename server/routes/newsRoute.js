import {Router} from "express";
import asyncHandler from "express-async-handler";
import Xabar from "../models/xabar.js";
import colors from "colors";
import {getNews, getNewsById} from "../controllers/newsController.js";

const route = Router();

route.get('/', getNews)

route.get('/:id', getNewsById)

export default route;