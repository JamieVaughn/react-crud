import React from 'react'

export default function PostDetails(props) {
    const id = props.match.params.id
    console.log(props)
    return (
        <div className="container section post-details">
            <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title"><a href="#">{props.link} - {id}</a></span>
                <p className="flow-text">This is the extended detailed notes for this link.</p>
                </div>
                <div className="card-action">
                <p>User Name - Date</p>
            </div>
        </div>
        </div>
    )
}