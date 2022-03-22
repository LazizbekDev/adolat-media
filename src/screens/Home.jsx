import React from 'react';
import news from "../news";
import {Post} from "../components";

const Home = () => {
    return (
        <>
            <h1>So'ngi Yangiliklar</h1>
            <div className={'gap-8 columns-3'}>
                {news.map((yangilik) => (
                    <div className={'py-10'} key={yangilik._id}>
                        <Post
                            imgUrl={yangilik.image}
                            author={yangilik.author}
                            title={yangilik.title}
                            category={yangilik.category}
                            description={yangilik.description}
                            views={yangilik.views}
                            key={yangilik._id}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;