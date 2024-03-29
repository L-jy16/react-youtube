import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';

import { AiFillPlaySquare } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";


const Video = () => {

    const { videoId } = useParams();
    const [ videoDetail, setVideoDetail ] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                setVideoDetail(data.items[0]);
                console.log(data)
            });

        fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}`)
            .then((data) => {
                setComments(data.items);
                console.log(data)
            })
    }, [videoId])

    return (
        <section id='videoViewPage'>
            {videoDetail && (
                <div className='video__view'>
                    <div className='video__play'>
                        <ReactPlayer
                            playing={true}
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                            width='100%'
                            height='100%'
                            style={{position: 'absolute', top: 0, left: 0}}
                        />
                    </div>
                    <div className="video__info">
                        <h2 className='video__title'>
                            {videoDetail.snippet.title}
                        </h2>
                        <div className='video__channel'>
                            <div className='id'>
                                <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                            </div>
                            <div className='count'>
                                <span className='view'><AiFillPlaySquare />{videoDetail.statistics.viewCount}</span>
                                <span className='like'><AiFillLike />{videoDetail.statistics.likeCount}</span>
                                <span className='comment'><AiOutlineComment />{videoDetail.statistics.commentCount}</span>
                            </div>
                        </div>
                    </div>
                    <div className='video__desc'>
                        {videoDetail.snippet.description}
                    </div>
                    <div className='video__comment'>
                        {comments.map((comment, key) => (
                            <div className="comment__all" key={key}>
                                <div className="comment__nickname" key={key}>
                                    {comment.snippet.topLevelComment.snippet.authorDisplayName}
                                </div>
                                <div className="comment__cont" key={key}>
                                    {comment.snippet.topLevelComment.snippet.textOriginal}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
  )
}

export default Video