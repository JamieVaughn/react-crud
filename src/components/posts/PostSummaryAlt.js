import React from 'react'
import { NavLink }  from 'react-router-dom'
import simpleIcons from 'simple-icons'

function getIcon() {
    //https://simpleicons.org/?q=git <- search for more icon codes here
    const categories= ['HTML5', 'CSS3', 'CSS Wizardry', 'Git', 'webcomponents.org', 'Material Design', 'Bootstrap', 'Bulma', 'GitHub', 'Amazon AWS', 'JSON', 'Redux', 'Javascript', 'SVG', 'Visual Studio Code', 'freeCodeCamp', 'CodeSandbox', 'Firebase', 'NPM', 'Node.js', 'React', 'React Router', 'Angular', 'Vue.js']
    let icon = simpleIcons.get(categories[Math.floor(categories.length * Math.random())])
    return {path: icon.path, fill: '#'+icon.hex}
  }

export default function PostSummaryAlt(props) {
    const {path, fill} = getIcon()
    return (
        <div className="post card grey lighten-3">
           
            <div className="card horizontal">
                <div className="card-image">
                    <svg fill={fill} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d={path}></path>
                    </svg>
                    <span className="card-text">Date</span>
                    <NavLink 
                    to={`/post/${props.link}`} 
                    className="btn-floating halfway-fab waves-effect waves-light orange"
                    title="See Notes for this Post"><i className="material-icons">⇨</i></NavLink>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <span className="card-title"><a href={props.link}>{props.title}</a></span>
                        <span >User</span>
                        <p>I am a very simple card.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}