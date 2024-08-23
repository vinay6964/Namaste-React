import React from 'react'
import  {useRouteError} from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  console.log("🚀 ~ Error ~ err:", err)
  return (
    <div>
      <h1>404 {err.statusText}</h1>
      <h3>{err.error.message}</h3>
    </div>
  )
}

export default Error
