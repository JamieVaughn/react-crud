import React from 'react'
import { NavLink }  from 'react-router-dom'

export default function PostSummary(props) {
    return (
        <div className="post card grey lighten-3">
            <div className="card-content">
                <span className="card-title"><a href={props.link}>{props.title}</a></span>
                <p className="summary">I am a very simple card to use effectively.</p>
                
            </div>
            <div className="card-action">
                <p className="footer">
                    <span>User Name</span>
                    <span>Date</span> 
                    <span> <NavLink to={`/post/${props.link}`}>See Notes</NavLink></span>
                </p>
            </div>
        </div>
    )
}