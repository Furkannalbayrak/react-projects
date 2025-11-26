import React from 'react'
import { useSelector } from 'react-redux'
import '../css/events.css'

function Events({ index }) {

  const { userEvents } = useSelector((store) => store.github)
  const event = userEvents[index];

  // 1. Tarihi okunabilir hale getiren fonksiyon
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // 2. Event tipini güzelleştiren fonksiyon
  const formatType = (type) => {
    switch (type) {
      case "WatchEvent": return "Starred ★";
      case "PushEvent": return "Pushed ⇡";
      case "ForkEvent": return "Forked ⑂";
      case "CreateEvent": return "Created +";
      default: return type.replace("Event", "");
    }
  };

  return (
    <div className='event-wrapper'>
      <div className='events'>
        {/* Sol Taraf: Repo İsmi*/}
        <a 
          href={`https://github.com/${event.repo.name}`} 
          target="_blank" 
          rel="noreferrer" 
          className='eventName'
        >
          {event.repo.name}
        </a>

        {/* Sağ Taraf: Tip ve Tarih */}
        <div className='eventDiv'>
          <span className={`eventType ${event.type}`}>
            {formatType(event.type)}
          </span>
          <span className='eventTime'>
            {formatDate(event.created_at)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Events