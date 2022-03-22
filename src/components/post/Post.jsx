import React from 'react';
import './Post.scss'
import {TiPen} from "react-icons/ti";
import ReactTooltip from "react-tooltip";
import {AiFillEye} from "react-icons/ai";

const Post = ({imgUrl, author, title, category, description, views}) => {
    return (
        <div className={'w-full aspect-square'}>
            <div className="carder">
                <div className="card__header">
                    <img
                        src={imgUrl}
                        alt="card__image"
                        className="card__image"
                         width="600" />
                </div>
                <div className="card__body">
                    <span className="tag tag-blue">{category}</span>
                    <h4 className={'text-2xl line-clamp-2'} data-tip={title}>{title}</h4>
                    <p className={'line-clamp-4'}>{description}</p>
                </div>
                <div className="card__footer">
                    <div className="user">
                        <div className="user__info">
                            <h5 className={'flex items-center'}><TiPen />{author}</h5>
                            <small className={'flex items-center'}><AiFillEye />{views}</small>
                        </div>
                    </div>
                </div>
            </div>
            <ReactTooltip />
        </div>

    );
};

export default Post;