import React from 'react';
import  './style.css'
class popup extends React.component{
  render(){
    return(
      <div className = "popup">
        <div className = "popup-Inner">
          <h1 className = "close">x</h1><br/>
          <br/>
          <center>
            <span className = "tick">&#10003;</span>
            </center>
            <h2 className = "text2"> You have </br> successfully sighned up!</h2>
            </div>
            </div>
    )
  }

}
export default popup;