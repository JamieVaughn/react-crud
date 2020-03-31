import React from 'react'
import PostSummary from './PostSummary'
import PostSummaryAlt from './PostSummaryAlt'
import { NavLink } from 'react-router-dom'

export default function PostList(props) {
    const { post } = props
    return (
        <div className="row">
                {[1,2,3,4].map(i => (
                    // <NavLink to={'/post/'+i} key={i}>
                        <PostSummary key={i} link={i} title={'Title '+i}/>
                    // </NavLink>
                ))}
            
        </div>
    )
}