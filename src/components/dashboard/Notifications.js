import React from 'react'

export default function Notifications(props) {
    const { notifications } = props
    console.log(notifications)

    return (
        <div className='notifications section'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <h3 className='card-title'>Notifications</h3>
                    <ul className='notification text-small'>
                        {notifications && notifications.map( item => (
                            <li key={item.id}>
                                <span className='pink-text'>{item.user} </span>
                                <span>{item.content}</span>
                                <div className='grey-text note-date'>
                                    {/* {new Date(item.time).toDateString()} */}
                                    {typeof item.time == 'object' ? 'objec' : item.time}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}