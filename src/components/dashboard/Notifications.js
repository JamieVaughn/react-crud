import React from 'react'

function Notifications(props) {
    const { notifications } = props;
    console.log(notifications)

    return (
      <div className="notifications section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Notifications</span>
            <ul className="notification text-small">
              {notifications && notifications.map(item => (
                <li key={item.id}>
                  <span className="pink-text">{item.user} </span>
                  <span>{item.content}</span>
                  <div className="grey-text note-date">
                    {JSON.stringify(notifications.time)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Notifications;