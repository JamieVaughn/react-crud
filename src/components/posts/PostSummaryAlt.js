import React from 'react'
import { NavLink }  from 'react-router-dom'

function fakeImg(id) {
    return `https://picsum.photos/id/${id}/${Math.floor(
      100 + Math.random() * 100
    )}/${Math.floor(100 + Math.random() * 150)}`;
  }

export default function PostSummaryAlt(props) {
    return (
        <div className="post card grey lighten-3">
           
            <div class="card horizontal">
                <div class="card-image">
                    <img src={fakeImg(props.link)} />
                    <span class="card-text">User - Date</span>
                    <NavLink 
                    to={`/post/${props.link}`} 
                    class="btn-floating halfway-fab waves-effect waves-light orange"
                    title="See Notes for this Post"><i class="material-icons">⇨</i></NavLink>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <span class="card-title"><a href={props.link}>{props.title}</a></span>
                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}