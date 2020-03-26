import React from 'react'
import { NavLink }  from 'react-router-dom'

export default function PostSummary(props) {
    return (
        <div className="card grey lighten-1">{console.log(props)}
            <div className="card-content">
                <span className="card-title"><a href="#">{props.link}</a></span>
                <p>I am a very simple card to use effectively.</p>
                <p> <NavLink to={`/post/${props.link}`}>See Details</NavLink></p>
                </div>
                <div className="card-action">
                <p>User Name - Date</p>
            </div>
        </div>
    )
}