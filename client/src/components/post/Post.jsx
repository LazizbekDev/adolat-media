import React from 'react';
import './Post.scss'
import ReactTooltip from "react-tooltip";
import {AiFillEye} from "react-icons/ai";
import {BiRightArrow} from "react-icons/bi";
import {Link} from "react-router-dom";
import Rating from "../Rating";

const Post = ({imgUrl, title, category, description, views, link, rating, numRank}) => {
    return (
        <>
            <div className="carder">
                <div className="card__header">
                    <img
                        src={imgUrl}
                        alt="card__image"
                        className="card__image"
                         width="600" />
                </div>
                <div className="card__body" data-tip={title}>
                    <span className={`tag ${category}`}>{category}</span>
                    <h4 className={'text-2xl line-clamp-2'}>{title}</h4>
                    <p className={'line-clamp-4'}>{description}</p>
                </div>
                <div className="card__footer flex items-center justify-between w-full">
                    <small className={'text-gray-900 pr-5 py-3'}>
                        <span className={'flex items-center'}>
                            <AiFillEye />
                            <span style={{fontSize: 9, marginLeft: 5}}>{views}</span>
                        </span>
                        <Rating value={rating} text={`${numRank} mardatan`} />
                    </small>
                    <Link
                        to={`/xabarlar/${link}`}
                        className={'bg-gray-900 rounded w-full text-white flex px-2 py-3 items-center justify-around hover:bg-gray-800 transition'}
                        >Batafsil <BiRightArrow />
                    </Link>
                </div>
            </div>
            <ReactTooltip />
        </>

    );
};

export default Post;