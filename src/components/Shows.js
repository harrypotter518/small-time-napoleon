import React from 'react'

const Shows = () => (
  <div className="shows">
    <div className="calendar-container">
      <iframe title="calendar" src="https://feed.mikle.com/widget/v2/84035/" height="402px" width="100%" className="fw-iframe" scrolling="no" frameBorder="0"></iframe>
    </div>

    <div className="calendar-links">
      <p>Check back often as our calendar is updated regularly or check out the full calendar below.</p>
      <a target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/calendar/embed?src=smalltimenapoleonband%40gmail.com&ctz=America%2FNew_York">
        full calendar
      </a>
    </div>
  </div>
)

export default Shows