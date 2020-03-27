import React from 'react'
import PostSummary from './PostSummary'
import PostSummaryAlt from './PostSummaryAlt'

export default function PostList(props) {
    return (
        <div className="row">
                {[1,2,3,4].map(i => (
                    <PostSummary key={i} link={i} title={'Title '+i}/>
                ))}
            
        </div>
    )
}