import "./single.css"

import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Singlepost from "../../singlepost/SinglePost"

export default function Single() {
  return (
    <div className="single">
        <Singlepost/>
        <Sidebar/>
          
        
    </div>
  )
}
