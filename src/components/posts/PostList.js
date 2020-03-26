import React from 'react'
import PostSummary from './PostSummary'

export default function PostList(props) {
    return (
        <div className="row">
                {[1,2,3,4].map(i => (
                    <PostSummary key={i} link={i}/>
                ))}
            
        </div>
    )
}