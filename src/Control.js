import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlay,
    faPause,
    faForward,
    faBackward,
  } from "@fortawesome/free-solid-svg-icons";
  
const Control = (props) => {
    return (
        <div>
               <div className="controls">
      <button className="skip" onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="play"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip" onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
 
        </div>
    )
}

export default Control
