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
      case "WatchEvent": return "Starred ★"; // Yıldızlama
      case "PushEvent": return "Pushed ⇡";   // Pushlama
      case "ForkEvent": return "Forked ⑂";   // Forklama
      case "CreateEvent": return "Created +"; // Oluşturma
      default: return type.replace("Event", ""); // Diğerleri
    }
  };

  return (
    <div className='event-wrapper'>
      <div className='events'>
        {/* Sol Taraf: Repo İsmi (Tıklanabilir Link) */}
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