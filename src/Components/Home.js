import React from 'react'
import Post from './Post'
import {Button} from '@material-ui/core'

const Home = (props) => { 
    return ( 
        <div className="Home">

        <div className='sort-button-container'>
            <Button className="sort-button" onClick={props.onSort} variant='contained' color='primary'>Hot</Button>
            <Button className='sort-button' onClick={props.onSort} variant='contained' color='primary'>New</Button>
            <Button className='sort-button' onClick={props.onSort} variant='contained' color='primary'>Top</Button>
        </div>

        {props.data.map((post,index) => 
            <Post 
            key={index} 
            post={post.data}
            {...props.history}
        />)}
        
        </div>
    );
}

export default Home;