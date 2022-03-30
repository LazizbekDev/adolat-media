import {
    NEWS_ITEM_ERROR,
    NEWS_ITEM_REQUEST,
    NEWS_ITEM_SUCCESS,
    NEWS_LIST_ERROR,
    NEWS_LIST_REQUEST,
    NEWS_LIST_SUCCESS
} from "../constants/NewsConts";

export const newsListReducer = (state = { news: [] }, action) => {
    const { type, payload } = action;

    switch (type) {
        case NEWS_LIST_REQUEST:
            return {
                loading: true,
                news: []
            }
        case NEWS_LIST_SUCCESS:
            return {
                loading: false,
                news: payload
            }
        case NEWS_LIST_ERROR:
            return {
                loading: false,
                error: payload
            }

        default:
            return state
    }
}

export const newsItemReducer = (state = { news: {reviews: []} }, action) => {
    const { type, payload } = action;

    switch (type) {
        case NEWS_ITEM_REQUEST:
            return {
                loading: true,
                news: []
            }
        case NEWS_ITEM_SUCCESS:
            return {
                loading: false,
                news: payload
            }
        case NEWS_ITEM_ERROR:
            return {
                loading: false,
                error: payload
            }

        default:
            return state
    }
}