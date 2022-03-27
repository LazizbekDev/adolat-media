import React from 'react';
import news from "../news";
import {Post} from "../components";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={'grid md:grid-cols-3 grid-cols-2'}>
            <div className={'lg:col-span-2 col-span-3'}>
                <h1 className={'text-3xl underline uppercase pt-5 block'}>So'ngi Yangiliklar</h1>
                <div className={'grid md:grid-cols-3 grid-cols-none gap-4 mx-4'}>
                    {news.map((yangilik) => (
                        <div className={'py-4 mx-auto'} key={yangilik._id}>
                            <Post
                                imgUrl={yangilik.image}
                                link={yangilik._id}
                                title={yangilik.title}
                                category={yangilik.category}
                                description={yangilik.description}
                                views={yangilik.views}
                                rating={yangilik.rating}
                                numRank={yangilik.numReviews}
                                key={yangilik._id}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={'lg:col-span-1 col-span-3 md:mx-auto mx-4'}>
                <h2 className={'font-medium text-red-700 text-3xl mb-10'}>Reytingi baland postlar</h2>
                {news.map(related => (
                    <Link to={`/xabar/${related._id}`}>
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
        </div>
    );
}

export default Home;