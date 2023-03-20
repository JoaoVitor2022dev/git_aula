import React, { useState } from 'react'

const index = () => {
 
    const [name, setName]= useState();

  return (
    <div>
        <h1>pagina principal {name} </h1>
    </div>
  )
}

export default index