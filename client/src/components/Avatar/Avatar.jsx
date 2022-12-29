import React from 'react'

const Avatar = ({children,backgroundColor,px,py,borderRadius,fontSize,color,cursor}) => {

  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    borderRadius,
    fontSize,
    color: color || "black",
    textAlign:"center",
    cursor : cursor || "pointer",
    marginRight:"7px"
  }

  return (
    <div style={style}>{children}</div>
  )
}

export default Avatar