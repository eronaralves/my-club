import React from "react";

export function PerfilPlayerScaled(props) {

  return (
    <div>
      <div>
        <img src={props.player}/>
        <div>
          <span></span>
          <div>
            <img/>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}