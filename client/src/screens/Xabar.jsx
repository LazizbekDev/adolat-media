import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {BsPersonFill, BsStarFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {itemNews, listNews} from "../redux/actions/xabar";

const Xabar = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const newsItem = useSelector(state => state.newsItem);
    const newsList = useSelector(state => state.newsList);

    const { loading, error, news } = newsItem;

    useEffect(() => {
        dispatch(itemNews(id));
        dispatch(listNews());
    }, [dispatch])

    return (
        <>
            {loading ? <h2>Yuklanmoqda...</h2> : error ? <h2>{error}</h2> : <div className={'py-10 grid md:grid-cols-3 grid-cols-2 gap-4'}>
                <div className={'col-span-2'}>
                    <h1 className={'text-gray-900 text-4xl font-medium'}>{news.title}</h1>
                    <img
                        src={news.image}
                        alt={news.title}
                        className={'w-full rounded-md my-5'}
                    />
                    <p className={'indent-10 whitespace-pre-wrap tracking-wide leading-relaxed'}>
                        {news.description}
                    </p>

                    <div className={'info bg-gray-900 text-white rounded-md px-4 py-3 flex items-center justify-between mt-20'}>
                        <span>{news.author}</span>
                        <select className={'rounded-md bg-gray-900'}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <span className={'flex items-center justify-around'}><BsStarFill />{news.rating} / <BsPersonFill /> {news.numReviews}</span>
                    </div>
                </div>
                <div className={'md:col-span-1 col-span-2'}>
                    <h2 className={'font-medium text-red-700 text-3xl mb-10'}>Reytingi baland postlar</h2>
                    {newsList.loading ? <h2>Yuklanmoqda...</h2> : newsList.error ? <h2>{newsList.error}</h2> : newsList.news.map(related => (
                        <Link to={`/xabarlar/${related._id}`} key={related._id}>
                            <figure className="md:flex rounded-xl md:py-3 hover:bg-gray-200 duration-300 cursor-pointer">
                                <img className="w-20 h-20 rounded-md mr-4"
                                     src={related.image} alt={related.title} />
                                <div className="leading-4">
                                    <blockquote>
                                        <p className="text-lg font-medium line-clamp-2">
                                            {related.title}
                                        </p>
                                    </blockquote>
                                    <figcaption className="font-light">
                                        <div className="text-slate-700 dark:text-slate-500">
                                            Staff Engineer, Algolia
                                        </div>
                                    </figcaption>
                                </div>
                            </figure>
                        </Link>
                    ))}
                </div>
            </div>}
        </>
    );
};

export default Xabar;