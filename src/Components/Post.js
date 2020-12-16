import React from 'react'
import './Post.css'
import moment from 'moment'

import {BottomNavigationAction} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Card from '@material-ui/core/Card';


const Post = (props) => {
    const {post} = props

    const isVideo = () => {
        if(post.crosspost_parent_list && post.crosspost_parent_list[0] && post.crosspost_parent_list[0].secure_media &&  post.crosspost_parent_list[0].secure_media.reddit_video && post.crosspost_parent_list[0].secure_media.reddit_video.fallback_url){
            return (
                <div className='video'>
                    <iframe src={post.crosspost_parent_list[0].secure_media.reddit_video.fallback_url} title={post.title}/>
                </div>
            )
        }
    }
    return ( 
        <Card className='post-card'>
            <span className='created-at'>
                Posted {moment.unix(`${post.created}`).format('MMMM Do, YYYY')}
            </span>
            <span className='likes'>{post.score} points</span>

            <h3 className="title" onClick={()=> props.push(`/${post.id}`)}>{post.title}</h3>

            {post.link_flair_richtext[0]?             
                post.link_flair_richtext[0].t ==="Image"? 
                    <img className='post-image' src={post.url_overridden_by_dest} alt={post.title}/>:
                    null 
            :null}  

            {isVideo()}
            
            <div className="buttons">
                <BottomNavigationAction  label='Likes' icon={<ThumbUpAltIcon/>}className='button'></BottomNavigationAction >
                <BottomNavigationAction  label='Comments' value={post.num_comments} icon={<CommentIcon/>} className='button'/> 
                <BottomNavigationAction  label='Share' icon={<ShareIcon/>} className='button'/>
                <BottomNavigationAction  label='Save' icon={<BookmarkIcon/>} className='button'/>
            </div>                         
        </Card>
    )
}

export default Post;
