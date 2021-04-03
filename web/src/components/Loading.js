import React from 'react'

const Loading = ({ isLoading, children }) => {
  if (isLoading) return <div className="flex items-center animate-spin"><ion-icon size="large" name="sync-outline"></ion-icon></div>
  return (
    <>
      {children}
    </>
  )
}

export default Loading
