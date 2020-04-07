import React from 'react'
import { NavLink }  from 'react-router-dom'
import simpleIcons from 'simple-icons'
import PostSummary from './PostSummary';

function getIcon(str) {
    //https://simpleicons.org/?q=git <- search for more icon codes here
    const categories= ['HTML5', 'CSS3', 'CSS Wizardry', 'Git', 'webcomponents.org', 'Material Design', 'Bootstrap', 'Bulma', 'GitHub', 'Amazon AWS', 'JSON', 'Redux', 'Javascript', 'SVG', 'Visual Studio Code', 'freeCodeCamp', 'CodeSandbox', 'CodePen', 'Firebase', 'NPM', 'Node.js', 'React', 'React Router', 'Angular', 'Vue.js'];
    // let icon = simpleIcons.get(categories[Math.floor(categories.length * Math.random())]);
    str = categories.includes(str) ? str : 'Pinboard'
    let icon = simpleIcons.get(str)
    return {path: icon.path, fill: '#'+icon.hex}
  }



export default function PostSummaryAlt(props) {
    const { post } = props
    const {path, fill} = getIcon(post.category)
    return (
        <div className="post card grey lighten-3">
           
            <div className="card horizontal">
                <div className="card-image">
                    <svg fill={fill} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d={path}></path>
                    </svg>
                    <span className="card-text">{typeof post.createdAt == 'string' ? post.createdAt : 'No date found'}</span>
                    <NavLink 
                    to={`/post/${post.id}`} 
                    className="btn-floating halfway-fab waves-effect waves-light orange"
                    title="See Notes for this Post">
                        <i className="material-icons">⇨</i>
                    </NavLink>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <span className="card-title">
                            <a href={post.link} target='_blank'>
                                {post.title}
                            </a>
                        </span>
                        <span>{post.authorFirstName + ' ' + post.authorLastName}</span>
                        <p>{post.summary}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}