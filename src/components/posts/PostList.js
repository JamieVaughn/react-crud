import React from 'react'
import PostSummary from './PostSummary'
import PostSummaryAlt from './PostSummaryAlt'

export default function PostList(props) {
    console.log(props)
    return (
        <div className="row">
                {props.posts.length ? props.posts.map(i => (
                    <PostSummaryAlt key={i.id} post={i} />
                )) :
                <span>No Posts found!</span>}
            
        </div>
    )
}