import React from 'react'
import PostSummary from './PostSummary'
import PostSummaryAlt from './PostSummaryAlt'

export default function PostList(props) {
    return (
        <div className="row">
                {[12].map(i => (
                    <PostSummaryAlt key={i} link={i} title={'Title '+i}/>
                ))}
            
        </div>
    )
}