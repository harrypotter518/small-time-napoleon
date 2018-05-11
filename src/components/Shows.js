import React from 'react'
const Shows = (props) => {
  return (
    <div className="shows">
      SHOWS: All for the tests
      <div className={props.test ? "background test" : "background"} onClick={props.testButton}>
        <div className="info" style={props.test ? {opacity: '1'} : {opacity: '0'}}>here's the info</div>
      </div>
    </div>
  )
}

export default Shows