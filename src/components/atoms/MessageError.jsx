import React from 'react'

export default function MessageError({error, center}) {
  return (
    <>
        {
            error && <p className={center ? 'message-error message-error__center' : 'message-error'}>{error}</p>
        }
    </>
  )
}
