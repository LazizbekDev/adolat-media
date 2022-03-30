import {
    NEWS_ITEM_ERROR,
    NEWS_ITEM_REQUEST,
    NEWS_ITEM_SUCCESS,
    NEWS_LIST_ERROR,
    NEWS_LIST_REQUEST,
    NEWS_LIST_SUCCESS
} from "../../constants/NewsConts";
import axios from "axios";

export const listNews = () => async (dispatch) => {
    try {
        dispatch({type: NEWS_LIST_REQUEST});

        const { data } = await axios.get('/api/xabarlar/');

        dispatch({
            type: NEWS_LIST_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: NEWS_LIST_ERROR,
            payload: err.response && err.response.data.msg ? err.response.data.msg : err.message
        })
    }
}

export const itemNews = (id) => async (dispatch) => {
    try {
        dispatch({type: NEWS_ITEM_REQUEST});

        const { data } = await axios.get(`/api/xabarlar/${id}`);

        dispatch({
            type: NEWS_ITEM_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: NEWS_ITEM_ERROR,
            payload: err.response && err.response.data.msg ? err.response.data.msg : err.message
        })
    }
}