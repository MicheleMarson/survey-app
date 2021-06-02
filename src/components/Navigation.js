import React, { useEffect, createContext, useContext } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SendIcon from '@material-ui/icons/Send';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import "../style/Navigation.css"
import { useHistory } from 'react-router-dom'

const Navigation = (props) => {
  let {path, setPath, edit} = props
  let history = useHistory()
  

  useEffect(() => {
    setPath(history.location.pathname)
  },[path])

  return (
    <div onClick={(e) => setPath(history.location.pathnam)} className="navigation">
      <div className="navigation__container">
        <div onClick={(e) => history.push("/edit")} className={`navigation__nav ${(path == "/edit" || edit.edited) ? "active" : ""}`}>
          <div><CreateIcon/></div>
          <p>Uređivanje</p>
        </div>
        <div onClick={(e) => history.push("/view")} className={`navigation__nav ${path == "/view" ? "active" : ""}`}>
          <div><VisibilityIcon/></div>
          <p>Pregled</p>
        </div>
        <div onClick={(e) => history.push("/send")} className={`navigation__nav ${path == "/send" ? "active" : ""}`}>
          <div><SendIcon/></div>
          <p>Slanje</p>
        </div>
        <div onClick={(e) => history.push("/results")} className={`navigation__nav ${path == "/results" ? "active" : ""}`}>
          <div><EqualizerIcon/></div>
          <p>Rezultati</p>
        </div>
      </div>
    </div>
  )
}

export default Navigation
